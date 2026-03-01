import { c as bind_props, s as spread_props } from "./index2.js";
import "maplibre-gl";
import { o as onDestroy } from "./index-server.js";
import { g as getMapContext, p as prepareSourceContext, a as prepareLayerContext, b as getSourceContext } from "./Map.js";
import { s as snapshot } from "./theme.js";
import "clsx";
let layerIdCounter = 0;
let sourceIdCounter = 0;
function generateLayerID() {
  return `svmlgl-layer-${layerIdCounter++}`;
}
function generateSourceID() {
  return `svmlgl-source-${sourceIdCounter++}`;
}
function RawSource($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      source = void 0,
      id: _id,
      children,
      $$slots,
      $$events,
      ...spec
    } = $$props;
    spec = spec;
    const mapCtx = getMapContext();
    if (!mapCtx.map) throw new Error("Map instance is not initialized.");
    const id = _id ?? generateSourceID();
    const sourceCtx = prepareSourceContext();
    sourceCtx.id = id;
    mapCtx.waitForStyleLoaded((map) => {
      mapCtx.addSource(id, snapshot(spec));
      source = map.getSource(id);
    });
    onDestroy(() => {
      mapCtx.removeSource(id);
      source = void 0;
    });
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { source });
  });
}
function GeoJSONSource($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { source = void 0, id, children, $$slots, $$events, ...spec } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      RawSource($$renderer3, spread_props([
        { id, type: "geojson" },
        spec,
        {
          get source() {
            return source;
          },
          set source($$value) {
            source = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            children?.($$renderer4);
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { source });
  });
}
function RawLayer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      id: _id,
      source: sourceId,
      beforeId,
      type,
      paint,
      layout,
      filter,
      "source-layer": sourceLayer,
      maxzoom,
      minzoom,
      metadata,
      children,
      // Events
      // https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapLayerEventType/
      onclick,
      ondblclick,
      onmousedown,
      onmouseup,
      onmousemove,
      onmouseenter,
      onmouseleave,
      onmouseover,
      onmouseout,
      oncontextmenu,
      ontouchstart,
      ontouchend,
      ontouchcancel
    } = $$props;
    const mapCtx = getMapContext();
    if (!mapCtx.map) throw new Error("Map instance is not initialized.");
    const id = _id ?? generateLayerID();
    const layerCtx = prepareLayerContext();
    layerCtx.id = id;
    const addLayerObj = {
      id,
      type,
      layout: snapshot(layout) ?? {},
      paint: snapshot(paint) ?? {}
    };
    if (addLayerObj.type !== "background") {
      addLayerObj.source = sourceId ?? getSourceContext().id;
    }
    if (maxzoom !== void 0) {
      addLayerObj.maxzoom = maxzoom;
    }
    if (minzoom !== void 0) {
      addLayerObj.minzoom = minzoom;
    }
    if (metadata !== void 0) {
      addLayerObj.metadata = metadata;
    }
    if (addLayerObj.type !== "background") {
      if (sourceLayer) {
        addLayerObj["source-layer"] = sourceLayer;
      }
      if (filter) {
        addLayerObj.filter = snapshot(filter);
      }
    }
    mapCtx.waitForStyleLoaded(() => {
      mapCtx.addLayer(addLayerObj, beforeId);
    });
    snapshot(paint) ?? {};
    snapshot(layout) ?? {};
    onDestroy(() => {
      mapCtx.removeLayer(id);
    });
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  GeoJSONSource as G,
  RawLayer as R
};
