import { s as spread_props, c as bind_props, g as setContext, d as derived, h as getContext, j as attr_class, f as clsx } from "./index2.js";
import { I as Icon, c as cn } from "./docs-navigation.js";
import { o as onDestroy } from "./index-server.js";
import "maplibre-gl";
import { g as getMapContext, c as prepareMarkerContext, d as getMarkerContext } from "./Map.js";
import { P as Popup } from "./Popup.js";
function Clock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M12 6v6l4 2" }],
      ["circle", { "cx": "12", "cy": "12", "r": "10" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "clock" },
      /**
       * @component @name Clock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNnY2bDQgMiIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clock
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
function Marker($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      lnglat = void 0,
      class: className = void 0,
      draggable,
      rotation,
      rotationAlignment,
      pitchAlignment,
      opacity,
      color,
      opacityWhenCovered,
      offset,
      subpixelPositioning,
      content,
      children,
      ondrag,
      ondragstart,
      ondragend,
      $$slots,
      $$events,
      ...restOptions
    } = $$props;
    const mapCtx = getMapContext();
    if (!mapCtx.map) throw new Error("Map instance is not initialized.");
    prepareMarkerContext();
    onDestroy(() => {
    });
    if (content) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div>`);
      content($$renderer2);
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { lnglat });
  });
}
function MapMarker($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      longitude = void 0,
      latitude = void 0,
      children,
      onclick,
      onmouseenter,
      onmouseleave,
      ondragstart,
      ondrag,
      ondragend,
      draggable = false,
      anchor = "center",
      offset,
      rotation,
      pitchAlignment,
      rotationAlignment
    } = $$props;
    let lnglat = derived(() => [longitude, latitude]);
    let markerElement = null;
    setContext("pantee-marker", { getElement: () => markerElement });
    {
      let content = function($$renderer3) {
        $$renderer3.push(`<div class="cursor-pointer"></div>`);
      };
      Marker($$renderer2, {
        lnglat: lnglat(),
        draggable,
        anchor,
        offset,
        rotation,
        pitchAlignment,
        rotationAlignment,
        ondrag: (e) => {
          const marker = e.target;
          const pos = marker.getLngLat();
          longitude = pos.lng;
          latitude = pos.lat;
          ondrag?.({ lng: pos.lng, lat: pos.lat });
        },
        ondragstart: (e) => {
          const marker = e.target;
          const pos = marker.getLngLat();
          ondragstart?.({ lng: pos.lng, lat: pos.lat });
        },
        ondragend: (e) => {
          const marker = e.target;
          const pos = marker.getLngLat();
          ondragend?.({ lng: pos.lng, lat: pos.lat });
        },
        content,
        children: ($$renderer3) => {
          children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { content: true, default: true }
      });
    }
    bind_props($$props, { longitude, latitude });
  });
}
function MarkerContent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, class: className } = $$props;
    getContext("pantee-marker");
    $$renderer2.push(`<div style="display: contents;"><div${attr_class(clsx(
      // Move content to marker element when ready
      cn("relative cursor-pointer", className)
    ))}>`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="relative h-4 w-4 rounded-full border-2 border-white bg-blue-500 shadow-lg"></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function MarkerTooltip($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, class: className, offset = 16, anchor } = $$props;
    let open = false;
    getMarkerContext();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Popup($$renderer3, {
        offset,
        anchor,
        closeButton: false,
        closeOnClick: true,
        maxWidth: "none",
        class: "maplibre-popup-transparent",
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div${attr_class(clsx(cn("animate-in fade-in-0 zoom-in-95 bg-foreground text-background rounded-md px-2 py-1 text-xs shadow-md", className)))}>`);
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
function MarkerLabel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, class: className, position = "top" } = $$props;
    const positionClasses = { top: "bottom-full mb-1", bottom: "top-full mt-1" };
    $$renderer2.push(`<div${attr_class(clsx(cn("absolute left-1/2 -translate-x-1/2 whitespace-nowrap", "text-foreground text-[10px] font-medium", positionClasses[position], className)))}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  Clock as C,
  MapMarker as M,
  MarkerContent as a,
  MarkerTooltip as b,
  MarkerLabel as c
};
