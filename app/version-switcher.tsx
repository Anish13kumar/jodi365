"use client";

import { usePathname } from "next/navigation";

/* Floating toggle to compare the current founder page ("/") with v2 ("/v2").
   Self-contained styles so neither version's CSS is affected. Remove this
   component (and its line in layout.tsx) once a version is chosen. */
const versions = [
  { href: "/", label: "A · Brand Blue", title: "Current version: Jodi365 blue, sans-serif headings" },
  { href: "/v2", label: "B · Editorial", title: "New version: navy, cream and gold, serif headings, follows the wireframe" },
];

export default function VersionSwitcher() {
  const path = (usePathname() || "/").replace(/\/$/, "") || "/";

  return <nav aria-label="Page version" className="vs-root">
    <style>{`
      .vs-root{position:fixed;left:16px;bottom:16px;z-index:9999;display:flex;align-items:center;gap:4px;padding:4px;border-radius:999px;background:rgba(14,26,48,.92);box-shadow:0 10px 30px rgba(0,0,0,.25);font:500 13px/1 "DM Sans",system-ui,sans-serif;backdrop-filter:blur(8px)}
      .vs-root span{color:rgba(255,255,255,.6);padding:0 8px 0 10px;letter-spacing:.08em;text-transform:uppercase;font-size:11px}
      .vs-root a{display:inline-flex;align-items:center;min-height:36px;padding:0 14px;border-radius:999px;color:#fff;text-decoration:none;transition:background .2s}
      .vs-root a:hover{background:rgba(255,255,255,.12)}
      .vs-root a[aria-current="page"]{background:#fff;color:#0e1a30}
      .vs-root a:focus-visible{outline:2px solid #c9a961;outline-offset:2px}
      @media print{.vs-root{display:none}}
    `}</style>
    <span>Compare</span>
    {versions.map(v => <a key={v.href} href={v.href} title={v.title} aria-current={path === v.href ? "page" : undefined}>{v.label}</a>)}
  </nav>;
}
