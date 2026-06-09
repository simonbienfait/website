import { readFileSync } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export function GET() {
  const htmlPath = path.join(process.cwd(), "public/v2/index.html");
  let html = readFileSync(htmlPath, "utf8");

  // Inject <base href="/v2/"> so all relative paths (css/, images/, js/, fonts/)
  // resolve correctly when the page is served at /v2
  html = html.replace("<head>", '<head><base href="/v2/">');

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
