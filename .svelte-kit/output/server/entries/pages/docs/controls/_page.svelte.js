import { m as head, d as derived } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/index3.js";
import { D as DocsLayout, a as DocsSection } from "../../../../chunks/DocsSection.js";
import { D as DocsCode } from "../../../../chunks/DocsCode.js";
import { C as ComponentPreview } from "../../../../chunks/ComponentPreview.js";
import "clsx";
import { M as Map } from "../../../../chunks/Map.js";
import { M as MapControls } from "../../../../chunks/MapControls.js";
function MapControlsExample($$renderer) {
  $$renderer.push(`<div class="h-100 w-full">`);
  Map($$renderer, {
    center: [2.3522, 48.8566],
    zoom: 11,
    children: ($$renderer2) => {
      MapControls($$renderer2, {
        position: "bottom-right",
        showZoom: true,
        showCompass: true,
        showLocate: true,
        showFullscreen: true
      });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const controlsSource = derived(() => page.data.basicMapSource);
    const controlsHighlighted = derived(() => page.data.controlsHighlighted);
    head("101qlkp", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Controls - pantee-cn</title>`);
      });
    });
    DocsLayout($$renderer2, {
      title: "Controls",
      description: "Add interactive controls to your map for zoom, compass, location, and fullscreen.",
      pathname: "/docs/controls",
      children: ($$renderer3) => {
        DocsSection($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<p>The `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MapControls`);
              }
            });
            $$renderer4.push(`<!----> component provides a set of interactive controls that can be positioned on any corner of the map.</p> `);
            ComponentPreview($$renderer4, {
              code: controlsSource(),
              highlightedCode: controlsHighlighted(),
              children: ($$renderer5) => {
                MapControlsExample($$renderer5);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
      }
    });
  });
}
export {
  _page as default
};
