# Jodi365 — The person behind the connection

A complete local founder page for S. Anil Kumar, built from the supplied founder wireframe and researched public sources. It uses Jodi365’s actual logo and blue, with an original editorial design in ink, blue, and warm white.

## Run locally

Requires Node.js 22.13 or later.

```sh
npm install
npm run dev
```

Open the local address printed in the terminal, normally **http://127.0.0.1:5173**.

## The experience

- Founder introduction with the user-selected AI portrait (Option 4), applied to both Brand Blue and Editorial versions. The source and prompts are retained in `outputs/founder-portrait-options/`; optimised WebP hero and avatar assets load locally.
- Explicit racing, Hollywood cameo, and Startup Singam chapters, with genuine images and readable copy. The racing photo opens an original-photo evidence viewer with logo-detail and full-photo modes.
- Interactive publication selector with real articles, authentic press logos, the 2009 founding story, and prominent 13-year / four-degree / four-institution credentials.
- A responsive interview carousel with four real conversations and an accessible video dialog.
- Official Le Mans Cup Ajith photography with visible Jodi365 branding, a dedicated founder letter, referral sharing, and contact choices.
- Keyboard navigation, native modal focus containment, mobile menu, reduced-motion support, and reading progress.
- Locally hosted images and fonts. Video embeds are loaded after a visitor clicks Play.

## Main files

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Page content, navigation, and interactions |
| `app/globals.css` | Responsive design, layout, and motion |
| `app/fonts.css` | Local DM Sans, Manrope, and Playfair Display fonts |
| `app/layout.tsx` | Page metadata, updated social preview, and Person structured data |
| `public/images/` | Downloaded images and interview thumbnails |
| `sources-research.json` | Source links, image provenance, and factual corrections |
| `recent-portrait-sources.json` | New founder portrait, publication dates, and credential verification |
| `racing-branded-sources.json` | Original racing photo sources, dates, and visible logo locations |
| `proof-assets-sources.json` | Authentic publication and university logos, article titles and dates |
| `scripts/qa-site.mjs` | Browser verification with desktop and mobile screenshots |
| `outputs/` | Preview screenshots and QA results |

This is a local prototype. It has not been published or connected to the live Jodi365 site. The contact actions open Jodi365’s existing contact page and the founder’s LinkedIn profile; there is no simulated lead form.

The supplied HTML’s strategy annotations are omitted from visitor-facing content. Verified credentials replace the wireframe’s inaccurate MBA date. The personal note uses the supplied copy with editorial draft additions. Source links for photographs, public appearances, and articles are recorded in `sources-research.json`.

## Verify

```sh
npm run check
npm run build
```

For browser QA, start the development server and run `npm run qa`. It uses the installed Google Chrome channel and writes screenshots and machine-readable results to `outputs/`. The checks cover dialog behavior and focus, image loading, interview playback setup, carousel navigation, clipboard sharing, education details, mobile navigation, and horizontal overflow at 375, 390, 768, 1024, and 1440 pixels.

## Standalone static hosting

The page has no server or database dependency. To generate a standalone website:

```sh
npm run check
npm run build:static
```

Upload the **contents of `dist/client/`** to your hosting provider's web root, or
set that folder as the publish directory in a Git-based deployment. The output
includes `index.html` (Brand Blue), `v2/index.html` (Editorial), JavaScript, CSS,
images, fonts, and React navigation payloads. Keep the entire directory together;
uploading only `index.html` is insufficient. No Node.js server is needed to serve
this export. Preview it over HTTP rather than opening HTML with `file://`.

For a hosting service that runs the build from this repository, use Node.js
22.13 or later, the `founder-site` project directory, build command
`npm run build:static`, and publish directory `dist/client`. Configure the host
to serve directory `index.html` files, including `/v2/`; do not rewrite all
requests to the root HTML, because the export includes separate page and
navigation files.

This command keeps both designs for review. Before a public launch, choose the
final design, remove the comparison switcher, and set the chosen page's production
metadata and indexing settings. The final domain has not been configured.

`npm run build` still creates the Cloudflare Worker build; `npm start` previews
that Worker locally. Each build replaces `dist/`, so run `build:static` last when
preparing files for static hosting. The generated `dist/server/` directory is
build tooling and is not part of the static upload.

## Integration

The second revision prioritises verifiable trust signals, readable supporting copy, and explicit headlines. The founder note is a dedicated dark section, press coverage can be explored without leaving the page, and the racing association has a closer-look viewer linked to the original official source.

The presentation is contained in `app/page.tsx`, `app/globals.css`, and the local assets. It can be ported into the existing Jodi365 application; the surrounding navigation and footer can be replaced with the production site’s shared components. Section links and real outbound destinations are explicit in the page component. No production Jodi365 code was changed.
