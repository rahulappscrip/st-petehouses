import fs from "node:fs";
import path from "node:path";

const PROJECT_ROOT = process.cwd();

function walkLatestMtime(targetPath: string): number {
  if (!fs.existsSync(targetPath)) return 0;

  const stat = fs.statSync(targetPath);
  if (stat.isFile()) return stat.mtimeMs;

  let latestMs = stat.mtimeMs;
  for (const entry of fs.readdirSync(targetPath, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    latestMs = Math.max(latestMs, walkLatestMtime(path.join(targetPath, entry.name)));
  }

  return latestMs;
}

export function getLastModified(...relativePaths: string[]): Date {
  let latestMs = 0;

  for (const relativePath of relativePaths) {
    latestMs = Math.max(latestMs, walkLatestMtime(path.join(PROJECT_ROOT, relativePath)));
  }

  return new Date(latestMs || Date.now());
}
