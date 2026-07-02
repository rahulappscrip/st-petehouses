#!/usr/bin/env node
import { assertSitemapDiscovery } from "./lib/sitemap-discover.mjs";

const { indexable, errors } = assertSitemapDiscovery();

if (errors.length > 0) {
  console.error("Sitemap discovery check failed:\n");
  for (const error of errors) {
    console.error(`  - ${error}`);
  }
  process.exit(1);
}

console.log(`Sitemap discovery OK (${indexable.length} static routes):`);
for (const route of indexable) {
  console.log(`  ${route.path}`);
}
