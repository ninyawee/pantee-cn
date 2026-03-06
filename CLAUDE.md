# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

pantee-cn is a documentation site and component registry for Thailand-focused map components built on MapLibre GL + Svelte 5. It follows the shadcn-svelte pattern — components are copied into user projects, not installed as a package. Based on [mapcn-svelte](https://github.com/MariusLang/mapcn-svelte).

## Commands

```bash
bun dev              # Start dev server
bun run build        # Build registry JSON then build site (runs build:registry + vite build)
bun run build:registry  # Generate static/r/*.json from registry definitions
bun run check        # Type-check with svelte-check
bun run lint         # Prettier + ESLint check
bun run format       # Auto-format with Prettier
```

No test framework is configured. The site deploys as a static site via `@sveltejs/adapter-static` (prerendered, with `200.html` fallback). `BASE_PATH` env var controls the base path (used for GitHub Pages: `/pantee-cn`).

## Architecture

### Registry System (shadcn-svelte pattern)

The installable map components live in `src/lib/registry/blocks/map/`. These are the components users copy into their projects via `bunx shadcn-svelte add`. The registry build step (`build:registry`) serializes them to `static/r/map.json` which the shadcn CLI reads.

Key components: `Map`, `MapMarker`, `MapPopup`, `MapRoute`, `MapControls`, `MapClusterLayer`, `MapAntRoute`, plus marker sub-components (`MarkerContent`, `MarkerPopup`, `MarkerTooltip`, `MarkerLabel`).

Re-exports from `svelte-maplibre-gl`: `getMapContext`, `getMarkerContext`.

### Documentation Site

- **Routes**: `src/routes/docs/[topic]/` — each doc page has `+page.svelte` (content) and `+page.server.ts` (loads example source + syntax highlighting)
- **Navigation**: `src/lib/docs-navigation.ts` — defines sidebar nav groups (Basics, Examples, Extensions, Components)
- **Example components**: `src/lib/components/docs/preview/examples/*.svelte` — live demos shown in docs. These are loaded as raw strings at build time via Vite's `?raw` glob import in `src/lib/examples.ts`. The import path `@/registry/map` is rewritten to `@/components/ui/map` for display.
- **Code highlighting**: `src/lib/highlight.ts` — Shiki-based, dual-theme (github-light/github-dark)
- **Preview wrapper**: `src/lib/components/docs/preview/ComponentPreview.svelte` — renders live example + source tabs
- **Layout components**: `src/lib/components/docs/DocsLayout.svelte`, `DocSidebar.svelte`, etc.

### Adding a New Doc Page

1. Create `src/routes/docs/[topic]/+page.svelte` and `+page.server.ts`
2. Create example component(s) in `src/lib/components/docs/preview/examples/`
3. In `+page.server.ts`, use `getExampleSource("ExampleName")` and `highlightCode()` to prepare source for display
4. Add navigation entry in `src/lib/docs-navigation.ts`

### Theme System

`src/lib/theme.ts` — Svelte store that syncs with `localStorage` and `<html>` class. The `Map` component auto-detects light/dark and switches between CARTO basemap styles (or custom styles via `styles` prop).

### Tech Stack

- **Framework**: SvelteKit + Svelte 5 (runes)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin), shadcn-svelte UI components
- **Maps**: `svelte-maplibre-gl` wrapping MapLibre GL JS, with extension packages for deck.gl, contour, PMTiles, Terra Draw
- **Build**: Vite 7, bun as package manager
- **Deployment**: Static site (GitHub Pages)
