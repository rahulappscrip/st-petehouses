import { getSiteOrigin } from "@/lib/site-url";

const CONTENT_SIGNALS_COMMENT = `# As a condition of accessing this website, you agree to abide by the following content signals:
# (a)  If a content-signal = yes, you may collect content for the corresponding use.
# (b)  If a content-signal = no, you may not collect content for the corresponding use.
# (c)  If the website operator does not include a content signal for a corresponding use,
#      the website operator neither grants nor restricts permission via content signal with
#      respect to the corresponding use.
# The content signals and their meanings are:
# search: building a search index and providing search results (e.g., returning hyperlinks
#         and short excerpts from your website's contents). Search does not include
#         providing AI-generated search summaries.
# ai-input: inputting content into one or more AI models (e.g., retrieval augmented
#           generation, grounding, or other real-time taking of content for generative
#           AI search answers).
# ai-train: training or fine-tuning AI models.`;

export function buildRobotsTxt(): string {
  const baseUrl = getSiteOrigin();

  return [
    CONTENT_SIGNALS_COMMENT,
    "",
    "User-agent: *",
    "Content-Signal: ai-train=no, search=yes, ai-input=yes",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /*.md",
    "",
    `Sitemap: ${baseUrl}/sitemap.xml`,
    `Sitemap: ${baseUrl}/blogs/sitemap.xml`,
    `Host: ${baseUrl}`,
    "",
  ].join("\n");
}
