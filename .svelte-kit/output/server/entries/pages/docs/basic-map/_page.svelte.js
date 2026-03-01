import { h as getContext, c as bind_props, e as escape_html, d as derived, m as head } from "../../../../chunks/index2.js";
import { D as DocsLayout, a as DocsSection } from "../../../../chunks/DocsSection.js";
import { D as DocsCode } from "../../../../chunks/DocsCode.js";
import { D as DocsLink } from "../../../../chunks/DocsLink.js";
import { C as ComponentPreview } from "../../../../chunks/ComponentPreview.js";
import "clsx";
import { M as Map } from "../../../../chunks/Map.js";
import { o as onDestroy } from "../../../../chunks/index-server.js";
import "maplibre-gl";
import { p as page } from "../../../../chunks/index3.js";
function BasicMapExample($$renderer) {
  $$renderer.push(`<div class="h-[400px] w-full">`);
  Map($$renderer, { center: [-74.006, 40.7128], zoom: 12 });
  $$renderer.push(`<!----></div>`);
}
function ControlledMapViewportTracker($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { viewport = void 0 } = $$props;
    getContext("map");
    onDestroy(() => {
    });
    bind_props($$props, { viewport });
  });
}
function ControlledMapExample($$renderer) {
  let viewport = { center: [-74.006, 40.7128], zoom: 8, bearing: 0, pitch: 0 };
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<div class="relative h-[400px] w-full">`);
    Map($$renderer2, {
      center: viewport.center,
      zoom: viewport.zoom,
      children: ($$renderer3) => {
        ControlledMapViewportTracker($$renderer3, {
          get viewport() {
            return viewport;
          },
          set viewport($$value) {
            viewport = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> <div role="status" aria-live="polite" class="bg-background/80 absolute top-2 left-2 z-10 flex flex-wrap gap-x-3 gap-y-1 rounded border px-2 py-1.5 font-mono text-xs backdrop-blur"><span><span class="text-muted-foreground">lng:</span> ${escape_html(viewport.center[0].toFixed(3))}</span> <span><span class="text-muted-foreground">lat:</span> ${escape_html(viewport.center[1].toFixed(3))}</span> <span><span class="text-muted-foreground">zoom:</span> ${escape_html(viewport.zoom.toFixed(1))}</span> <span><span class="text-muted-foreground">bearing:</span> ${escape_html(viewport.bearing.toFixed(1))}°</span> <span><span class="text-muted-foreground">pitch:</span> ${escape_html(viewport.pitch.toFixed(1))}°</span></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
function CustomStylePitchController($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    getContext("map");
  });
}
function CustomStyleExample($$renderer) {
  const styles = {
    default: void 0,
    openstreetmap: "https://tiles.openfreemap.org/styles/bright",
    openstreetmap3d: "https://tiles.openfreemap.org/styles/liberty"
  };
  let style = "default";
  let selectedStyle = derived(() => styles[style]);
  let stylesConfig = derived(() => selectedStyle() ? { light: selectedStyle(), dark: selectedStyle() } : void 0);
  $$renderer.push(`<div class="relative h-[400px] w-full">`);
  Map($$renderer, {
    center: [-0.1276, 51.5074],
    zoom: 15,
    styles: stylesConfig(),
    children: ($$renderer2) => {
      CustomStylePitchController($$renderer2);
      $$renderer2.push(`<!----> <div class="absolute top-2 right-2 z-10">`);
      $$renderer2.select(
        {
          value: style,
          class: "bg-background text-foreground rounded-md border px-2 py-1 text-sm shadow"
        },
        ($$renderer3) => {
          $$renderer3.option({ value: "default" }, ($$renderer4) => {
            $$renderer4.push(`Default (Carto)`);
          });
          $$renderer3.option({ value: "openstreetmap" }, ($$renderer4) => {
            $$renderer4.push(`OpenStreetMap`);
          });
          $$renderer3.option({ value: "openstreetmap3d" }, ($$renderer4) => {
            $$renderer4.push(`OpenStreetMap 3D`);
          });
        }
      );
      $$renderer2.push(`</div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const basicMapSource = derived(() => page.data.basicMapSource);
    const basicMapHighlighted = derived(() => page.data.basicMapHighlighted);
    const controlledMapFiles = derived(() => page.data.controlledMapFiles);
    const customStyleFiles = derived(() => page.data.customStyleFiles);
    head("17scvre", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Map - pantee-cn</title>`);
      });
    });
    DocsLayout($$renderer2, {
      title: "Map",
      description: "The simplest way to add an interactive map to your application.",
      pathname: "/docs/basic-map",
      children: ($$renderer3) => {
        DocsSection($$renderer3, {
          title: "Basic Usage",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>The `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Map`);
              }
            });
            $$renderer4.push(`<!----> component handles MapLibre GL setup, theming, and provides context for child components.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        ComponentPreview($$renderer3, {
          code: basicMapSource(),
          highlightedCode: basicMapHighlighted(),
          children: ($$renderer4) => {
            BasicMapExample($$renderer4);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Controlled Mode",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Monitor the map's viewport state in real-time. This is useful when you need to sync the map
			state with your application or respond to viewport changes. The example below shows live
			coordinates, zoom, bearing, and pitch as you interact with the map.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        ComponentPreview($$renderer3, {
          files: controlledMapFiles(),
          children: ($$renderer4) => {
            ControlledMapExample($$renderer4);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Custom Styles",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Use the `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->styles`);
              }
            });
            $$renderer4.push(`<!----> prop to provide custom map styles. This example uses free vector tiles from `);
            DocsLink($$renderer4, {
              href: "https://openfreemap.org",
              external: true,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->OpenFreeMap`);
              }
            });
            $$renderer4.push(`<!---->, an open-source
			project, the data comes from OpenStreetMap.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        ComponentPreview($$renderer3, {
          files: customStyleFiles(),
          children: ($$renderer4) => {
            CustomStyleExample($$renderer4);
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
