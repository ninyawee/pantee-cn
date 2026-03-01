import { s as spread_props, j as attr_class, f as clsx, b as attr } from "./index2.js";
import { I as Icon, c as cn } from "./docs-navigation.js";
import { g as getMapContext } from "./Map.js";
import "maplibre-gl";
function Locate($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["line", { "x1": "2", "x2": "5", "y1": "12", "y2": "12" }],
      ["line", { "x1": "19", "x2": "22", "y1": "12", "y2": "12" }],
      ["line", { "x1": "12", "x2": "12", "y1": "2", "y2": "5" }],
      ["line", { "x1": "12", "x2": "12", "y1": "19", "y2": "22" }],
      ["circle", { "cx": "12", "cy": "12", "r": "7" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "locate" },
      /**
       * @component @name Locate
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMiIgeDI9IjUiIHkxPSIxMiIgeTI9IjEyIiAvPgogIDxsaW5lIHgxPSIxOSIgeDI9IjIyIiB5MT0iMTIiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSI1IiAvPgogIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMTkiIHkyPSIyMiIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/locate
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
function Maximize($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M8 3H5a2 2 0 0 0-2 2v3" }],
      ["path", { "d": "M21 8V5a2 2 0 0 0-2-2h-3" }],
      ["path", { "d": "M3 16v3a2 2 0 0 0 2 2h3" }],
      ["path", { "d": "M16 21h3a2 2 0 0 0 2-2v-3" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "maximize" },
      /**
       * @component @name Maximize
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzIiAvPgogIDxwYXRoIGQ9Ik0yMSA4VjVhMiAyIDAgMCAwLTItMmgtMyIgLz4KICA8cGF0aCBkPSJNMyAxNnYzYTIgMiAwIDAgMCAyIDJoMyIgLz4KICA8cGF0aCBkPSJNMTYgMjFoM2EyIDIgMCAwIDAgMi0ydi0zIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/maximize
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
function Minus($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "M5 12h14" }]];
    Icon($$renderer2, spread_props([
      { name: "minus" },
      /**
       * @component @name Minus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/minus
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
function Plus($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
    Icon($$renderer2, spread_props([
      { name: "plus" },
      /**
       * @component @name Plus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJNMTIgNXYxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/plus
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
function CustomControl($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      control: givenControl,
      class: className,
      group = true,
      children
    } = $$props;
    if (!givenControl && !children) throw new Error("You must provide either control or children.");
    const mapCtx = getMapContext();
    if (!mapCtx.map) throw new Error("Map instance is not initialized.");
    if (!givenControl) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attr_class(`maplibregl-ctrl ${className}`, void 0, { "maplibregl-ctrl-group": group })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function MapControls($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      position = "bottom-right",
      showZoom = true,
      showCompass = false,
      showLocate = false,
      showFullscreen = false,
      class: className,
      onlocate
    } = $$props;
    getMapContext();
    let waitingForLocation = false;
    CustomControl($$renderer2, {
      group: false,
      children: ($$renderer3) => {
        $$renderer3.push(`<div${attr_class(clsx(cn("flex flex-col gap-1.5", className)))}>`);
        if (showZoom) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="border-border bg-background [&amp;>button:not(:last-child)]:border-border flex flex-col overflow-hidden rounded-md border shadow-sm [&amp;>button:not(:last-child)]:border-b"><button aria-label="Zoom in" type="button" class="hover:bg-accent dark:hover:bg-accent/40 flex size-8 items-center justify-center transition-colors">`);
          Plus($$renderer3, { class: "size-4" });
          $$renderer3.push(`<!----></button> <button aria-label="Zoom out" type="button" class="hover:bg-accent dark:hover:bg-accent/40 flex size-8 items-center justify-center transition-colors">`);
          Minus($$renderer3, { class: "size-4" });
          $$renderer3.push(`<!----></button></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (showCompass) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="border-border bg-background flex flex-col overflow-hidden rounded-md border shadow-sm"><button aria-label="Reset bearing to north" type="button" class="hover:bg-accent flex size-8 items-center justify-center transition-colors"><svg viewBox="0 0 24 24" class="size-5 transition-transform duration-200" style="transform-style: preserve-3d;"><path d="M12 2L16 12H12V2Z" class="fill-red-500"></path><path d="M12 2L8 12H12V2Z" class="fill-red-300"></path><path d="M12 22L16 12H12V22Z" class="fill-muted-foreground/60"></path><path d="M12 22L8 12H12V22Z" class="fill-muted-foreground/30"></path></svg></button></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (showLocate) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="border-border bg-background flex flex-col overflow-hidden rounded-md border shadow-sm"><button aria-label="Find my location" type="button"${attr_class(clsx(cn("hover:bg-accent dark:hover:bg-accent/40 flex size-8 items-center justify-center transition-colors", waitingForLocation)))}${attr("disabled", waitingForLocation, true)}>`);
          {
            $$renderer3.push("<!--[!-->");
            Locate($$renderer3, { class: "size-4" });
          }
          $$renderer3.push(`<!--]--></button></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (showFullscreen) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="border-border bg-background flex flex-col overflow-hidden rounded-md border shadow-sm"><button aria-label="Toggle fullscreen" type="button" class="hover:bg-accent dark:hover:bg-accent/40 flex size-8 items-center justify-center transition-colors">`);
          Maximize($$renderer3, { class: "size-4" });
          $$renderer3.push(`<!----></button></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
  });
}
export {
  MapControls as M
};
