import { s as spread_props, k as ensure_array_like, e as escape_html, d as derived, m as head } from "../../../../chunks/index2.js";
import { D as DocsLayout, a as DocsSection } from "../../../../chunks/DocsSection.js";
import { D as DocsCode } from "../../../../chunks/DocsCode.js";
import { D as DocsLink } from "../../../../chunks/DocsLink.js";
import { C as ComponentPreview } from "../../../../chunks/ComponentPreview.js";
import { M as Map } from "../../../../chunks/Map.js";
import { M as MapMarker, a as MarkerContent, b as MarkerTooltip, c as MarkerLabel, C as Clock } from "../../../../chunks/MarkerLabel.js";
import "clsx";
import { M as MapRoute } from "../../../../chunks/MapRoute.js";
import { I as Icon, B as Button, R as Route } from "../../../../chunks/docs-navigation.js";
import { p as page } from "../../../../chunks/index3.js";
function Loader_circle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "M21 12a9 9 0 1 1-6.219-8.56" }]];
    Icon($$renderer2, spread_props([
      { name: "loader-circle" },
      /**
       * @component @name LoaderCircle
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTJhOSA5IDAgMSAxLTYuMjE5LTguNTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/loader-circle
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
function RouteExample($$renderer) {
  const route = [
    [-74.006, 40.7128],
    // NYC City Hall
    [-73.9857, 40.7484],
    // Empire State Building
    [-73.9772, 40.7527],
    // Grand Central
    [-73.9654, 40.7829]
    // Central Park
  ];
  const stops = [
    { name: "City Hall", lng: -74.006, lat: 40.7128 },
    { name: "Empire State Building", lng: -73.9857, lat: 40.7484 },
    { name: "Grand Central Terminal", lng: -73.9772, lat: 40.7527 },
    { name: "Central Park", lng: -73.9654, lat: 40.7829 }
  ];
  $$renderer.push(`<div class="h-100 w-full">`);
  Map($$renderer, {
    center: [-73.98, 40.75],
    zoom: 11.2,
    children: ($$renderer2) => {
      MapRoute($$renderer2, { coordinates: route, color: "#3b82f6", width: 4, opacity: 0.8 });
      $$renderer2.push(`<!----> <!--[-->`);
      const each_array = ensure_array_like(stops);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let stop = each_array[index];
        MapMarker($$renderer2, {
          longitude: stop.lng,
          latitude: stop.lat,
          children: ($$renderer3) => {
            MarkerContent($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<div class="flex size-4.5 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-xs font-bold text-white shadow-lg">${escape_html(index + 1)}</div>`);
              }
            });
            $$renderer3.push(`<!----> `);
            MarkerTooltip($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(stop.name)}`);
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
function OsrmRouteExample($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const start = { name: "Amsterdam", lng: 4.9041, lat: 52.3676 };
    const end = { name: "Rotterdam", lng: 4.4777, lat: 51.9244 };
    let routes = [];
    let selectedIndex = 0;
    let isLoading = true;
    function formatDuration(seconds) {
      const mins = Math.round(seconds / 60);
      if (mins < 60) return `${mins} min`;
      const hours = Math.floor(mins / 60);
      const remainingMins = mins % 60;
      return `${hours}h ${remainingMins}m`;
    }
    function formatDistance(meters) {
      if (meters < 1e3) return `${Math.round(meters)} m`;
      return `${(meters / 1e3).toFixed(1)} km`;
    }
    async function fetchRoutes() {
      try {
        const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson&alternatives=true`);
        const data = await response.json();
        if (data.routes?.length > 0) {
          const routeData = data.routes.map((route) => ({
            coordinates: route.geometry.coordinates,
            duration: route.duration,
            distance: route.distance
          }));
          routes = routeData;
        }
      } catch (error) {
        console.error("Failed to fetch routes:", error);
      } finally {
        isLoading = false;
      }
    }
    const routesWithIndex = derived(() => routes.map((route, index) => ({ route, index })));
    fetchRoutes();
    $$renderer2.push(`<div class="relative h-125 w-full">`);
    Map($$renderer2, {
      center: [4.69, 52.14],
      zoom: 8.5,
      children: ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(routesWithIndex());
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let { route, index } = each_array[$$index];
          const isSelected = index === selectedIndex;
          MapRoute($$renderer3, {
            id: `route-${index}`,
            coordinates: route.coordinates,
            color: isSelected ? "#6366f1" : "#94a3b8",
            width: isSelected ? 6 : 5,
            opacity: isSelected ? 1 : 0.6,
            onclick: () => selectedIndex = index
          });
        }
        $$renderer3.push(`<!--]--> `);
        MapMarker($$renderer3, {
          longitude: start.lng,
          latitude: start.lat,
          children: ($$renderer4) => {
            MarkerContent($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="size-5 rounded-full border-2 border-white bg-green-500 shadow-lg"></div> `);
                MarkerLabel($$renderer5, {
                  position: "top",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(start.name)}`);
                  }
                });
                $$renderer5.push(`<!---->`);
              }
            });
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        MapMarker($$renderer3, {
          longitude: end.lng,
          latitude: end.lat,
          children: ($$renderer4) => {
            MarkerContent($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="size-5 rounded-full border-2 border-white bg-red-500 shadow-lg"></div> `);
                MarkerLabel($$renderer5, {
                  position: "bottom",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(end.name)}`);
                  }
                });
                $$renderer5.push(`<!---->`);
              }
            });
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    if (routes.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute top-3 left-3 flex flex-col gap-2"><!--[-->`);
      const each_array_1 = ensure_array_like(routes);
      for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
        let route = each_array_1[index];
        const isActive = index === selectedIndex;
        const isFastest = index === 0;
        Button($$renderer2, {
          variant: isActive ? "default" : "secondary",
          size: "sm",
          onclick: () => selectedIndex = index,
          class: "justify-start gap-3",
          children: ($$renderer3) => {
            $$renderer3.push(`<div class="flex items-center gap-1.5">`);
            Clock($$renderer3, { class: "size-3.5" });
            $$renderer3.push(`<!----> <span class="font-medium">${escape_html(formatDuration(route.duration))}</span></div> <div class="flex items-center gap-1.5 text-xs opacity-80">`);
            Route($$renderer3, { class: "size-3" });
            $$renderer3.push(`<!----> ${escape_html(formatDistance(route.distance))}</div> `);
            if (isFastest) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span class="rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-medium text-green-700 dark:bg-green-900 dark:text-green-300">Fastest</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (isLoading) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-background/50 absolute inset-0 flex items-center justify-center">`);
      Loader_circle($$renderer2, { class: "text-muted-foreground size-6 animate-spin" });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const routeSource = derived(() => page.data.routeSource);
    const routeHighlighted = derived(() => page.data.routeHighlighted);
    const osrmRouteSource = derived(() => page.data.osrmRouteSource);
    const osrmRouteHighlighted = derived(() => page.data.osrmRouteHighlighted);
    head("ojfwmp", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Routes - pantee-cn</title>`);
      });
    });
    DocsLayout($$renderer2, {
      title: "Routes",
      description: "Draw lines and paths connecting coordinates on the map.",
      pathname: "/docs/routes",
      children: ($$renderer3) => {
        DocsSection($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Use `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MapRoute`);
              }
            });
            $$renderer4.push(`<!----> to draw lines connecting a series of coordinates. Perfect for showing directions, trails, or any
			path between points.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Basic Route",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Draw a route with numbered stop markers along the path.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        ComponentPreview($$renderer3, {
          code: routeSource(),
          highlightedCode: routeHighlighted(),
          children: ($$renderer4) => {
            RouteExample($$renderer4);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Route Planning",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Display multiple route options and let users select between them. This example fetches real
			driving directions from the `);
            DocsLink($$renderer4, {
              href: "https://project-osrm.org/",
              external: true,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->OSRM API`);
              }
            });
            $$renderer4.push(`<!---->. Click on a route or use the buttons to switch.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        ComponentPreview($$renderer3, {
          code: osrmRouteSource(),
          highlightedCode: osrmRouteHighlighted(),
          class: "h-125",
          children: ($$renderer4) => {
            OsrmRouteExample($$renderer4);
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
