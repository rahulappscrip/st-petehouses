import type { BlogFaqItem, BlogTocItem } from "@/lib/blog";
import { isWordPressMediaUrl, toWordPressImageProxy } from "@/lib/wordpress/fetch";

function decodeHtmlEntities(text: string): string {
  const named: Record<string, string> = {
    "&amp;": "&",
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
    "&rsquo;": "'",
    "&lsquo;": "'",
    "&rdquo;": '"',
    "&ldquo;": '"',
    "&mdash;": "—",
    "&ndash;": "–",
    "&#8217;": "'",
    "&#8216;": "'",
    "&#8220;": '"',
    "&#8221;": '"',
    "&#8211;": "–",
    "&#8212;": "—",
  };

  let decoded = text;
  for (const [entity, char] of Object.entries(named)) {
    decoded = decoded.replaceAll(entity, char);
  }

  decoded = decoded.replace(/&#(\d+);/g, (_, num) => String.fromCharCode(Number(num)));
  decoded = decoded.replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
    String.fromCharCode(Number.parseInt(hex, 16)),
  );

  return decoded;
}

function stripHtml(html: string): string {
  return decodeHtmlEntities(
    html
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function proxyWordPressImagesInHtml(html: string): string {
  return html.replace(
    /https:\/\/wordpress-1628174-6490314\.cloudwaysapps\.com\/[^"'\\s)]+/g,
    (url) => (isWordPressMediaUrl(url) ? toWordPressImageProxy(url) : url),
  );
}

function closeOpenParagraph(html: string): string {
  const openP = (html.match(/<p[\s>]/gi) || []).length;
  const closeP = (html.match(/<\/p>/gi) || []).length;
  if (openP <= closeP) return html;
  return `${html.replace(/(?:<br\s*\/?>|\s)+$/i, "")}</p>`;
}

function stripNextStepsBlock(html: string): string {
  let cleaned = html.replace(
    /(?:<br\s*\/?>\s*)*<strong>\s*Next steps\s*<\/strong>[\s\S]*$/i,
    "",
  );
  cleaned = cleaned.replace(
    /<p[^>]*>\s*<strong>\s*Next steps\s*<\/strong>\s*<\/p>[\s\S]*$/i,
    "",
  );
  return closeOpenParagraph(cleaned);
}

function extractParagraphTexts(html: string): string[] {
  const paragraphs: string[] = [];
  const regex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match = regex.exec(html);
  while (match) {
    const text = stripHtml(match[1]);
    if (text) paragraphs.push(text);
    match = regex.exec(html);
  }
  return paragraphs;
}

function parseFaqPairs(faqHtml: string): BlogFaqItem[] {
  const stripped = faqHtml
    .replace(/<strong>\s*FAQ\s*<\/strong>/gi, "")
    .replace(/<h2[^>]*>[\s\S]*?<\/h2>/gi, "")
    .replace(/<h4[^>]*>[\s\S]*?<\/h4>/gi, "");

  const paragraphs = extractParagraphTexts(stripped);
  const faq: BlogFaqItem[] = [];

  for (let i = 0; i < paragraphs.length; i += 1) {
    const text = paragraphs[i];

    if (text.endsWith("?")) {
      const answer = paragraphs[i + 1];
      if (answer && !answer.endsWith("?")) {
        faq.push({ q: text, a: answer });
        i += 1;
      }
      continue;
    }

    // Handle paragraphs where multiple Q&As were pasted into one block.
    const questionMatches = text.match(/[^?]+\?/g);
    if (!questionMatches?.length) continue;

    let remainder = text;
    for (const question of questionMatches) {
      const q = question.trim();
      remainder = remainder.slice(remainder.indexOf(question) + question.length).trim();
      const nextQuestionAt = remainder.search(/[^?]+\?/);
      const a = (nextQuestionAt === -1 ? remainder : remainder.slice(0, nextQuestionAt)).trim();
      if (q && a) faq.push({ q, a });
      if (nextQuestionAt !== -1) remainder = remainder.slice(nextQuestionAt).trim();
    }
  }

  return faq;
}

function findAuthorBioStartIndex(html: string): number {
  const johnGardepe = html.search(/<p[^>]*>\s*<strong>\s*John Gardepe\s*<\/strong>/i);
  if (johnGardepe !== -1) {
    const before = html.slice(Math.max(0, johnGardepe - 120), johnGardepe);
    const jgParagraph = before.match(/<p[^>]*>\s*JG\s*<\/p>\s*$/i);
    if (jgParagraph?.index !== undefined) {
      return johnGardepe - (before.length - jgParagraph.index);
    }
    return johnGardepe;
  }

  const linkedInIdx = html.search(/john-gardepe-b68070160/i);
  if (linkedInIdx !== -1) {
    const before = html.slice(0, linkedInIdx);
    const coFounderIdx = before.search(/Co-Founder\s*&(?:amp;)?\s*Head of Acquisitions/i);
    if (coFounderIdx !== -1) {
      const paragraphStart = before.lastIndexOf("<p", coFounderIdx);
      return paragraphStart !== -1 ? paragraphStart : coFounderIdx;
    }
  }

  return -1;
}

function stripAuthorBioBlock(html: string): string {
  const bioStart = findAuthorBioStartIndex(html);
  if (bioStart === -1) return html;

  const faqStart = findFaqStartIndex(html);
  const nextStepsStart = html.search(/(?:<br\s*\/?>\s*)*<strong>\s*Next steps\s*<\/strong>/i);

  let bioEnd = html.length;
  if (faqStart !== -1 && faqStart > bioStart) bioEnd = faqStart;
  else if (nextStepsStart !== -1 && nextStepsStart > bioStart) bioEnd = nextStepsStart;

  return html.slice(0, bioStart).concat(html.slice(bioEnd)).trim();
}

function findFaqStartIndex(html: string): number {
  const markers = [
    /<strong>\s*FAQ\s*<\/strong>/i,
    /<h2[^>]*>[\s\S]*?Frequently asked[\s\S]*?<\/h2>/i,
    /Frequently asked\s*<em>questions<\/em>/i,
  ];

  for (const marker of markers) {
    const match = html.match(marker);
    if (match?.index !== undefined) return match.index;
  }

  return -1;
}

function shortenTocLabel(label: string): string {
  let text = label.trim();

  text = text
    .replace(/\s+in\s+St\.?\s+Pete(?:rsburg)?,?\s*FL\.?\??$/i, "")
    .replace(/\s+in\s+Florida\.?\??$/i, "")
    .replace(/\?\s*$/, "");

  const dashSplit = text.split(/\s+[—–]\s+/);
  if (dashSplit.length > 1 && dashSplit[0].length >= 12) {
    text = dashSplit[0];
  }

  const rewrites: [RegExp, string][] = [
    [/short[- ]term rental.*ban/i, 'What the "ban" actually is'],
    [/30[- ]day rental minimum/i, "The 30-day rule & exceptions"],
    [/enforcement.*fine/i, "Enforcement & fines"],
    [/investor strategy/i, "Investor strategy"],
    [/step[- ]by[- ]step compliance/i, "Step-by-step compliance"],
    [/licensing.*tax/i, "Licensing & taxes"],
    [/alternatives.*str.*restricted/i, "Alternatives & selling"],
    [/st\.?\s*petersburg vs/i, "St. Pete vs. nearby cities"],
  ];

  for (const [pattern, replacement] of rewrites) {
    if (pattern.test(text)) return replacement;
  }

  text = text
    .replace(/^What is the\s+/i, "")
    .replace(/^What are the\s+/i, "")
    .replace(/^How to\s+/i, "")
    .replace(/^When did the\s+/i, "")
    .replace(/^What steps should (?:I|you) take to\s+/i, "Steps to ");

  if (text.length > 0) {
    text = text.charAt(0).toUpperCase() + text.slice(1);
  }

  const maxLen = 42;
  if (text.length <= maxLen) return text;

  const truncated = text.slice(0, maxLen);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 18 ? lastSpace : maxLen).trim()}…`;
}

function slugifyHeading(text: string): string {
  return stripHtml(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripEmbeddedToc(html: string): string {
  return html
    .replace(/<h4[^>]*>[\s\S]*?On this page[\s\S]*?<\/h4>\s*<ol[^>]*>[\s\S]*?<\/ol>/gi, "")
    .trim();
}

function addTocFromH2Headings(html: string): { contentHtml: string; toc: BlogTocItem[] } {
  const toc: BlogTocItem[] = [];
  const usedIds = new Set<string>();

  const contentHtml = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs, inner) => {
    const label = stripHtml(inner);
    if (!label) return match;

    const existingId = attrs.match(/\bid\s*=\s*["']([^"']+)["']/i)?.[1];
    let id = existingId ?? slugifyHeading(label);

    if (!id) return match;

    let suffix = 2;
    const baseId = id;
    while (usedIds.has(id)) {
      id = `${baseId}-${suffix}`;
      suffix += 1;
    }
    usedIds.add(id);
    toc.push({ id, label: shortenTocLabel(label) });

    if (existingId) return match;

    const attrsWithoutId = attrs.replace(/\s+id\s*=\s*["'][^"']*["']/gi, "");
    return `<h2${attrsWithoutId} id="${id}">${inner}</h2>`;
  });

  return { contentHtml, toc };
}

export type ParsedWordPressContent = {
  contentHtml: string;
  faq: BlogFaqItem[];
  toc: BlogTocItem[];
};

export function parseWordPressContent(html: string): ParsedWordPressContent {
  let working = stripAuthorBioBlock(proxyWordPressImagesInHtml(html));
  let faq: BlogFaqItem[] = [];

  const faqStart = findFaqStartIndex(working);
  if (faqStart !== -1) {
    const beforeFaq = working.slice(0, faqStart);
    let faqBlock = working.slice(faqStart);

    const nextStepsInFaq = faqBlock.search(
      /(?:<br\s*\/?>\s*)*<strong>\s*Next steps\s*<\/strong>/i,
    );
    if (nextStepsInFaq !== -1) {
      faqBlock = faqBlock.slice(0, nextStepsInFaq);
    }

    faq = parseFaqPairs(faqBlock);
    working = beforeFaq;
  }

  working = stripNextStepsBlock(stripEmbeddedToc(working));

  const { contentHtml, toc } = addTocFromH2Headings(working.trim());

  return {
    contentHtml,
    faq,
    toc,
  };
}
