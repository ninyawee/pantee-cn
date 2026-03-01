import { a as attributes, f as clsx, c as bind_props, k as ensure_array_like, e as escape_html, m as head } from "../../../../chunks/index2.js";
import { D as DocsLayout, a as DocsSection } from "../../../../chunks/DocsSection.js";
import { D as DocsNote } from "../../../../chunks/DocsNote.js";
import { D as DocsLink } from "../../../../chunks/DocsLink.js";
import "clsx";
import { C as CodeBlock } from "../../../../chunks/CodeBlock.js";
import { D as DocsCode } from "../../../../chunks/DocsCode.js";
import { c as cn } from "../../../../chunks/docs-navigation.js";
function Table($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div data-slot="table-container" class="relative w-full overflow-x-auto"><table${attributes({
      "data-slot": "table",
      class: clsx(cn("w-full caption-bottom text-sm", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></table></div>`);
    bind_props($$props, { ref });
  });
}
function Table_body($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<tbody${attributes({
      "data-slot": "table-body",
      class: clsx(cn("[&_tr:last-child]:border-0", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></tbody>`);
    bind_props($$props, { ref });
  });
}
function Table_cell($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<td${attributes({
      "data-slot": "table-cell",
      class: clsx(cn("bg-clip-padding p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pe-0", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></td>`);
    bind_props($$props, { ref });
  });
}
function Table_head($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<th${attributes({
      "data-slot": "table-head",
      class: clsx(cn("text-foreground h-10 bg-clip-padding px-2 text-start align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pe-0", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></th>`);
    bind_props($$props, { ref });
  });
}
function Table_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<thead${attributes({
      "data-slot": "table-header",
      class: clsx(cn("[&_tr]:border-b", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></thead>`);
    bind_props($$props, { ref });
  });
}
function Table_row($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<tr${attributes({
      "data-slot": "table-row",
      class: clsx(cn("hover:[&,&>svelte-css-wrapper]:[&>th,td]:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></tr>`);
    bind_props($$props, { ref });
  });
}
function DocsPropTable($$renderer, $$props) {
  let props = $$props["props"];
  $$renderer.push(`<div class="my-4 overflow-hidden rounded-lg border">`);
  Table($$renderer, {
    children: ($$renderer2) => {
      Table_header($$renderer2, {
        children: ($$renderer3) => {
          Table_row($$renderer3, {
            class: "hover:bg-transparent",
            children: ($$renderer4) => {
              Table_head($$renderer4, {
                class: "h-11 px-4 font-medium",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Prop`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              Table_head($$renderer4, {
                class: "h-11 px-4 font-medium",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Type`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              Table_head($$renderer4, {
                class: "h-11 px-4 font-medium",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Default`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              Table_head($$renderer4, {
                class: "h-11 px-4 font-medium",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Description`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Table_body($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(props);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let prop = each_array[$$index];
            Table_row($$renderer3, {
              children: ($$renderer4) => {
                Table_cell($$renderer4, {
                  class: "text-primary px-4 py-3.5 align-top font-mono",
                  children: ($$renderer5) => {
                    DocsCode($$renderer5, {
                      className: "text-[13px]",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(prop.name)}`);
                      }
                    });
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> `);
                Table_cell($$renderer4, {
                  class: "text-muted-foreground px-4 py-3.5 align-top font-mono",
                  children: ($$renderer5) => {
                    DocsCode($$renderer5, {
                      className: "text-xs",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(prop.type)}`);
                      }
                    });
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> `);
                Table_cell($$renderer4, {
                  class: "text-muted-foreground px-4 py-3.5 align-top font-mono",
                  children: ($$renderer5) => {
                    DocsCode($$renderer5, {
                      className: "text-xs",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(prop.default ?? "—")}`);
                      }
                    });
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> `);
                Table_cell($$renderer4, {
                  class: "text-muted-foreground px-4 py-3.5 text-sm leading-relaxed",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(prop.description)}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!---->`);
              },
              $$slots: { default: true }
            });
          }
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
  bind_props($$props, { props });
}
function _page($$renderer) {
  const anatomyCode = `<Map>
  <MapMarker longitude={...} latitude={...}>
    <MarkerContent>
      <MarkerLabel />
    </MarkerContent>
    <MarkerPopup />
    <MarkerTooltip />
  </MapMarker>

  <MapPopup longitude={...} latitude={...} />
  <MapControls />
  <MapRoute coordinates={...} />
  <MapClusterLayer data={...} />
</Map>`;
  const useMapCode = `<script lang="ts">
  import { getContext } from "svelte";
  import type MapLibreGL from "maplibre-gl";

  const mapCtx = getContext<{
    getMap: () => MapLibreGL.Map | null;
    isLoaded: () => boolean;
  }>("map");

  // Access the map instance
  const map = mapCtx.getMap();
  const isLoaded = mapCtx.isLoaded();
<\/script>`;
  head("d104oh", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>API Reference - pantee-cn</title>`);
    });
  });
  DocsLayout($$renderer, {
    title: "API Reference",
    description: "Complete reference for all map components and their props.",
    pathname: "/docs/api-reference",
    children: ($$renderer2) => {
      DocsNote($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<strong>Note:</strong> This library is built on top of `);
          DocsLink($$renderer3, {
            href: "https://maplibre.org/maplibre-gl-js/docs/API/",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapLibre GL JS`);
            }
          });
          $$renderer3.push(`<!----> . Most components extend the native MapLibre options. Refer to the `);
          DocsLink($$renderer3, {
            href: "https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapLibre Map API`);
            }
          });
          $$renderer3.push(`<!----> for additional options not listed here.`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "Component Anatomy",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>All parts of the component that you can use and combine to build your map.</p> `);
          CodeBlock($$renderer3, { code: anatomyCode, showCopyButton: false });
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "Map",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>The root container component that initializes MapLibre GL and provides context to child
			components. Automatically handles theme switching between light and dark modes.</p> <p>Extends `);
          DocsLink($$renderer3, {
            href: "https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapOptions/",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapOptions`);
            }
          });
          $$renderer3.push(`<!----> from MapLibre GL (excluding `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->container`);
            }
          });
          $$renderer3.push(`<!----> and `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->style`);
            }
          });
          $$renderer3.push(`<!----> ).</p> `);
          DocsPropTable($$renderer3, {
            props: [
              {
                name: "children",
                type: "Snippet",
                description: "Child components (markers, popups, controls, routes)."
              },
              {
                name: "theme",
                type: '"light" | "dark"',
                description: "Theme for the map. If not provided, automatically detects from document class or system preference."
              },
              {
                name: "styles",
                type: "{ light?: string | StyleSpecification; dark?: string | StyleSpecification }",
                description: "Custom map styles for light and dark themes. Overrides the default Carto base map tiles."
              },
              {
                name: "projection",
                type: "ProjectionSpecification",
                description: "Map projection type. Use { type: 'globe' } for 3D globe view."
              }
            ]
          });
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "Map Context",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>A hook that provides access to the MapLibre map instance and loading state. Must be used
			within a `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Map`);
            }
          });
          $$renderer3.push(`<!----> component.</p> `);
          CodeBlock($$renderer3, { code: useMapCode, language: "svelte", showCopyButton: false });
          $$renderer3.push(`<!----> <p>Provides `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->getMap()`);
            }
          });
          $$renderer3.push(`<!----> returning `);
          DocsLink($$renderer3, {
            href: "https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapLibre.Map`);
            }
          });
          $$renderer3.push(`<!----> instance, and `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->isLoaded()`);
            }
          });
          $$renderer3.push(`<!----> returning a boolean tells you if the map is loaded and ready to use.</p>`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "MapControls",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>Renders map control buttons (zoom, compass, locate, fullscreen). Must be used inside `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Map`);
            }
          });
          $$renderer3.push(`<!----> .</p> `);
          DocsPropTable($$renderer3, {
            props: [
              {
                name: "position",
                type: '"top-left" | "top-right" | "bottom-left" | "bottom-right"',
                default: '"bottom-right"',
                description: "Position of the controls on the map."
              },
              {
                name: "showZoom",
                type: "boolean",
                default: "true",
                description: "Show zoom in/out buttons."
              },
              {
                name: "showCompass",
                type: "boolean",
                default: "false",
                description: "Show compass button to reset bearing."
              },
              {
                name: "showLocate",
                type: "boolean",
                default: "false",
                description: "Show locate button to find user's location."
              },
              {
                name: "showFullscreen",
                type: "boolean",
                default: "false",
                description: "Show fullscreen toggle button."
              },
              {
                name: "className",
                type: "string",
                description: "Additional CSS classes for the controls container."
              },
              {
                name: "onLocate",
                type: "(coords: { longitude: number; latitude: number }) => void",
                description: "Callback with user coordinates when located."
              }
            ]
          });
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "MapMarker",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>A container for marker-related components. Provides context for its children and handles
			marker positioning.</p> <p>Extends `);
          DocsLink($$renderer3, {
            href: "https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MarkerOptions/",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MarkerOptions`);
            }
          });
          $$renderer3.push(`<!----> from MapLibre GL (excluding `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->element`);
            }
          });
          $$renderer3.push(`<!----> ).</p> `);
          DocsPropTable($$renderer3, {
            props: [
              {
                name: "longitude",
                type: "number",
                description: "Longitude coordinate for marker position."
              },
              {
                name: "latitude",
                type: "number",
                description: "Latitude coordinate for marker position."
              },
              {
                name: "children",
                type: "Snippet",
                description: "Marker subcomponents (MarkerContent, MarkerPopup, etc)."
              },
              {
                name: "onClick",
                type: "(e: MouseEvent) => void",
                description: "Callback when marker is clicked."
              },
              {
                name: "onMouseEnter",
                type: "(e: MouseEvent) => void",
                description: "Callback when mouse enters marker."
              },
              {
                name: "onMouseLeave",
                type: "(e: MouseEvent) => void",
                description: "Callback when mouse leaves marker."
              },
              {
                name: "onDragStart",
                type: "(lngLat: {lng, lat}) => void",
                description: "Callback when marker drag starts (requires draggable: true)."
              },
              {
                name: "onDrag",
                type: "(lngLat: {lng, lat}) => void",
                description: "Callback during marker drag (requires draggable: true)."
              },
              {
                name: "onDragEnd",
                type: "(lngLat: {lng, lat}) => void",
                description: "Callback when marker drag ends (requires draggable: true)."
              }
            ]
          });
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "MarkerContent",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>Renders the visual content of a marker. Must be used inside `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapMarker`);
            }
          });
          $$renderer3.push(`<!----> . If no children provided, renders a default blue dot marker.</p> `);
          DocsPropTable($$renderer3, {
            props: [
              {
                name: "children",
                type: "Snippet",
                description: "Custom marker content. Defaults to a blue dot."
              },
              {
                name: "className",
                type: "string",
                description: "Additional CSS classes for the marker container."
              }
            ]
          });
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "MarkerPopup",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>Renders a popup attached to the marker that opens on click. Must be used inside `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapMarker`);
            }
          });
          $$renderer3.push(`<!----> .</p> <p>Extends `);
          DocsLink($$renderer3, {
            href: "https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/PopupOptions/",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->PopupOptions`);
            }
          });
          $$renderer3.push(`<!----> from MapLibre GL (excluding `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->className`);
            }
          });
          $$renderer3.push(`<!----> and `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->closeButton`);
            }
          });
          $$renderer3.push(`<!----> ).</p> `);
          DocsNote($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->The `);
              DocsCode($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->className`);
                }
              });
              $$renderer4.push(`<!----> and `);
              DocsCode($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->closeButton`);
                }
              });
              $$renderer4.push(`<!----> from MapLibre's PopupOptions are excluded to prevent style conflicts. Use the component's
			own props to style the popup. MapLibre's default popup styles are reset via CSS.`);
            }
          });
          $$renderer3.push(`<!----> `);
          DocsPropTable($$renderer3, {
            props: [
              {
                name: "children",
                type: "Snippet",
                description: "Popup content."
              },
              {
                name: "className",
                type: "string",
                description: "Additional CSS classes for the popup container."
              },
              {
                name: "closeButton",
                type: "boolean",
                default: "false",
                description: "Show a close button in the popup."
              }
            ]
          });
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "MarkerTooltip",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>Renders a tooltip that appears on hover. Must be used inside `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapMarker`);
            }
          });
          $$renderer3.push(`<!----> .</p> <p>Extends `);
          DocsLink($$renderer3, {
            href: "https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/PopupOptions/",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->PopupOptions`);
            }
          });
          $$renderer3.push(`<!----> from MapLibre GL (excluding `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->className`);
            }
          });
          $$renderer3.push(`<!----> , `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->closeButton`);
            }
          });
          $$renderer3.push(`<!----> , and `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->closeOnClick`);
            }
          });
          $$renderer3.push(`<!----> as tooltips auto-dismiss on hover out).</p> `);
          DocsNote($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->The `);
              DocsCode($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->className`);
                }
              });
              $$renderer4.push(`<!----> from MapLibre's PopupOptions is excluded to prevent style conflicts. Use the component's
			own `);
              DocsCode($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->className`);
                }
              });
              $$renderer4.push(`<!----> prop to style the tooltip content. MapLibre's default popup styles are reset via CSS.`);
            }
          });
          $$renderer3.push(`<!----> `);
          DocsPropTable($$renderer3, {
            props: [
              {
                name: "children",
                type: "Snippet",
                description: "Tooltip content."
              },
              {
                name: "className",
                type: "string",
                description: "Additional CSS classes for the tooltip container."
              }
            ]
          });
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "MarkerLabel",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>Renders a text label above or below the marker. Must be used inside `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MarkerContent`);
            }
          });
          $$renderer3.push(`<!----> .</p> `);
          DocsPropTable($$renderer3, {
            props: [
              {
                name: "children",
                type: "Snippet",
                description: "Label text content."
              },
              {
                name: "className",
                type: "string",
                description: "Additional CSS classes for the label."
              },
              {
                name: "position",
                type: '"top" | "bottom"',
                default: '"top"',
                description: "Position of the label relative to the marker."
              }
            ]
          });
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "MapPopup",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>A standalone popup component that can be placed anywhere on the map without a marker. Must be
			used inside `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Map`);
            }
          });
          $$renderer3.push(`<!----> .</p> <p>Extends `);
          DocsLink($$renderer3, {
            href: "https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/PopupOptions/",
            external: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->PopupOptions`);
            }
          });
          $$renderer3.push(`<!----> from MapLibre GL (excluding `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->className`);
            }
          });
          $$renderer3.push(`<!----> and `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->closeButton`);
            }
          });
          $$renderer3.push(`<!----> ).</p> `);
          DocsNote($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->The `);
              DocsCode($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->className`);
                }
              });
              $$renderer4.push(`<!----> and `);
              DocsCode($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->closeButton`);
                }
              });
              $$renderer4.push(`<!----> from MapLibre's PopupOptions are excluded to prevent style conflicts. Use the component's
			own props to style the popup. MapLibre's default popup styles are reset via CSS.`);
            }
          });
          $$renderer3.push(`<!----> `);
          DocsPropTable($$renderer3, {
            props: [
              {
                name: "longitude",
                type: "number",
                description: "Longitude coordinate for popup position."
              },
              {
                name: "latitude",
                type: "number",
                description: "Latitude coordinate for popup position."
              },
              {
                name: "onClose",
                type: "() => void",
                description: "Callback when popup is closed."
              },
              {
                name: "children",
                type: "Snippet",
                description: "Popup content."
              },
              {
                name: "className",
                type: "string",
                description: "Additional CSS classes for the popup container."
              },
              {
                name: "closeButton",
                type: "boolean",
                default: "false",
                description: "Show a close button in the popup."
              }
            ]
          });
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "MapRoute",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>Renders a line/route on the map connecting coordinate points. Must be used inside `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Map`);
            }
          });
          $$renderer3.push(`<!----> . Supports click and hover interactions for building route selection UIs.</p> `);
          DocsPropTable($$renderer3, {
            props: [
              {
                name: "id",
                type: "string",
                default: "undefined (auto-generated)",
                description: "Optional unique identifier for the route layer. Auto-generated if not provided."
              },
              {
                name: "coordinates",
                type: "[number, number][]",
                description: "Array of [longitude, latitude] coordinate pairs."
              },
              {
                name: "color",
                type: "string",
                default: '"#4285F4"',
                description: "Line color (CSS color value)."
              },
              {
                name: "width",
                type: "number",
                default: "3",
                description: "Line width in pixels."
              },
              {
                name: "opacity",
                type: "number",
                default: "0.8",
                description: "Line opacity (0 to 1)."
              },
              {
                name: "dashArray",
                type: "[number, number]",
                description: "Dash pattern [dash length, gap length] for dashed lines."
              },
              {
                name: "onClick",
                type: "() => void",
                description: "Callback when the route line is clicked."
              }
            ]
          });
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!----> `);
      DocsSection($$renderer2, {
        title: "MapClusterLayer",
        children: ($$renderer3) => {
          $$renderer3.push(`<p>Renders clustered point data using MapLibre GL's native clustering. Automatically groups
			nearby points into clusters that expand on click. Must be used inside `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Map`);
            }
          });
          $$renderer3.push(`<!----> . Supports a generic type parameter for typed feature properties: `);
          DocsCode($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->MapClusterLayer&lt;MyProperties>`);
            }
          });
          $$renderer3.push(`<!----> .</p> `);
          DocsPropTable($$renderer3, {
            props: [
              {
                name: "data",
                type: "string | GeoJSON.FeatureCollection",
                description: "GeoJSON FeatureCollection data or URL to fetch GeoJSON from."
              },
              {
                name: "clusterMaxZoom",
                type: "number",
                default: "14",
                description: "Maximum zoom level to cluster points on."
              },
              {
                name: "clusterRadius",
                type: "number",
                default: "50",
                description: "Radius of each cluster when clustering points (in pixels)."
              },
              {
                name: "clusterColors",
                type: "[string, string, string]",
                default: '["#51bbd6", "#f1f075", "#f28cb1"]',
                description: "Colors for cluster circles: [small, medium, large] based on point count."
              },
              {
                name: "clusterThresholds",
                type: "[number, number]",
                default: "[100, 750]",
                description: "Point count thresholds for color/size steps: [medium, large]."
              },
              {
                name: "pointColor",
                type: "string",
                default: '"#3b82f6"',
                description: "Color for unclustered individual points."
              },
              {
                name: "onPointClick",
                type: "(feature: GeoJSON.Feature, coordinates: [number, number]) => void",
                description: "Callback when an unclustered point is clicked."
              },
              {
                name: "onClusterClick",
                type: "(clusterId: number, coordinates: [number, number], pointCount: number) => void",
                description: "Callback when a cluster is clicked. If not provided, zooms into the cluster."
              }
            ]
          });
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!---->`);
    }
  });
}
export {
  _page as default
};
