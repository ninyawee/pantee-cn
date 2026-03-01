import { s as spread_props, j as attr_class, f as clsx, k as ensure_array_like, e as escape_html, b as attr, m as head, d as derived } from "../../../../chunks/index2.js";
import { D as DocsLayout, a as DocsSection } from "../../../../chunks/DocsSection.js";
import { D as DocsCode } from "../../../../chunks/DocsCode.js";
import { D as DocsNote } from "../../../../chunks/DocsNote.js";
import { D as DocsLink } from "../../../../chunks/DocsLink.js";
import { C as ComponentPreview } from "../../../../chunks/ComponentPreview.js";
import { M as Map } from "../../../../chunks/Map.js";
import { M as MapMarker, a as MarkerContent, b as MarkerTooltip, c as MarkerLabel, C as Clock } from "../../../../chunks/MarkerLabel.js";
import { I as Icon, c as cn, B as Button, M as Map_pin } from "../../../../chunks/docs-navigation.js";
import { P as Popup } from "../../../../chunks/Popup.js";
import { X } from "../../../../chunks/x.js";
import "clsx";
import { N as Navigation } from "../../../../chunks/navigation.js";
import { p as page } from "../../../../chunks/index3.js";
function External_link($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M15 3h6v6" }],
      ["path", { "d": "M10 14 21 3" }],
      [
        "path",
        {
          "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "external-link" },
      /**
       * @component @name ExternalLink
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgM2g2djYiIC8+CiAgPHBhdGggZD0iTTEwIDE0IDIxIDMiIC8+CiAgPHBhdGggZD0iTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/external-link
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
function Star($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "star" },
      /**
       * @component @name Star
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuNTI1IDIuMjk1YS41My41MyAwIDAgMSAuOTUgMGwyLjMxIDQuNjc5YTIuMTIzIDIuMTIzIDAgMCAwIDEuNTk1IDEuMTZsNS4xNjYuNzU2YS41My41MyAwIDAgMSAuMjk0LjkwNGwtMy43MzYgMy42MzhhMi4xMjMgMi4xMjMgMCAwIDAtLjYxMSAxLjg3OGwuODgyIDUuMTRhLjUzLjUzIDAgMCAxLS43NzEuNTZsLTQuNjE4LTIuNDI4YTIuMTIyIDIuMTIyIDAgMCAwLTEuOTczIDBMNi4zOTYgMjEuMDFhLjUzLjUzIDAgMCAxLS43Ny0uNTZsLjg4MS01LjEzOWEyLjEyMiAyLjEyMiAwIDAgMC0uNjExLTEuODc5TDIuMTYgOS43OTVhLjUzLjUzIDAgMCAxIC4yOTQtLjkwNmw1LjE2NS0uNzU1YTIuMTIyIDIuMTIyIDAgMCAwIDEuNTk3LTEuMTZ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/star
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
function MarkerPopup($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      class: className,
      closeButton = false,
      offset = 16,
      anchor,
      closeOnClick,
      closeOnMove = false,
      focusAfterOpen,
      maxWidth = "none"
    } = $$props;
    let open = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Popup($$renderer3, {
        offset,
        anchor,
        closeButton: false,
        closeOnClick,
        closeOnMove,
        focusAfterOpen,
        maxWidth,
        class: "maplibre-popup-transparent",
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div${attr_class(clsx(cn("animate-in fade-in-0 zoom-in-95 bg-popover text-popover-foreground relative rounded-md border p-3 shadow-md", className)))}>`);
          if (closeButton) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<button type="button" class="ring-offset-background focus:ring-ring absolute top-1 right-1 z-10 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none" aria-label="Close popup">`);
            X($$renderer4, { class: "h-4 w-4" });
            $$renderer4.push(`<!----> <span class="sr-only">Close</span></button>`);
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]--> `);
          children?.($$renderer4);
          $$renderer4.push(`<!----></div>`);
        },
        $$slots: { default: true }
      });
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function MarkersExample($$renderer) {
  const locations = [
    {
      id: 1,
      name: "Empire State Building",
      lng: -73.9857,
      lat: 40.7484
    },
    { id: 2, name: "Central Park", lng: -73.9654, lat: 40.7829 },
    { id: 3, name: "Times Square", lng: -73.9855, lat: 40.758 }
  ];
  $$renderer.push(`<div class="h-[400px] w-full">`);
  Map($$renderer, {
    center: [-73.98, 40.76],
    zoom: 12,
    children: ($$renderer2) => {
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(locations);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let location = each_array[$$index];
        MapMarker($$renderer2, {
          longitude: location.lng,
          latitude: location.lat,
          children: ($$renderer3) => {
            MarkerContent($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<div class="bg-primary size-4 rounded-full border-2 border-white shadow-lg"></div>`);
              }
            });
            $$renderer3.push(`<!----> `);
            MarkerTooltip($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(location.name)}`);
              }
            });
            $$renderer3.push(`<!----> `);
            MarkerPopup($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<div class="space-y-1"><p class="text-foreground font-medium">${escape_html(location.name)}</p> <p class="text-muted-foreground text-xs">${escape_html(location.lat.toFixed(4))}, ${escape_html(location.lng.toFixed(4))}</p></div>`);
              }
            });
            $$renderer3.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
function PopupExample($$renderer) {
  const places = [
    {
      id: 1,
      name: "The Metropolitan Museum of Art",
      label: "Museum",
      category: "Museum",
      rating: 4.8,
      reviews: 12453,
      hours: "10:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1575223970966-76ae61ee7838?w=300&h=200&fit=crop",
      lng: -73.9632,
      lat: 40.7794
    },
    {
      id: 2,
      name: "Brooklyn Bridge",
      label: "Landmark",
      category: "Landmark",
      rating: 4.9,
      reviews: 8234,
      hours: "Open 24 hours",
      image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=300&h=200&fit=crop",
      lng: -73.9969,
      lat: 40.7061
    },
    {
      id: 3,
      name: "Grand Central Terminal",
      label: "Transit",
      category: "Transit",
      rating: 4.7,
      reviews: 5621,
      hours: "5:15 AM - 2:00 AM",
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=300&h=200&fit=crop",
      lng: -73.9772,
      lat: 40.7527
    }
  ];
  $$renderer.push(`<div class="h-125 w-full">`);
  Map($$renderer, {
    center: [-73.98, 40.74],
    zoom: 11,
    children: ($$renderer2) => {
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(places);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let place = each_array[$$index];
        MapMarker($$renderer2, {
          longitude: place.lng,
          latitude: place.lat,
          children: ($$renderer3) => {
            MarkerContent($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<div class="size-5 cursor-pointer rounded-full border-2 border-white bg-rose-500 shadow-lg transition-transform hover:scale-110"></div> `);
                MarkerLabel($$renderer4, {
                  position: "bottom",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(place.label)}`);
                  }
                });
                $$renderer4.push(`<!---->`);
              }
            });
            $$renderer3.push(`<!----> `);
            MarkerPopup($$renderer3, {
              class: "w-62 p-0",
              children: ($$renderer4) => {
                $$renderer4.push(`<div class="relative h-32 overflow-hidden rounded-t-md"><img${attr("src", place.image)}${attr("alt", place.name)} class="h-full w-full object-cover" loading="lazy"/></div> <div class="space-y-2 p-3"><div><span class="text-muted-foreground text-xs font-medium tracking-wide uppercase">${escape_html(place.category)}</span> <h3 class="text-foreground leading-tight font-semibold">${escape_html(place.name)}</h3></div> <div class="flex items-center gap-3 text-sm"><div class="flex items-center gap-1">`);
                Star($$renderer4, { class: "size-3.5 fill-amber-400 text-amber-400" });
                $$renderer4.push(`<!----> <span class="font-medium">${escape_html(place.rating)}</span> <span class="text-muted-foreground">(${escape_html(place.reviews.toLocaleString())})</span></div></div> <div class="text-muted-foreground flex items-center gap-1.5 text-sm">`);
                Clock($$renderer4, { class: "size-3.5" });
                $$renderer4.push(`<!----> <span>${escape_html(place.hours)}</span></div> <div class="flex gap-2 pt-1">`);
                Button($$renderer4, {
                  size: "sm",
                  class: "h-8 flex-1",
                  children: ($$renderer5) => {
                    Navigation($$renderer5, { class: "mr-1.5 size-3.5" });
                    $$renderer5.push(`<!----> Directions`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> `);
                Button($$renderer4, {
                  size: "sm",
                  variant: "outline",
                  class: "h-8",
                  children: ($$renderer5) => {
                    External_link($$renderer5, { class: "size-3.5" });
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----></div></div>`);
              }
            });
            $$renderer3.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
function DraggableMarkerExample($$renderer) {
  let markerPosition = { lng: -73.98, lat: 40.75 };
  function handleDragEnd(e) {
    markerPosition = { lng: e.lng, lat: e.lat };
  }
  $$renderer.push(`<div class="h-100 w-full">`);
  Map($$renderer, {
    center: [-73.98, 40.75],
    zoom: 12,
    children: ($$renderer2) => {
      MapMarker($$renderer2, {
        longitude: markerPosition.lng,
        latitude: markerPosition.lat,
        draggable: true,
        ondragend: handleDragEnd,
        children: ($$renderer3) => {
          MarkerContent($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="cursor-move">`);
              Map_pin($$renderer4, { class: "fill-black stroke-white dark:fill-white", size: 28 });
              $$renderer4.push(`<!----></div>`);
            }
          });
          $$renderer3.push(`<!----> `);
          MarkerPopup($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="space-y-1"><p class="text-foreground font-medium">Coordinates</p> <p class="text-muted-foreground text-xs">${escape_html(markerPosition.lat.toFixed(4))},${escape_html(markerPosition.lng.toFixed(4))}</p></div>`);
            }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const markersSource = derived(() => page.data.markersSource);
    const markersHighlighted = derived(() => page.data.markersHighlighted);
    const popupSource = derived(() => page.data.popupSource);
    const popupHighlighted = derived(() => page.data.popupHighlighted);
    const draggableMarkerSource = derived(() => page.data.draggableMarkerSource);
    const draggableMarkerHighlighted = derived(() => page.data.draggableMarkerHighlighted);
    head("1aia13c", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Markers - pantee-cn</title>`);
      });
    });
    DocsLayout($$renderer2, {
      title: "Markers",
      description: "Add interactive markers to your map with popups and tooltips.",
      pathname: "/docs/markers",
      children: ($$renderer3) => {
        DocsSection($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Use `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MapMarker`);
              }
            });
            $$renderer4.push(`<!----> to place markers on the map. Each marker can have custom content, popups that open on click, and
			tooltips that appear on hover.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsNote($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<strong>Performance tip:</strong> `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MapMarker`);
              }
            });
            $$renderer4.push(`<!----> is DOM-based and works best for a few hundred markers. For larger datasets,
		see the `);
            DocsLink($$renderer4, {
              href: "/docs/advanced-usage#example-markers-via-layers",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->GeoJSON layers example`);
              }
            });
            $$renderer4.push(`<!----> instead. Rendering many DOM markers can make the browser sluggish.`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Basic Example",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Simple markers with tooltips and popups showing location information.</p> `);
            ComponentPreview($$renderer4, {
              code: markersSource(),
              highlightedCode: markersHighlighted(),
              children: ($$renderer5) => {
                MarkersExample($$renderer5);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Rich Popups",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Build complex popups with images, ratings, and action buttons using shadcn-svelte components.</p> `);
            ComponentPreview($$renderer4, {
              code: popupSource(),
              highlightedCode: popupHighlighted(),
              class: "h-125",
              children: ($$renderer5) => {
                PopupExample($$renderer5);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Draggable Marker",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Create draggable markers that users can move around the map. Click the marker to see its
			current coordinates in a popup.</p> `);
            ComponentPreview($$renderer4, {
              code: draggableMarkerSource(),
              highlightedCode: draggableMarkerHighlighted(),
              children: ($$renderer5) => {
                DraggableMarkerExample($$renderer5);
              }
            });
            $$renderer4.push(`<!---->`);
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
