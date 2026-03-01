import { s as spread_props, d as derived } from "./index2.js";
import { R as RawLayer, G as GeoJSONSource } from "./RawLayer.js";
import "maplibre-gl";
function LineLayer($$renderer, $$props) {
  let { children, sourceLayer, $$slots, $$events, ...props } = $$props;
  RawLayer($$renderer, spread_props([
    { type: "line", "source-layer": sourceLayer },
    props,
    {
      children: ($$renderer2) => {
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function MapRoute($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      coordinates,
      color = "#4285F4",
      width = 3,
      opacity = 0.8,
      dashArray,
      onclick,
      onmouseenter,
      onmouseleave,
      interactive = true,
      id = crypto.randomUUID()
    } = $$props;
    const data = derived(() => ({
      type: "Feature",
      properties: {},
      geometry: { type: "LineString", coordinates }
    }));
    const paint = derived(() => ({
      "line-color": color,
      "line-width": width,
      "line-opacity": opacity,
      "line-color-transition": { duration: 300, delay: 0 },
      "line-width-transition": { duration: 300, delay: 0 },
      "line-opacity-transition": { duration: 300, delay: 0 },
      ...dashArray ? { "line-dasharray": dashArray } : {}
    }));
    if (coordinates.length >= 2) {
      $$renderer2.push("<!--[-->");
      GeoJSONSource($$renderer2, {
        id: `route-source-${id}`,
        data: data(),
        children: ($$renderer3) => {
          LineLayer($$renderer3, {
            id: `route-layer-${id}`,
            layout: { "line-join": "round", "line-cap": "round" },
            paint: paint(),
            onclick: interactive && onclick ? () => onclick?.() : void 0,
            onmouseenter: interactive ? (e) => {
              e.target.getCanvas().style.cursor = "pointer";
              onmouseenter?.();
            } : void 0,
            onmouseleave: interactive ? (e) => {
              e.target.getCanvas().style.cursor = "";
              onmouseleave?.();
            } : void 0
          });
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  MapRoute as M
};
