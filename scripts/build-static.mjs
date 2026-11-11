import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { access, copyFile, mkdir } from "node:fs/promises";

// Set this in Node so the same command works on macOS, Linux, and Windows.
process.env.JODI_STATIC_EXPORT = "1";
const cli = new URL("../node_modules/vinext/dist/cli.js", import.meta.url);
const result = spawnSync(process.execPath, [fileURLToPath(cli), "build", ...process.argv.slice(2)], {
  stdio: "inherit",
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

const output = new URL("../dist/client/", import.meta.url);
await access(new URL("index.html", output));

// Vinext beta.5 redirects /v2 during trailingSlash prerendering and silently
// skips that page. Export without the redirect, then provide a directory index
// too so /v2 works on ordinary static servers as well as clean-URL hosts.
await mkdir(new URL("v2/", output), { recursive: true });
await copyFile(new URL("v2.html", output), new URL("v2/index.html", output));
console.log("\nStatic website ready: dist/client/index.html (upload all of dist/client/).\n");
