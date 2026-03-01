import { a as attributes, f as clsx, c as bind_props, m as head } from "../../../../chunks/index2.js";
import "clsx";
import { C as CodeBlock } from "../../../../chunks/CodeBlock.js";
import { c as cn } from "../../../../chunks/docs-navigation.js";
import { M as Map } from "../../../../chunks/Map.js";
import { M as MapControls } from "../../../../chunks/MapControls.js";
import { D as DocsLayout, a as DocsSection } from "../../../../chunks/DocsSection.js";
import { D as DocsLink } from "../../../../chunks/DocsLink.js";
import { D as DocsCode } from "../../../../chunks/DocsCode.js";
import { D as DocsNote } from "../../../../chunks/DocsNote.js";
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "card",
      class: clsx(cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const siteUrl = "https://pantee-cn.dev";
    const installCode = `npx shadcn-svelte@latest add ${siteUrl}/r/map.json`;
    const usageCode = `<script lang="ts">
  import { Map, MapControls } from "$lib/components/ui/map";
  import { Card } from "$lib/components/ui/card";
<\/script>

<Card class="h-[320px] overflow-hidden p-0">
  <Map center={[-74.006, 40.7128]} zoom={11}>
    <MapControls />
  </Map>
</Card>`;
    head("t7c0hb", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Installation - pantee-cn</title>`);
      });
    });
    DocsLayout($$renderer2, {
      title: "Installation",
      description: "How to install and set up pantee-cn in your project.",
      pathname: "/docs/installation",
      children: ($$renderer3) => {
        DocsSection($$renderer3, {
          title: "Prerequisites",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>A project with `);
            DocsLink($$renderer4, {
              href: "https://tailwindcss.com",
              external: true,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Tailwind CSS`);
              }
            });
            $$renderer4.push(`<!----> and `);
            DocsLink($$renderer4, {
              href: "https://www.shadcn-svelte.com",
              external: true,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->shadcn-svelte`);
              }
            });
            $$renderer4.push(`<!----> set up.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Installation",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Run the following command to add the map component:</p> `);
            CodeBlock($$renderer4, { code: installCode, language: "bash" });
            $$renderer4.push(`<!----> <p>This will install `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->maplibre-gl`);
              }
            });
            $$renderer4.push(`<!----> and add the map component to your project.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Usage",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Import and use the map component:</p> `);
            CodeBlock($$renderer4, { code: usageCode });
            $$renderer4.push(`<!----> `);
            Card($$renderer4, {
              class: "h-[320px] overflow-hidden rounded-lg p-0",
              children: ($$renderer5) => {
                Map($$renderer5, {
                  center: [-74.006, 40.7128],
                  zoom: 11,
                  children: ($$renderer6) => {
                    MapControls($$renderer6, {});
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsNote($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<strong>Note:</strong> The map uses free CARTO basemap tiles by default. No API key required. Tiles
		automatically switch between light and dark themes.`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
export {
  _page as default
};
