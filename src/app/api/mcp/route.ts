import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getAgentMdContent } from "@/lib/agent-md-pages";
import { getBlogMdContent, isBlogAgentMdKey } from "@/lib/agent-md/get-blog-md-content";
import { buildMcpServerCard } from "@/lib/agent-discovery/mcp-server-card";

const MCP_PROTOCOL_VERSION = "2025-03-26";

type JsonRpcRequest = {
  jsonrpc?: string;
  id?: string | number | null;
  method?: string;
  params?: Record<string, unknown>;
};

type ToolDefinition = {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
  };
};

const TOOLS: ToolDefinition[] = [
  {
    name: "get_page_markdown",
    description:
      "Return markdown for a site page. Path examples: index, contact, stop-foreclosure-florida, blog/how-to-price-an-inherited-home-in-florida.",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "Page path without leading slash or .md suffix.",
        },
      },
      required: ["path"],
    },
  },
  {
    name: "get_site_index",
    description: "Return llms.txt — site index, contact info, and guidance for AI systems.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
];

function jsonRpcResult(id: string | number | null | undefined, result: unknown) {
  return Response.json(
    { jsonrpc: "2.0", id: id ?? null, result },
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}

function jsonRpcError(
  id: string | number | null | undefined,
  code: number,
  message: string,
  status = 200,
) {
  return Response.json(
    { jsonrpc: "2.0", id: id ?? null, error: { code, message } },
    {
      status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}

function normalizePagePath(path: string): string {
  let normalized = path.trim().replace(/^\/+/, "").replace(/\/+$/, "");
  if (normalized.endsWith(".md")) {
    normalized = normalized.slice(0, -3);
  }
  return normalized || "index";
}

async function resolvePageMarkdown(path: string): Promise<string | null> {
  const key = normalizePagePath(path);

  if (isBlogAgentMdKey(key)) {
    return getBlogMdContent(key);
  }

  return getAgentMdContent(key) ?? null;
}

async function readSiteIndex(): Promise<string> {
  return readFile(join(process.cwd(), "public", "llms.txt"), "utf8");
}

async function handleToolCall(name: string, args: Record<string, unknown>) {
  if (name === "get_site_index") {
    return {
      content: [{ type: "text", text: await readSiteIndex() }],
    };
  }

  if (name === "get_page_markdown") {
    const path = typeof args.path === "string" ? args.path : "";
    if (!path.trim()) {
      throw new Error("path is required");
    }

    const markdown = await resolvePageMarkdown(path);
    if (!markdown) {
      throw new Error(`No markdown found for path: ${path}`);
    }

    return {
      content: [{ type: "text", text: markdown }],
    };
  }

  throw new Error(`Unknown tool: ${name}`);
}

async function handleRequest(body: JsonRpcRequest) {
  const { id, method, params } = body;

  if (method === "initialize") {
    const card = buildMcpServerCard();
    return jsonRpcResult(id, {
      protocolVersion: MCP_PROTOCOL_VERSION,
      capabilities: {
        tools: {},
        resources: {},
      },
      serverInfo: card.serverInfo,
    });
  }

  if (method === "notifications/initialized") {
    return new Response(null, { status: 204 });
  }

  if (method === "tools/list") {
    return jsonRpcResult(id, { tools: TOOLS });
  }

  if (method === "tools/call") {
    const name = typeof params?.name === "string" ? params.name : "";
    const args =
      params?.arguments && typeof params.arguments === "object"
        ? (params.arguments as Record<string, unknown>)
        : {};

    try {
      const result = await handleToolCall(name, args);
      return jsonRpcResult(id, result);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Tool call failed";
      return jsonRpcResult(id, {
        content: [{ type: "text", text: message }],
        isError: true,
      });
    }
  }

  return jsonRpcError(id, -32601, `Method not found: ${method ?? "unknown"}`);
}

export async function GET() {
  const card = buildMcpServerCard();
  return Response.json(
    {
      ...card,
      protocolVersion: MCP_PROTOCOL_VERSION,
      message: "POST JSON-RPC 2.0 requests to this endpoint.",
    },
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}

export async function POST(request: Request) {
  let body: JsonRpcRequest;

  try {
    body = (await request.json()) as JsonRpcRequest;
  } catch {
    return jsonRpcError(null, -32700, "Invalid JSON", 400);
  }

  if (body.jsonrpc && body.jsonrpc !== "2.0") {
    return jsonRpcError(body.id, -32600, "Invalid JSON-RPC version", 400);
  }

  return handleRequest(body);
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
