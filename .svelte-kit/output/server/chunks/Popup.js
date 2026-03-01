import { c as bind_props } from "./index2.js";
import { o as onDestroy } from "./index-server.js";
import "maplibre-gl";
import { g as getMapContext, d as getMarkerContext } from "./Map.js";
function Popup($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      // reactive
      lnglat,
      class: className = void 0,
      open = void 0,
      offset,
      maxWidth,
      subpixelPositioning,
      //
      closeButton,
      closeOnClick,
      closeOnMove,
      focusAfterOpen,
      // Events
      onopen,
      onclose,
      // Children
      children,
      $$slots,
      $$events,
      ...restOptions
    } = $$props;
    const mapCtx = getMapContext();
    if (!mapCtx.map) throw new Error("Map instance is not initialized.");
    const markerContext = getMarkerContext();
    onDestroy(() => {
      markerContext?.marker?.setPopup(null);
    });
    $$renderer2.push(`<div>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { open });
  });
}
export {
  Popup as P
};
