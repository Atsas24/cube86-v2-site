import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";
const width = parseInt(process.argv[4] || "1440", 10);
const height = parseInt(process.argv[5] || "900", 10);

const dir = path.resolve("temporary screenshots");
fs.mkdirSync(dir, { recursive: true });

const existing = fs
  .readdirSync(dir)
  .map((f) => parseInt((f.match(/screenshot-(\d+)/) || [])[1] || "0", 10))
  .filter((n) => Number.isFinite(n));
const n = (existing.length ? Math.max(...existing) : 0) + 1;
const suffix = label ? `-${label}` : "";
const out = path.join(dir, `screenshot-${n}${suffix}.png`);

const executablePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const browser = await puppeteer.launch({
  headless: true,
  executablePath,
  defaultViewport: { width, height, deviceScaleFactor: 1 },
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
  timeout: 60_000,
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle0", timeout: 60_000 });
await new Promise((r) => setTimeout(r, 600));
await page.screenshot({ path: out, fullPage: true });
await browser.close();

console.log(out);
