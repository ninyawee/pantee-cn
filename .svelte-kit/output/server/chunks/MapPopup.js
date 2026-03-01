import { j as attr_class, f as clsx, d as derived } from "./index2.js";
import { c as cn } from "./docs-navigation.js";
import { P as Popup } from "./Popup.js";
import { X } from "./x.js";
function MapPopup($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      longitude,
      latitude,
      children,
      class: className,
      closeButton = false,
      onclose,
      offset = 16,
      anchor,
      closeOnClick,
      closeOnMove,
      focusAfterOpen,
      maxWidth = "none"
    } = $$props;
    let lnglat = derived(() => [longitude, latitude]);
    let open = true;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Popup($$renderer3, {
        lnglat: lnglat(),
        offset,
        anchor,
        closeButton: false,
        closeOnClick,
        closeOnMove,
        focusAfterOpen,
        maxWidth,
        class: "maplibre-popup-transparent",
        onclose: () => onclose?.(),
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
export {
  MapPopup as M
};
