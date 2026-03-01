import { s as spread_props, d as derived, e as escape_html, h as getContext, m as head } from "../../../../chunks/index2.js";
import { D as DocsLayout, a as DocsSection } from "../../../../chunks/DocsSection.js";
import { D as DocsCode } from "../../../../chunks/DocsCode.js";
import { D as DocsLink } from "../../../../chunks/DocsLink.js";
import { D as DocsNote } from "../../../../chunks/DocsNote.js";
import { C as ComponentPreview } from "../../../../chunks/ComponentPreview.js";
import { C as CodeBlock } from "../../../../chunks/CodeBlock.js";
import "clsx";
import { g as getMapContext, M as Map } from "../../../../chunks/Map.js";
import { I as Icon, B as Button, L as Layers } from "../../../../chunks/docs-navigation.js";
import { M as MapControls } from "../../../../chunks/MapControls.js";
import "maplibre-gl";
import { X } from "../../../../chunks/x.js";
import { M as MapPopup } from "../../../../chunks/MapPopup.js";
import { p as page } from "../../../../chunks/index3.js";
function Mountain($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "m8 3 4 8 5-5 5 15H2L8 3z" }]];
    Icon($$renderer2, spread_props([
      { name: "mountain" },
      /**
       * @component @name Mountain
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOCAzIDQgOCA1LTUgNSAxNUgyTDggM3oiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/mountain
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
function Rotate_ccw($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }
      ],
      ["path", { "d": "M3 3v5h5" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "rotate-ccw" },
      /**
       * @component @name RotateCcw
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmE5IDkgMCAxIDAgOS05IDkuNzUgOS43NSAwIDAgMC02Ljc0IDIuNzRMMyA4IiAvPgogIDxwYXRoIGQ9Ik0zIDN2NWg1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/rotate-ccw
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
function useMap() {
  const context = getMapContext();
  const map = derived(() => context.map);
  const isLoaded = derived(() => !!context.map);
  return {
    get map() {
      return map();
    },
    get isLoaded() {
      return isLoaded();
    },
    get context() {
      return context;
    }
  };
}
function MapController($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let pitch = 0;
    let bearing = 0;
    const { map, isLoaded } = useMap();
    function handle3DView() {
      map?.easeTo({ pitch: 60, bearing: -20, duration: 1e3 });
    }
    function handleReset() {
      map?.easeTo({ pitch: 0, bearing: 0, duration: 1e3 });
    }
    if (isLoaded) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute top-3 left-3 z-10 flex flex-col gap-2"><div class="flex gap-2">`);
      Button($$renderer2, {
        size: "sm",
        variant: "secondary",
        onclick: handle3DView,
        children: ($$renderer3) => {
          Mountain($$renderer3, { class: "mr-1.5 size-4" });
          $$renderer3.push(`<!----> 3D View`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        size: "sm",
        variant: "secondary",
        onclick: handleReset,
        children: ($$renderer3) => {
          Rotate_ccw($$renderer3, { class: "mr-1.5 size-4" });
          $$renderer3.push(`<!----> Reset`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div> <div class="border-border bg-background/90 rounded-md border px-3 py-2 font-mono text-xs backdrop-blur"><div>Pitch: ${escape_html(pitch)}°</div> <div>Bearing: ${escape_html(bearing)}°</div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function AdvancedUsageExample($$renderer) {
  $$renderer.push(`<div class="relative h-[400px] w-full">`);
  Map($$renderer, {
    center: [-73.9857, 40.7484],
    zoom: 15,
    children: ($$renderer2) => {
      MapController($$renderer2);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
function CustomLayerContent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const mapCtx = getContext("map");
    let isLayerVisible = false;
    function toggleLayer() {
      const map = mapCtx?.getMap();
      if (!map) return;
      const visibility = isLayerVisible ? "none" : "visible";
      map.setLayoutProperty("parks-fill", "visibility", visibility);
      map.setLayoutProperty("parks-outline", "visibility", visibility);
      isLayerVisible = !isLayerVisible;
    }
    $$renderer2.push(`<div class="absolute top-3 left-3 z-10">`);
    Button($$renderer2, {
      size: "sm",
      variant: isLayerVisible ? "default" : "secondary",
      onclick: toggleLayer,
      children: ($$renderer3) => {
        if (isLayerVisible) {
          $$renderer3.push("<!--[-->");
          X($$renderer3, { class: "mr-1.5 size-4" });
          $$renderer3.push(`<!----> Hide Parks`);
        } else {
          $$renderer3.push("<!--[!-->");
          Layers($$renderer3, { class: "mr-1.5 size-4" });
          $$renderer3.push(`<!----> Show Parks`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function CustomLayerExample($$renderer) {
  $$renderer.push(`<div class="h-[400px] w-full">`);
  Map($$renderer, {
    center: [-73.97, 40.78],
    zoom: 11.8,
    children: ($$renderer2) => {
      MapControls($$renderer2, {});
      $$renderer2.push(`<!----> `);
      CustomLayerContent($$renderer2);
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
function LayerMarkersExample($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    function generateRandomPoints(count) {
      const center = { lng: -73.98, lat: 40.75 };
      const features = [];
      for (let i = 0; i < count; i++) {
        const lng = center.lng + (Math.random() - 0.5) * 0.15;
        const lat = center.lat + (Math.random() - 0.5) * 0.1;
        features.push({
          type: "Feature",
          properties: {
            id: i,
            name: `Location ${i + 1}`,
            category: ["Restaurant", "Cafe", "Bar", "Shop"][Math.floor(Math.random() * 4)]
          },
          geometry: { type: "Point", coordinates: [lng, lat] }
        });
      }
      return { type: "FeatureCollection", features };
    }
    const pointsData = generateRandomPoints(200);
    let selectedPoint = null;
    function setupMapLayers() {
      const mapCtx = getContext("map");
      const instanceId = Math.random().toString(36).substring(2, 9);
      const sourceId = `markers-source-${instanceId}`;
      const layerId = `markers-layer-${instanceId}`;
      const map = mapCtx?.getMap();
      if (!map || !mapCtx?.isLoaded()) return;
      if (map.getSource(sourceId)) return;
      map.addSource(sourceId, { type: "geojson", data: pointsData });
      map.addLayer({
        id: layerId,
        type: "circle",
        source: sourceId,
        paint: {
          "circle-radius": 6,
          "circle-color": "#3b82f6",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff"
        }
      });
      const handleClick = (e) => {
        if (!e.features?.length) return;
        const feature = e.features[0];
        const coords = feature.geometry.coordinates;
        selectedPoint = {
          id: feature.properties?.id,
          name: feature.properties?.name,
          category: feature.properties?.category,
          coordinates: coords
        };
      };
      const handleMouseEnter = () => {
        map.getCanvas().style.cursor = "pointer";
      };
      const handleMouseLeave = () => {
        map.getCanvas().style.cursor = "";
      };
      map.on("click", layerId, handleClick);
      map.on("mouseenter", layerId, handleMouseEnter);
      map.on("mouseleave", layerId, handleMouseLeave);
    }
    $$renderer2.push(`<div class="h-[400px] w-full">`);
    Map($$renderer2, {
      center: (
        // Cleanup on unmount
        [-73.98, 40.75]
      ),
      zoom: 11,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(setupMapLayers())} `);
        if (selectedPoint) {
          $$renderer3.push("<!--[-->");
          MapPopup($$renderer3, {
            longitude: selectedPoint.coordinates[0],
            latitude: selectedPoint.coordinates[1],
            onclose: () => selectedPoint = null,
            closeOnClick: false,
            focusAfterOpen: false,
            offset: 10,
            closeButton: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="min-w-[140px]"><p class="font-medium">${escape_html(selectedPoint.name)}</p> <p class="text-muted-foreground text-sm">${escape_html(selectedPoint.category)}</p></div>`);
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const advancedUsageFiles = derived(() => page.data.advancedUsageFiles);
    const customLayerFiles = derived(() => page.data.customLayerFiles);
    const layerMarkersSource = derived(() => page.data.layerMarkersSource);
    const layerMarkersHighlighted = derived(() => page.data.layerMarkersHighlighted);
    const useContextCode = `<script lang="ts">
	import { Map } from "$lib/components/ui/map";
	import MapLibreGL from "maplibre-gl";
	import { getContext } from "svelte";
	import { onMount } from "svelte";

	// For child components inside Map, use getContext
	function MapEventListener() {
		const mapCtx = getContext<{
			getMap: () => MapLibreGL.Map | null;
			isLoaded: () => boolean;
		}>("map");

		onMount(() => {
			const map = mapCtx.getMap();
			if (!map || !mapCtx.isLoaded()) return;

			const handleClick = (e: MapLibreGL.MapMouseEvent) => {
				console.log("Clicked at:", e.lngLat);
			};

			map.on("click", handleClick);
			return () => map.off("click", handleClick);
		});

		return null;
	}
<\/script>
	// Usage
	<Map center={[-74, 40.7]} zoom={10}>
		<MapEventListener />
	</Map>`;
    head("3mosw3", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Advanced - pantee-cn</title>`);
      });
    });
    DocsLayout($$renderer2, {
      title: "Advanced",
      description: "Access the underlying MapLibre GL instance for advanced customization.",
      pathname: "/docs/advanced-usage",
      children: ($$renderer3) => {
        DocsSection($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Access the underlying MapLibre GL map instance to use any feature from the MapLibre GL JS API.
			You can use `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->getContext`);
              }
            });
            $$renderer4.push(`<!----> in child components to access the map instance.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsNote($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<strong>Tip:</strong> Check the `);
            DocsLink($$renderer4, {
              href: "https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/",
              external: true,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MapLibre GL JS documentation`);
              }
            });
            $$renderer4.push(`<!----> for the full list of available methods and events.`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Using Context",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>For child components rendered inside `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Map`);
              }
            });
            $$renderer4.push(`<!---->, use `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->getContext("map")`);
              }
            });
            $$renderer4.push(`<!----> to access the map instance and listen to events.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Listening to Map Events",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Use `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->onMount`);
              }
            });
            $$renderer4.push(`<!----> with `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->getContext`);
              }
            });
            $$renderer4.push(`<!----> to set up event listeners
			in child components.</p> `);
            CodeBlock($$renderer4, { code: useContextCode, language: "svelte" });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Example: Custom Controls",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>This example shows how to create custom controls that manipulate the map's pitch and bearing,
			and listen to map events to display real-time values.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        ComponentPreview($$renderer3, {
          files: advancedUsageFiles(),
          children: ($$renderer4) => {
            AdvancedUsageExample($$renderer4);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Example: Custom GeoJSON Layer",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Add custom GeoJSON data as layers with fill and outline styles. This example shows NYC parks
			with hover interactions.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        ComponentPreview($$renderer3, {
          files: customLayerFiles(),
          children: ($$renderer4) => {
            CustomLayerExample($$renderer4);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Example: Markers via Layers",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>When displaying hundreds or thousands of markers, use GeoJSON layers instead of DOM-based `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MapMarker`);
              }
            });
            $$renderer4.push(`<!----> components. This approach renders markers on the WebGL canvas, providing
			significantly better performance.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        ComponentPreview($$renderer3, {
          code: layerMarkersSource(),
          highlightedCode: layerMarkersHighlighted(),
          children: ($$renderer4) => {
            LayerMarkersExample($$renderer4);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Extend to Build",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>You can extend this to build custom features like:</p> <ul><li><strong>Real-time tracking</strong> - Live location updates for delivery, rides, or fleet management</li> <li><strong>Geofencing</strong> - Trigger actions when users enter or leave specific areas</li> <li><strong>Heatmaps</strong> - Visualize density data like population, crime, or activity hotspots</li> <li><strong>Drawing tools</strong> - Let users draw polygons, lines, or place markers for custom areas</li> <li><strong>3D buildings</strong> - Extrude building footprints for urban visualization</li> <li><strong>Animations</strong> - Animate markers along routes or create fly-through experiences</li> <li><strong>Custom data layers</strong> - Overlay weather, traffic, or satellite imagery</li></ul>`);
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
