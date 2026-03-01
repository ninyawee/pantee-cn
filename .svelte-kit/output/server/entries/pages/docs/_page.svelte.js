import { s as spread_props, m as head, k as ensure_array_like, e as escape_html } from "../../../chunks/index2.js";
import { D as DocsLayout, a as DocsSection } from "../../../chunks/DocsSection.js";
import { D as DocsLink } from "../../../chunks/DocsLink.js";
import { Z as Zap } from "../../../chunks/zap.js";
import { I as Icon, C as Code, L as Layers } from "../../../chunks/docs-navigation.js";
function Box($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
        }
      ],
      ["path", { "d": "m3.3 7 8.7 5 8.7-5" }],
      ["path", { "d": "M12 22V12" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "box" },
      /**
       * @component @name Box
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgOGEyIDIgMCAwIDAtMS0xLjczbC03LTRhMiAyIDAgMCAwLTIgMGwtNyA0QTIgMiAwIDAgMCAzIDh2OGEyIDIgMCAwIDAgMSAxLjczbDcgNGEyIDIgMCAwIDAgMiAwbDctNEEyIDIgMCAwIDAgMjEgMTZaIiAvPgogIDxwYXRoIGQ9Im0zLjMgNyA4LjcgNSA4LjctNSIgLz4KICA8cGF0aCBkPSJNMTIgMjJWMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/box
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Moon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "moon" },
      /**
       * @component @name Moon
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuOTg1IDEyLjQ4NmE5IDkgMCAxIDEtOS40NzMtOS40NzJjLjQwNS0uMDIyLjYxNy40Ni40MDIuODAzYTYgNiAwIDAgMCA4LjI2OCA4LjI2OGMuMzQ0LS4yMTUuODI1LS4wMDQuODAzLjQwMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/moon
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Puzzle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "puzzle" },
      /**
       * @component @name Puzzle
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUuMzkgNC4zOWExIDEgMCAwIDAgMS42OC0uNDc0IDIuNSAyLjUgMCAxIDEgMy4wMTQgMy4wMTUgMSAxIDAgMCAwLS40NzQgMS42OGwxLjY4MyAxLjY4MmEyLjQxNCAyLjQxNCAwIDAgMSAwIDMuNDE0TDE5LjYxIDE1LjM5YTEgMSAwIDAgMS0xLjY4LS40NzQgMi41IDIuNSAwIDEgMC0zLjAxNCAzLjAxNSAxIDEgMCAwIDEgLjQ3NCAxLjY4bC0xLjY4MyAxLjY4MmEyLjQxNCAyLjQxNCAwIDAgMS0zLjQxNCAwTDguNjEgMTkuNjFhMSAxIDAgMCAwLTEuNjguNDc0IDIuNSAyLjUgMCAxIDEtMy4wMTQtMy4wMTUgMSAxIDAgMCAwIC40NzQtMS42OGwtMS42ODMtMS42ODJhMi40MTQgMi40MTQgMCAwIDEgMC0zLjQxNEw0LjM5IDguNjFhMSAxIDAgMCAxIDEuNjguNDc0IDIuNSAyLjUgMCAxIDAgMy4wMTQtMy4wMTUgMSAxIDAgMCAxLS40NzQtMS42OGwxLjY4My0xLjY4MmEyLjQxNCAyLjQxNCAwIDAgMSAzLjQxNCAweiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/puzzle
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function _page($$renderer) {
  const features = [
    {
      icon: Zap,
      title: "Zero Config",
      description: "Works out of the box with free map tiles. No API keys needed."
    },
    {
      icon: Moon,
      title: "Theme Aware",
      description: "Automatically switches between light and dark map styles."
    },
    {
      icon: Puzzle,
      title: "Composable",
      description: "Build complex UIs with simple, composable components."
    },
    {
      icon: Code,
      title: "TypeScript",
      description: "Full type safety with comprehensive TypeScript support."
    },
    {
      icon: Box,
      title: "Copy & Paste",
      description: "Own your code. No dependencies, just copy into your project."
    },
    {
      icon: Layers,
      title: "Any Map Style",
      description: "Use any MapLibre-compatible tiles: MapTiler, Carto, OpenStreetMap, and more."
    }
  ];
  head("1xmjmrw", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Introduction - pantee-cn</title>`);
    });
  });
  DocsLayout($$renderer, {
    title: "Introduction",
    description: "Beautiful, accessible map components.",
    pathname: "/docs",
    children: ($$renderer2) => {
      DocsSection($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<p><strong>pantee-cn</strong> provides beautifully designed, accessible, and customizable map
			components. Built on `);
          DocsLink($$renderer3, {
            href: "https://maplibre.org",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapLibre GL`);
            }
          });
          $$renderer3.push(`<!----> , styled with `);
          DocsLink($$renderer3, {
            href: "https://tailwindcss.com",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Tailwind CSS`);
            }
          });
          $$renderer3.push(`<!----> , and designed to work with `);
          DocsLink($$renderer3, {
            href: "https://shadcn-svelte.com",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->shadcn-svelte`);
            }
          });
          $$renderer3.push(`<!----> .</p>`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "Why pantee-cn?",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>There's no proper copy-paste, easy-to-use map integration for Svelte. Most solutions
			require complex configurations, API keys, or heavy wrapper libraries. pantee-cn solves this:</p> <ul><li><strong class="text-foreground">One Command:</strong> Run the install, get a working map. No config
				files, no API keys, no setup.</li> <li><strong class="text-foreground">Own Your Code:</strong> Copy the components into your project.
				Modify anything.</li> <li><strong class="text-foreground">No Wrapper Overhead:</strong> Built directly on MapLibre. Drop to the raw API whenever you need.</li> <li><strong class="text-foreground">Looks Good Already:</strong> Thoughtful defaults with dark mode. Style with Tailwind as needed.</li> <li><strong class="text-foreground">Works Anywhere:</strong> Bring your own tiles — MapTiler, Carto,
				OSM, or any MapLibre-compatible source.</li></ul>`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "Why MapLibre Directly?",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>pantee-cn uses `);
          DocsLink($$renderer3, {
            href: "https://maplibre.org",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapLibre`);
            }
          });
          $$renderer3.push(`<!----> directly instead of wrapper libraries like `);
          DocsLink($$renderer3, {
            href: "https://github.com/MIERUNE/svelte-maplibre-gl",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->svelte-maplibre-gl`);
            }
          });
          $$renderer3.push(`<!----> . This keeps components close to the underlying API — when you copy a pantee-cn component, you
			fully own the map instance without extra framework dependencies.</p> <p>UI elements like markers, popups, and tooltips are rendered via Svelte portals, giving you
			complete styling freedom. You can drop down to raw MapLibre APIs anytime without
			"escaping" a wrapper.</p>`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "Any Map Style",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>pantee-cn works with any `);
          DocsLink($$renderer3, {
            href: "https://maplibre.org/maplibre-style-spec/",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapLibre-compatible tiles`);
            }
          });
          $$renderer3.push(`<!----> . This means you can use tiles from virtually any provider:</p> <ul><li>`);
          DocsLink($$renderer3, {
            href: "https://www.maptiler.com",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapTiler`);
            }
          });
          $$renderer3.push(`<!----> - Beautiful vector tiles with extensive customization options</li> <li>`);
          DocsLink($$renderer3, {
            href: "https://carto.com/basemaps",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Carto`);
            }
          });
          $$renderer3.push(`<!----> - Clean, minimal basemaps perfect for data visualization</li> <li>`);
          DocsLink($$renderer3, {
            href: "https://www.openstreetmap.org",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->OpenStreetMap`);
            }
          });
          $$renderer3.push(`<!----> - Community-driven, open-source map data</li> <li>`);
          DocsLink($$renderer3, {
            href: "https://stadiamaps.com",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Stadia Maps`);
            }
          });
          $$renderer3.push(`<!----> - Fast, reliable tile hosting with multiple styles</li> <li>`);
          DocsLink($$renderer3, {
            href: "https://www.thunderforest.com",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Thunderforest`);
            }
          });
          $$renderer3.push(`<!----> - Specialized maps for outdoors, cycling, and transport</li> <li>And any other provider that supports the MapLibre style spec</li></ul>`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "Features",
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="not-prose mt-4 grid gap-4 sm:grid-cols-2"><!--[-->`);
          const each_array = ensure_array_like(features);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let feature = each_array[$$index];
            $$renderer3.push(`<div class="bg-card space-y-2 rounded-lg border p-4"><div class="flex items-center gap-2"><div class="bg-primary/10 flex size-8 items-center justify-center rounded-md">`);
            feature.icon($$renderer3, { class: "text-primary size-4" });
            $$renderer3.push(`<!----></div> <h3 class="text-foreground font-medium">${escape_html(feature.title)}</h3></div> <p class="text-muted-foreground text-sm">${escape_html(feature.description)}</p></div>`);
          }
          $$renderer3.push(`<!--]--></div>`);
        }
      });
      $$renderer2.push(`<!---->`);
    }
  });
}
export {
  _page as default
};
