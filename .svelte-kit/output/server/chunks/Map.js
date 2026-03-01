import { h as getContext, g as setContext, j as attr_class, f as clsx, l as attr_style, c as bind_props, s as spread_props, d as derived } from "./index2.js";
import { s as snapshot } from "./theme.js";
import { c as cn } from "./docs-navigation.js";
import { o as onDestroy } from "./index-server.js";
import maplibregl from "maplibre-gl";
import "clsx";
const MAP_CONTEXT_KEY = /* @__PURE__ */ Symbol("MapLibre map context");
const SOURCE_CONTEXT_KEY = /* @__PURE__ */ Symbol("MapLibre source context");
const LAYER_CONTEXT_KEY = /* @__PURE__ */ Symbol("MapLibre layer context");
const MARKER_CONTEXT_KEY = /* @__PURE__ */ Symbol("MapLibre marker context");
class MapContext {
  /** Map instance */
  _map = null;
  /** Callbacks to be called when the map style is loaded */
  _listener = void 0;
  _pending = [];
  /** Names of layers dynamically added */
  userLayers = /* @__PURE__ */ new Set();
  /** Names of sources dynamically added */
  userSources = /* @__PURE__ */ new Set();
  /** Terrain specification of the current base style */
  baseTerrain;
  /** Sky specification set by user */
  userTerrain;
  /** Sky specification of the current base style */
  baseSky;
  /** Sky specification set by user */
  userSky;
  /** Light specification of the current base style */
  baseLight;
  /** Light specification set by user */
  userLight;
  /** Projection specification of the current base style */
  baseProjection;
  /** Projection specification set by user */
  userProjection;
  get map() {
    return this._map;
  }
  set map(value) {
    if (this._listener) {
      this._map?.off("styledata", this._listener);
      this._listener = void 0;
    }
    this._map = value;
    if (this._map) {
      this._listener = this._onstyledata.bind(this);
      this._map.on("styledata", this._listener);
    }
  }
  addLayer(addLayerObject, beforeId) {
    if (!this.map) throw new Error("Map is not initialized");
    this.userLayers.add(addLayerObject.id);
    this.waitForStyleLoaded((map) => {
      map.addLayer(addLayerObject, beforeId);
    });
  }
  removeLayer(id) {
    if (!this.map) throw new Error("Map is not initialized");
    this.userLayers.delete(id);
    this.waitForStyleLoaded((map) => {
      map.removeLayer(id);
    });
  }
  addSource(id, source) {
    this.userSources.add(id);
    this.waitForStyleLoaded((map) => {
      map.addSource(id, source);
    });
  }
  removeSource(id) {
    this.userSources.delete(id);
    this.waitForStyleLoaded((map) => {
      map.removeSource(id);
    });
  }
  /** Wait for the style to be loaded before calling the function */
  waitForStyleLoaded(func) {
    if (!this.map) {
      return;
    }
    if (this.map.style._loaded) {
      func(this.map);
    } else {
      this._pending.push(func);
    }
  }
  _onstyledata(ev) {
    const map = ev.target;
    if (map?.style._loaded) {
      for (const func of this._pending) {
        func(map);
      }
      this._pending = [];
    }
  }
  setStyle(style) {
    const { userSources: addedSources, userLayers: addedLayers } = this;
    if (!style) {
      this.map?.setStyle(null);
      return;
    }
    this.map?.setStyle(snapshot(style), {
      // Preserves user styles when the base style changes
      transformStyle: (previous, next) => {
        this.baseLight = next.light;
        this.baseProjection = next.projection;
        this.baseSky = next.sky;
        this.baseTerrain = next.terrain;
        if (!previous) {
          return next;
        }
        const sources = next.sources;
        for (const [key, value] of Object.entries(previous.sources)) {
          if (addedSources.has(key)) {
            sources[key] = value;
          }
        }
        const userLayers = previous.layers.filter((layer) => addedLayers.has(layer.id));
        const layers = [...next.layers, ...userLayers];
        return {
          ...next,
          light: this.userLight || this.baseLight,
          projection: this.userProjection || this.baseProjection,
          sky: this.userSky || this.baseSky,
          terrain: this.userTerrain || this.baseTerrain,
          sources,
          layers
        };
      }
    });
  }
}
function prepareMapContext() {
  const mapCtx = new MapContext();
  setContext(MAP_CONTEXT_KEY, mapCtx);
  return mapCtx;
}
function getMapContext() {
  const mapCtx = getContext(MAP_CONTEXT_KEY);
  if (!mapCtx) throw new Error("Map context not found");
  return mapCtx;
}
class SourceContext {
  /** sourceId */
  id = "";
}
function prepareSourceContext() {
  const sourceCtx = new SourceContext();
  setContext(SOURCE_CONTEXT_KEY, sourceCtx);
  return sourceCtx;
}
function getSourceContext() {
  const sourceCtx = getContext(SOURCE_CONTEXT_KEY);
  if (!sourceCtx || !sourceCtx.id) throw new Error("Source context not found");
  return sourceCtx;
}
class LayerContext {
  id = "";
}
function prepareLayerContext() {
  const layerCtx = new LayerContext();
  setContext(LAYER_CONTEXT_KEY, layerCtx);
  return layerCtx;
}
class MarkerContext {
  marker = null;
}
function prepareMarkerContext() {
  const markerCtx = new MarkerContext();
  setContext(MARKER_CONTEXT_KEY, markerCtx);
  return markerCtx;
}
function getMarkerContext() {
  const markerCtx = getContext(MARKER_CONTEXT_KEY);
  if (!markerCtx) {
    return null;
  }
  return markerCtx;
}
function MapLibre($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      map = void 0,
      class: className = "",
      inlineStyle = "",
      children,
      autoloadGlobalCss = true,
      // Events
      // https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapEventType/
      onerror,
      onload,
      onidle,
      onremove,
      onrender,
      onresize,
      onwebglcontextlost,
      onwebglcontextrestored,
      ondataloading,
      ondata,
      ontiledataloading,
      onsourcedataloading,
      onstyledataloading,
      onsourcedata,
      onstyledata,
      onstyleimagemissing,
      ondataabort,
      onsourcedataabort,
      onboxzoomcancel,
      onboxzoomstart,
      onboxzoomend,
      ontouchcancel,
      ontouchmove,
      ontouchend,
      ontouchstart,
      onclick,
      oncontextmenu,
      ondblclick,
      onmousemove,
      onmouseup,
      onmousedown,
      onmouseout,
      onmouseover,
      onmovestart,
      onmove,
      onmoveend,
      onzoomstart,
      onzoom,
      onzoomend,
      onrotatestart,
      onrotate,
      onrotateend,
      ondragstart,
      ondrag,
      ondragend,
      onpitchstart,
      onpitch,
      onpitchend,
      onwheel,
      onterrain,
      oncooperativegestureprevented,
      onprojectiontransition,
      // Others
      padding = { top: 0, bottom: 0, left: 0, right: 0 },
      fov,
      cursor,
      // Accessors
      showTileBoundaries,
      showPadding,
      showCollisionBoxes,
      showOverdrawInspector,
      repaint,
      vertices,
      // Map Options (reactive)
      bearing = void 0,
      bearingSnap,
      center = void 0,
      centerClampedToGround,
      elevation = void 0,
      interactive = void 0,
      maxBounds,
      maxPitch,
      maxZoom,
      minPitch,
      minZoom,
      pitch = void 0,
      pixelRatio,
      renderWorldCopies,
      roll = void 0,
      style = { version: 8, sources: {}, layers: [] },
      transformRequest,
      zoom = void 0,
      // Map Options (properties)
      boxZoom,
      cancelPendingTileRequestsWhileZooming,
      cooperativeGestures,
      doubleClickZoom,
      dragPan,
      dragRotate,
      keyboard,
      scrollZoom,
      touchPitch,
      touchZoomRotate,
      transformCameraUpdate,
      // Global state
      globalState = {},
      $$slots,
      $$events,
      // Map Options (others)
      ...restOptions
    } = $$props;
    if (autoloadGlobalCss && globalThis.window && !document.querySelector('link[href$="/maplibre-gl.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `https://unpkg.com/maplibre-gl@${maplibregl.getVersion()}/dist/maplibre-gl.css`;
      document.head.appendChild(link);
    }
    const mapCtx = prepareMapContext();
    onDestroy(() => {
      mapCtx.map = null;
      map?.remove();
      map = void 0;
    });
    $$renderer2.push(`<div${attr_class(clsx(className))}${attr_style(inlineStyle)}>`);
    if (map) {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2, map);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { map, bearing, center, elevation, pitch, roll, zoom });
  });
}
function Map($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const defaultStyles = {
      dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    };
    let {
      children,
      styles,
      theme: _theme,
      projection,
      center = [13.405, 52.52],
      zoom = 0,
      bearing = 0,
      pitch = 0,
      map = void 0,
      class: className,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    setContext("map", {
      getMap: () => map ?? null,
      isLoaded: () => !!map,
      isStyleReady: () => !!map
    });
    let tailwindTheme = "light";
    const resolvedTheme = derived(() => _theme ?? tailwindTheme);
    const mapStyles = derived(() => ({
      dark: styles?.dark ?? defaultStyles.dark,
      light: styles?.light ?? defaultStyles.light
    }));
    const currentStyle = derived(() => resolvedTheme() === "light" ? mapStyles().light : mapStyles().dark);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div${attr_class(clsx(cn("relative h-full w-full", className)))}>`);
      if (!map) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="absolute inset-0 z-10 flex items-center justify-center"><div class="flex gap-1"><span class="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full"></span> <span class="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full [animation-delay:150ms]"></span> <span class="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full [animation-delay:300ms]"></span></div></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      {
        let children2 = function($$renderer4, mapInstance) {
        };
        MapLibre($$renderer3, spread_props([
          {
            style: currentStyle(),
            renderWorldCopies: false,
            attributionControl: { compact: true },
            class: "h-full w-full"
          },
          rest,
          {
            get map() {
              return map;
            },
            set map($$value) {
              map = $$value;
              $$settled = false;
            },
            get center() {
              return center;
            },
            set center($$value) {
              center = $$value;
              $$settled = false;
            },
            get zoom() {
              return zoom;
            },
            set zoom($$value) {
              zoom = $$value;
              $$settled = false;
            },
            get bearing() {
              return bearing;
            },
            set bearing($$value) {
              bearing = $$value;
              $$settled = false;
            },
            get pitch() {
              return pitch;
            },
            set pitch($$value) {
              pitch = $$value;
              $$settled = false;
            },
            children: children2,
            $$slots: { default: true }
          }
        ]));
      }
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { center, zoom, bearing, pitch, map });
  });
}
export {
  Map as M,
  prepareLayerContext as a,
  getSourceContext as b,
  prepareMarkerContext as c,
  getMarkerContext as d,
  getMapContext as g,
  prepareSourceContext as p
};
