import { SITE } from "@/lib/constants";

const COMPANY_LINE = "We Buy St Pete Houses · (727) 477-8998 · SellFast@WeBuyStPeteHouses.com";

type PageHeaderInput = {
  title: string;
  description: string;
  canonicalPath: string;
  keyword?: string;
};

export function pageHeader({ title, description, canonicalPath, keyword }: PageHeaderInput): string {
  const canonical = `${SITE.url.replace(/\/$/, "")}${canonicalPath.replace(/\/$/, "")}`;
  const lines = [
    `# ${title}`,
    "",
    `> ${description}`,
    "",
    `- **Canonical URL:** ${canonical}`,
  ];
  if (keyword) lines.push(`- **Primary keyword:** ${keyword}`);
  lines.push(`- **Company:** ${COMPANY_LINE}`, "");
  return lines.join("\n");
}
