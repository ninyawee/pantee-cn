import { m as head, d as derived } from "../../../../chunks/index2.js";
import { D as DocsLayout, a as DocsSection } from "../../../../chunks/DocsSection.js";
import { D as DocsCode } from "../../../../chunks/DocsCode.js";
import { C as ComponentPreview } from "../../../../chunks/ComponentPreview.js";
import "clsx";
import { M as Map } from "../../../../chunks/Map.js";
import { M as MapPopup } from "../../../../chunks/MapPopup.js";
import { B as Button } from "../../../../chunks/docs-navigation.js";
import { p as page } from "../../../../chunks/index3.js";
function StandalonePopupExample($$renderer) {
  let showPopup = true;
  $$renderer.push(`<div class="relative h-[400px] w-full">`);
  Map($$renderer, {
    center: [-74.006, 40.7128],
    zoom: 13,
    children: ($$renderer2) => {
      if (showPopup) {
        $$renderer2.push("<!--[-->");
        MapPopup($$renderer2, {
          longitude: -74.006,
          latitude: 40.7128,
          closeButton: true,
          focusAfterOpen: false,
          closeOnClick: false,
          onclose: () => showPopup = false,
          class: "w-62",
          children: ($$renderer3) => {
            $$renderer3.push(`<div class="space-y-2"><h3 class="text-foreground font-semibold">New York City</h3> <p class="text-muted-foreground text-sm">The city that never sleeps. Population: 8.3 million</p> `);
            Button($$renderer3, {
              size: "sm",
              variant: "outline",
              class: "w-full",
              onclick: () => showPopup = false,
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->Close`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----></div>`);
          }
        });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  if (!showPopup) {
    $$renderer.push("<!--[-->");
    Button($$renderer, {
      size: "sm",
      class: "absolute bottom-4 left-4 z-10",
      onclick: () => showPopup = true,
      children: ($$renderer2) => {
        $$renderer2.push(`<!---->Show Popup`);
      },
      $$slots: { default: true }
    });
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const popupSource = derived(() => page.data.popupSource);
    const popupHighlighted = derived(() => page.data.popupHighlighted);
    head("1yjjuis", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Popups - pantee-cn</title>`);
      });
    });
    DocsLayout($$renderer2, {
      title: "Standalone Popups",
      description: "Display popups anywhere on the map without markers.",
      pathname: "/docs/popups",
      children: ($$renderer3) => {
        DocsSection($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Use `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MapPopup`);
              }
            });
            $$renderer4.push(`<!----> to display a popup at any location on the map. Unlike `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MarkerPopup`);
              }
            });
            $$renderer4.push(`<!---->, standalone popups are not attached to markers and can be
			controlled programmatically.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        ComponentPreview($$renderer3, {
          code: popupSource(),
          highlightedCode: popupHighlighted(),
          children: ($$renderer4) => {
            StandalonePopupExample($$renderer4);
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
