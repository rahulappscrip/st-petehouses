import https from "node:https";
const q = `{ post(id: "how-as-is-really-works-when-a-cash-buyer-inspects-your-home", idType: SLUG) { author { node { name authorRelated { authorCompany } } } } }`;
const body = JSON.stringify({ query: q });
const req = https.request(
  { hostname: "wordpress-1628174-6490314.cloudwaysapps.com", path: "/graphql", method: "POST", headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(body) }, rejectUnauthorized: false },
  (r) => { let d = ""; r.on("data", (c) => (d += c)); r.on("end", () => console.log(d)); },
);
req.write(body);
req.end();
