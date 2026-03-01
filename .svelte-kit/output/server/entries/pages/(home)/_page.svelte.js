import { d as derived, p as props_id, a as attributes, c as bind_props, s as spread_props, j as attr_class, f as clsx, e as escape_html, k as ensure_array_like, l as attr_style, i as stringify, h as getContext, m as head } from "../../../chunks/index2.js";
import { c as cn, I as Icon, B as Button, R as Route } from "../../../chunks/docs-navigation.js";
import { a as attachRef, l as boolToStrTrueOrUndef, k as createBitsAttrs, b as boxWith } from "../../../chunks/presence-manager.svelte.js";
import { a as createId, m as mergeProps, L as Logo, C as CommandSearch, G as GitHubButton, i as ThemeToggle } from "../../../chunks/GitHubButton.js";
import "clsx";
import { M as Map } from "../../../chunks/Map.js";
import { M as MapMarker, a as MarkerContent, b as MarkerTooltip, C as Clock, c as MarkerLabel } from "../../../chunks/MarkerLabel.js";
import { M as MapRoute } from "../../../chunks/MapRoute.js";
import { Z as Zap } from "../../../chunks/zap.js";
import "maplibre-gl";
import { N as Navigation } from "../../../chunks/navigation.js";
import { C as CopyButton } from "../../../chunks/CopyButton.js";
const separatorAttrs = createBitsAttrs({ component: "separator", parts: ["root"] });
class SeparatorRootState {
  static create(opts) {
    return new SeparatorRootState(opts);
  }
  opts;
  attachment;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(opts.ref);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: this.opts.decorative.current ? "none" : "separator",
    "aria-orientation": this.opts.orientation.current,
    "aria-hidden": boolToStrTrueOrUndef(this.opts.decorative.current),
    "data-orientation": this.opts.orientation.current,
    [separatorAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Separator$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      child,
      children,
      decorative = false,
      orientation = "horizontal",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rootState = SeparatorRootState.create({
      ref: boxWith(() => ref, (v) => ref = v),
      id: boxWith(() => id),
      decorative: boxWith(() => decorative),
      orientation: boxWith(() => orientation)
    });
    const mergedProps = derived(() => mergeProps(restProps, rootState.props));
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps() });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Separator($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      "data-slot": dataSlot = "separator",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (Separator$1) {
        $$renderer3.push("<!--[-->");
        Separator$1($$renderer3, spread_props([
          {
            "data-slot": dataSlot,
            class: cn("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:min-h-full data-[orientation=vertical]:w-px", className)
          },
          restProps,
          {
            get ref() {
              return ref;
            },
            set ref($$value) {
              ref = $$value;
              $$settled = false;
            }
          }
        ]));
        $$renderer3.push("<!--]-->");
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push("<!--]-->");
      }
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Arrow_right($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M5 12h14" }],
      ["path", { "d": "m12 5 7 7-7 7" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "arrow-right" },
      /**
       * @component @name ArrowRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
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
function Bike($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["circle", { "cx": "18.5", "cy": "17.5", "r": "3.5" }],
      ["circle", { "cx": "5.5", "cy": "17.5", "r": "3.5" }],
      ["circle", { "cx": "15", "cy": "5", "r": "1" }],
      ["path", { "d": "M12 17.5V14l-3-3 4-3 2 3h2" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "bike" },
      /**
       * @component @name Bike
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxOC41IiBjeT0iMTcuNSIgcj0iMy41IiAvPgogIDxjaXJjbGUgY3g9IjUuNSIgY3k9IjE3LjUiIHI9IjMuNSIgLz4KICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjUiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEyIDE3LjVWMTRsLTMtMyA0LTMgMiAzaDIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/bike
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
function Flame($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "flame" },
      /**
       * @component @name Flame
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgM3ExIDQgNCA2LjV0MyA1LjVhMSAxIDAgMCAxLTE0IDAgNSA1IDAgMCAxIDEtMyAxIDEgMCAwIDAgNSAwYzAtMi0xLjUtMy0xLjUtNXEwLTIgMi41LTQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/flame
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
function Trending_up($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M16 7h6v6" }],
      ["path", { "d": "m22 7-8.5 8.5-5-5L2 17" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "trending-up" },
      /**
       * @component @name TrendingUp
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgN2g2djYiIC8+CiAgPHBhdGggZD0ibTIyIDctOC41IDguNS01LTVMMiAxNyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/trending-up
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
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { class: className } = $$props;
    $$renderer2.push(`<footer${attr_class(clsx(cn("w-full border-t py-5", className)))}><div class="text-muted-foreground container flex w-full flex-col items-center justify-between gap-2 text-sm sm:flex-row"><div class="flex items-center gap-2"><span class="text-foreground font-medium">pantee-cn</span> <span class="text-muted-foreground/80">•</span> <span>Ported to Svelte by `);
    Button($$renderer2, {
      variant: "link",
      size: "sm",
      class: "px-1",
      href: "https://github.com/MariusLang",
      target: "_blank",
      rel: "noopener noreferrer",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Marius Lang`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></span></div> <div class="flex items-center">`);
    Button($$renderer2, {
      variant: "ghost",
      size: "sm",
      href: "/docs",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Documentation`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      variant: "ghost",
      size: "sm",
      href: "https://github.com/ninyawee/pantee-cn",
      target: "_blank",
      rel: "noopener noreferrer",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->GitHub`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div></footer>`);
  });
}
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { class: className } = $$props;
    $$renderer2.push(`<header${attr_class(clsx(cn("container w-full p-4", className)))}><nav class="flex size-full items-center justify-between">`);
    Logo($$renderer2, {});
    $$renderer2.push(`<!----> <div class="flex h-4.5 items-center gap-2">`);
    CommandSearch($$renderer2, {});
    $$renderer2.push(`<!----> `);
    Separator($$renderer2, { orientation: "vertical", class: "hidden sm:block" });
    $$renderer2.push(`<!----> `);
    GitHubButton($$renderer2, {});
    $$renderer2.push(`<!----> `);
    Separator($$renderer2, { orientation: "vertical", class: "hidden sm:block" });
    $$renderer2.push(`<!----> `);
    ThemeToggle($$renderer2);
    $$renderer2.push(`<!----></div></nav></header>`);
  });
}
function ExampleCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { label, class: className, delay = "delay-500", children } = $$props;
    $$renderer2.push(`<div${attr_class(clsx(cn("bg-card border-border/50 animate-scale-in relative overflow-hidden rounded-xl border shadow-sm", delay, className)))}>`);
    if (label) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-muted-foreground bg-background/90 absolute top-2 left-2 z-10 rounded px-2 py-1 text-[10px] tracking-wider uppercase backdrop-blur-sm">${escape_html(label)}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function AnalyticsExample($$renderer) {
  const analyticsData = [
    {
      lng: -74.006,
      lat: 40.7128,
      city: "New York",
      users: 847,
      size: 14
    },
    {
      lng: -0.1276,
      lat: 51.5074,
      city: "London",
      users: 623,
      size: 12
    },
    {
      lng: 139.6917,
      lat: 35.6895,
      city: "Tokyo",
      users: 412,
      size: 10
    },
    {
      lng: -122.4194,
      lat: 37.7749,
      city: "San Francisco",
      users: 298,
      size: 9
    },
    {
      lng: 2.3522,
      lat: 48.8566,
      city: "Paris",
      users: 187,
      size: 8
    },
    {
      lng: 77.209,
      lat: 28.6139,
      city: "Delhi",
      users: 156,
      size: 7
    },
    {
      lng: 151.2093,
      lat: -33.8688,
      city: "Sydney",
      users: 134,
      size: 7
    },
    {
      lng: -43.1729,
      lat: -22.9068,
      city: "Rio",
      users: 89,
      size: 6
    },
    {
      lng: 4.9041,
      lat: 52.3676,
      city: "Amsterdam",
      users: 76,
      size: 5
    },
    {
      lng: 126.978,
      lat: 37.5665,
      city: "Seoul",
      users: 45,
      size: 5
    }
  ];
  ExampleCard($$renderer, {
    label: "",
    class: "aspect-square sm:col-span-2 sm:aspect-video lg:aspect-auto",
    delay: "delay-400",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="border-border/50 bg-background/95 absolute top-3 left-3 z-10 rounded-lg border p-3 shadow-lg backdrop-blur-md"><div class="text-muted-foreground mb-1 text-[10px] tracking-wider uppercase">Active Users</div> <div class="text-2xl leading-tight font-bold">2,847</div> <div class="mt-1 flex items-center gap-1">`);
      Trending_up($$renderer2, { class: "size-3 text-emerald-500" });
      $$renderer2.push(`<!----> <span class="text-xs text-emerald-500">+12.5%</span> <span class="text-muted-foreground text-xs">vs last hour</span></div></div> <div class="border-border/50 bg-background/95 absolute bottom-3 left-3 z-10 rounded-lg border px-3 py-2 shadow-lg backdrop-blur-md"><div class="flex items-center gap-4 text-[10px]"><div class="flex items-center gap-1.5"><div class="size-3 rounded-full bg-emerald-500"></div> <span class="text-muted-foreground">High</span></div> <div class="flex items-center gap-1.5"><div class="size-2 rounded-full bg-emerald-500"></div> <span class="text-muted-foreground">Medium</span></div> <div class="flex items-center gap-1.5"><div class="size-1.5 rounded-full bg-emerald-500"></div> <span class="text-muted-foreground">Low</span></div></div></div> `);
      Map($$renderer2, {
        center: [0, 30],
        children: ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(analyticsData);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let loc = each_array[$$index];
            MapMarker($$renderer3, {
              longitude: loc.lng,
              latitude: loc.lat,
              children: ($$renderer4) => {
                MarkerContent($$renderer4, {
                  children: ($$renderer5) => {
                    $$renderer5.push(`<div class="relative flex items-center justify-center"><div class="absolute rounded-full bg-emerald-500/20"${attr_style(`width: ${stringify(loc.size * 2.5)}px; height: ${stringify(loc.size * 2.5)}px;`)}></div> <div class="absolute animate-ping rounded-full bg-emerald-500/40"${attr_style(`width: ${stringify(loc.size * 1.5)}px; height: ${stringify(loc.size * 1.5)}px; animation-duration: 2s;`)}></div> <div class="relative rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"${attr_style(`width: ${stringify(loc.size)}px; height: ${stringify(loc.size)}px;`)}></div></div>`);
                  }
                });
                $$renderer4.push(`<!----> `);
                MarkerTooltip($$renderer4, {
                  children: ($$renderer5) => {
                    $$renderer5.push(`<div class="text-center"><div class="font-medium">${escape_html(loc.city)}</div> <div class="font-bold text-emerald-500">${escape_html(loc.users)}</div> <div class="text-muted-foreground text-[10px]">active users</div></div>`);
                  }
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
    }
  });
}
function TrailExample($$renderer) {
  const trailCoordinates = [
    [-73.95846730810143, 40.80035246904919],
    [-73.9717593682683, 40.78210942124929],
    [-73.98192123136191, 40.76793032580281],
    [-73.97393759456651, 40.76462909128966],
    [-73.97291537521572, 40.765159628993814],
    [-73.96920618484948, 40.7637106622374],
    [-73.96383691302509, 40.77117117897504],
    [-73.9584024523858, 40.76889223221369],
    [-73.9470773638119, 40.784238113060894],
    [-73.95585246901248, 40.78786547226602],
    [-73.94937945594087, 40.79668351998197],
    [-73.9498273526222, 40.797167598041455],
    [-73.95699644240298, 40.80016017872583]
  ];
  const start = trailCoordinates[0];
  const end = trailCoordinates[trailCoordinates.length - 1];
  ExampleCard($$renderer, {
    label: "",
    class: "aspect-square",
    delay: "delay-500",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="bg-background/95 border-border/50 absolute top-3 left-3 z-10 rounded-lg border p-3 shadow-lg backdrop-blur-md"><div class="mb-2 flex items-center gap-1.5">`);
      Bike($$renderer2, { class: "size-3.5 text-emerald-500" });
      $$renderer2.push(`<!----> <span class="text-xs font-medium">Central Park Loop</span></div> <div class="grid grid-cols-3 gap-3 text-center"><div><div class="text-muted-foreground mb-0.5 flex items-center justify-center gap-1">`);
      Route($$renderer2, { class: "size-3" });
      $$renderer2.push(`<!----></div> <div class="text-sm font-semibold">6.2</div> <div class="text-muted-foreground text-[9px] uppercase">Miles</div></div> <div><div class="text-muted-foreground mb-0.5 flex items-center justify-center gap-1">`);
      Clock($$renderer2, { class: "size-3" });
      $$renderer2.push(`<!----></div> <div class="text-sm font-semibold">32</div> <div class="text-muted-foreground text-[9px] uppercase">Mins</div></div> <div><div class="text-muted-foreground mb-0.5 flex items-center justify-center gap-1">`);
      Flame($$renderer2, { class: "size-3" });
      $$renderer2.push(`<!----></div> <div class="text-sm font-semibold">285</div> <div class="text-muted-foreground text-[9px] uppercase">Cal</div></div></div></div> `);
      Map($$renderer2, {
        center: [-73.97, 40.782],
        zoom: 11.8,
        children: ($$renderer3) => {
          MapRoute($$renderer3, {
            coordinates: trailCoordinates,
            color: "#10b981",
            width: 3,
            opacity: 0.9
          });
          $$renderer3.push(`<!----> `);
          MapMarker($$renderer3, {
            longitude: start[0],
            latitude: start[1],
            children: ($$renderer4) => {
              MarkerContent($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="size-3 rounded-full border-2 border-white bg-emerald-500 shadow-lg"></div>`);
                }
              });
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          MapMarker($$renderer3, {
            longitude: end[0],
            latitude: end[1],
            children: ($$renderer4) => {
              MarkerContent($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="size-3 rounded-full border-2 border-white bg-red-500 shadow-lg"></div>`);
                }
              });
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    }
  });
}
function EVChargingExample($$renderer) {
  ExampleCard($$renderer, {
    label: "EV Charging",
    class: "aspect-square",
    delay: "delay-700",
    children: ($$renderer2) => {
      Map($$renderer2, {
        center: [-122.425, 37.777],
        zoom: 11.5,
        children: ($$renderer3) => {
          MapMarker($$renderer3, {
            longitude: -122.4194,
            latitude: 37.7749,
            children: ($$renderer4) => {
              MarkerContent($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="rounded-full bg-emerald-500 p-1.5 shadow-lg shadow-emerald-500/30">`);
                  Zap($$renderer5, { class: "size-3 fill-white text-white" });
                  $$renderer5.push(`<!----></div>`);
                }
              });
              $$renderer4.push(`<!----> `);
              MarkerTooltip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="space-y-0.5 text-xs"><div class="font-medium">Market St Station</div> <div class="flex items-center gap-1"><span class="size-1.5 rounded-full bg-emerald-500"></span> <span class="text-emerald-500">Available</span></div> <div class="text-muted-foreground">150 kW - $0.35/kWh</div></div>`);
                }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          MapMarker($$renderer3, {
            longitude: -122.4094,
            latitude: 37.7849,
            children: ($$renderer4) => {
              MarkerContent($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="rounded-full bg-emerald-500 p-1.5 shadow-lg shadow-emerald-500/30">`);
                  Zap($$renderer5, { class: "size-3 fill-white text-white" });
                  $$renderer5.push(`<!----></div>`);
                }
              });
              $$renderer4.push(`<!----> `);
              MarkerTooltip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="space-y-0.5 text-xs"><div class="font-medium">Union Square</div> <div class="flex items-center gap-1"><span class="size-1.5 rounded-full bg-emerald-500"></span> <span class="text-emerald-500">2 Available</span></div> <div class="text-muted-foreground">50 kW - $0.28/kWh</div></div>`);
                }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          MapMarker($$renderer3, {
            longitude: -122.4294,
            latitude: 37.7689,
            children: ($$renderer4) => {
              MarkerContent($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="rounded-full bg-amber-500 p-1.5 shadow-lg shadow-amber-500/30">`);
                  Zap($$renderer5, { class: "size-3 fill-white text-white" });
                  $$renderer5.push(`<!----></div>`);
                }
              });
              $$renderer4.push(`<!----> `);
              MarkerTooltip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="space-y-0.5 text-xs"><div class="font-medium">Castro Station</div> <div class="flex items-center gap-1"><span class="size-1.5 rounded-full bg-amber-500"></span> <span class="text-amber-500">In Use</span></div> <div class="text-muted-foreground">~15 min remaining</div></div>`);
                }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          MapMarker($$renderer3, {
            longitude: -122.4394,
            latitude: 37.7809,
            children: ($$renderer4) => {
              MarkerContent($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="rounded-full bg-zinc-400 p-1.5 shadow-lg">`);
                  Zap($$renderer5, { class: "size-3 fill-white text-white" });
                  $$renderer5.push(`<!----></div>`);
                }
              });
              $$renderer4.push(`<!----> `);
              MarkerTooltip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="space-y-0.5 text-xs"><div class="font-medium">Hayes Valley</div> <div class="flex items-center gap-1"><span class="size-1.5 rounded-full bg-zinc-400"></span> <span class="text-muted-foreground">Offline</span></div></div>`);
                }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
    }
  });
}
function DeliveryExample($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const store = { lng: -0.14, lat: 51.5154 };
    const home = { lng: -0.07, lat: 51.51 };
    let route = [];
    ExampleCard($$renderer2, {
      label: "Delivery",
      class: "aspect-square sm:col-span-2 sm:aspect-video lg:aspect-auto",
      delay: "delay-900",
      children: ($$renderer3) => {
        Map($$renderer3, {
          center: [-0.105, 51.511],
          zoom: 12.4,
          children: ($$renderer4) => {
            if (route.length > 0) {
              $$renderer4.push("<!--[-->");
              MapRoute($$renderer4, { coordinates: route, width: 4, color: "#4285F4" });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> `);
            MapMarker($$renderer4, {
              longitude: store.lng,
              latitude: store.lat,
              children: ($$renderer5) => {
                MarkerContent($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<div class="size-3.5 rounded-full border-2 border-white bg-blue-500 shadow-lg"></div> `);
                    MarkerLabel($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->Store`);
                      }
                    });
                    $$renderer6.push(`<!---->`);
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> `);
            MapMarker($$renderer4, {
              longitude: home.lng,
              latitude: home.lat,
              children: ($$renderer5) => {
                MarkerContent($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<div class="size-3.5 rounded-full border-2 border-white bg-blue-500 shadow-lg"></div> `);
                    MarkerLabel($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->Home`);
                      }
                    });
                    $$renderer6.push(`<!---->`);
                  }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      }
    });
  });
}
function TrendingExample($$renderer) {
  ExampleCard($$renderer, {
    label: "Trending",
    class: "aspect-square",
    delay: "delay-800",
    children: ($$renderer2) => {
      Map($$renderer2, {
        center: [-73.99, 40.735],
        zoom: 10,
        children: ($$renderer3) => {
          MapMarker($$renderer3, {
            longitude: -73.9857,
            latitude: 40.7484,
            children: ($$renderer4) => {
              MarkerContent($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="relative flex items-center justify-center"><div class="absolute size-12 rounded-full bg-orange-500/30"></div> <div class="absolute size-7 rounded-full bg-orange-500/40"></div> <div class="rounded-full bg-linear-to-br from-orange-500 to-red-500 p-1.5 shadow-lg shadow-orange-500/50">`);
                  Flame($$renderer5, { class: "size-3.5 text-white" });
                  $$renderer5.push(`<!----></div></div>`);
                }
              });
              $$renderer4.push(`<!----> `);
              MarkerTooltip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="text-center"><div class="font-medium">Times Square</div> <div class="text-muted-foreground flex items-center justify-center gap-1">`);
                  Trending_up($$renderer5, { class: "size-3 text-green-500" });
                  $$renderer5.push(`<!----> <span class="text-xs text-green-500">2.4k visitors</span></div></div>`);
                }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          MapMarker($$renderer3, {
            longitude: -73.9654,
            latitude: 40.7829,
            children: ($$renderer4) => {
              MarkerContent($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="relative flex items-center justify-center"><div class="absolute size-10 rounded-full bg-rose-500/30"></div> <div class="rounded-full bg-linear-to-br from-rose-500 to-pink-500 p-1.5 shadow-lg shadow-rose-500/50">`);
                  Flame($$renderer5, { class: "size-3 text-white" });
                  $$renderer5.push(`<!----></div></div>`);
                }
              });
              $$renderer4.push(`<!----> `);
              MarkerTooltip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="text-center"><div class="font-medium">Central Park</div> <div class="text-muted-foreground flex items-center justify-center gap-1">`);
                  Trending_up($$renderer5, { class: "size-3 text-green-500" });
                  $$renderer5.push(`<!----> <span class="text-xs text-green-500">1.8k visitors</span></div></div>`);
                }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          MapMarker($$renderer3, {
            longitude: -74.0445,
            latitude: 40.6892,
            children: ($$renderer4) => {
              MarkerContent($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="relative flex items-center justify-center"><div class="absolute size-8 rounded-full bg-amber-500/30"></div> <div class="rounded-full bg-linear-to-br from-amber-500 to-yellow-500 p-1 shadow-lg shadow-amber-500/50">`);
                  Flame($$renderer5, { class: "size-2.5 text-white" });
                  $$renderer5.push(`<!----></div></div>`);
                }
              });
              $$renderer4.push(`<!----> `);
              MarkerTooltip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="text-center"><div class="font-medium">Statue of Liberty</div> <div class="text-muted-foreground flex items-center justify-center gap-1">`);
                  Trending_up($$renderer5, { class: "size-3 text-green-500" });
                  $$renderer5.push(`<!----> <span class="text-xs text-green-500">890 visitors</span></div></div>`);
                }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
    }
  });
}
function FlyToControls($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { destination } = $$props;
    const mapCtx = getContext("map");
    function handleFlyTo() {
      const map = mapCtx.getMap();
      if (!map || !mapCtx.isLoaded()) return;
      map.flyTo({ center: destination.center, zoom: 14, duration: 2500 });
    }
    $$renderer2.push(`<div class="absolute top-2 right-2 z-10">`);
    Button($$renderer2, {
      size: "icon-sm",
      variant: "secondary",
      onclick: handleFlyTo,
      children: ($$renderer3) => {
        Navigation($$renderer3, { class: "size-4" });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function FlyToExample($$renderer) {
  const destination = {
    name: "New York",
    description: "United States",
    center: [-74.006, 40.7128],
    startCenter: [10, 50]
  };
  ExampleCard($$renderer, {
    label: "Fly To",
    class: "aspect-square",
    delay: "delay-600",
    children: ($$renderer2) => {
      Map($$renderer2, {
        center: destination.startCenter,
        zoom: 0.5,
        projection: { type: "globe" },
        children: ($$renderer3) => {
          FlyToControls($$renderer3, { destination });
          $$renderer3.push(`<!----> `);
          MapMarker($$renderer3, {
            longitude: destination.center[0],
            latitude: destination.center[1],
            children: ($$renderer4) => {
              MarkerContent($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="relative flex items-center justify-center"><div class="absolute size-6 animate-ping rounded-full bg-cyan-500/20"></div> <div class="shadow-l size-4 rounded-full border-2 border-white bg-cyan-500"></div></div>`);
                }
              });
              $$renderer4.push(`<!----> `);
              MarkerTooltip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="text-center"><div class="font-medium">${escape_html(destination.name)}</div> <div class="text-muted-foreground text-[10px]">${escape_html(destination.description)}</div></div>`);
                }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
    }
  });
}
function ExamplesGrid($$renderer) {
  $$renderer.push(`<div class="animate-fade-in grid grid-cols-1 gap-5 delay-400 sm:grid-cols-2 lg:grid-cols-4">`);
  AnalyticsExample($$renderer);
  $$renderer.push(`<!----> `);
  TrailExample($$renderer);
  $$renderer.push(`<!----> `);
  FlyToExample($$renderer);
  $$renderer.push(`<!----> `);
  EVChargingExample($$renderer);
  $$renderer.push(`<!----> `);
  TrendingExample($$renderer);
  $$renderer.push(`<!----> `);
  DeliveryExample($$renderer);
  $$renderer.push(`<!----></div>`);
}
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const siteUrl = "https://pantee-cn.dev";
    const installCommand = `npx shadcn-svelte@latest add ${siteUrl}/r/map.json`;
    $$renderer2.push(`<div class="relative"><div class="absolute inset-0 -z-10 overflow-hidden"><div class="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 24px 24px;"></div> <div class="absolute -top-40 -right-40 size-96 rounded-full bg-emerald-500/10 blur-3xl"></div> <div class="bg-svelte/10 absolute -bottom-40 -left-40 size-96 rounded-full blur-3xl"></div> <div class="from-background to-background absolute inset-0 bg-linear-to-b via-transparent"></div></div> <div class="container flex flex-col items-center text-center"><h1 class="animate-fade-up text-4xl font-semibold tracking-tight delay-100 sm:text-5xl md:text-6xl"><span class="from-foreground to-foreground/60 bg-linear-to-b bg-clip-text text-transparent">Beautiful maps, made simple.</span></h1> <p class="text-foreground/80 animate-fade-up mt-6 max-w-lg text-lg leading-relaxed delay-200 md:text-xl">Ready to use, customizable map components for Svelte. <br class="hidden sm:block"/> Built on MapLibre. Styled with Tailwind.</p> <div class="animate-fade-up mt-8 w-full max-w-3xl delay-300"><div class="bg-card border-border overflow-hidden rounded-lg border shadow-sm"><div class="border-border/50 flex items-center gap-1.5 border-b px-3 py-2"><span class="size-2.5 rounded-full bg-red-500/40"></span> <span class="size-2.5 rounded-full bg-yellow-500/40"></span> <span class="size-2.5 rounded-full bg-green-500/40"></span></div> <div class="flex items-center gap-3 px-4 py-3 font-mono text-sm"><span class="shrink-0 text-emerald-500">$</span> <code class="text-foreground/80 flex-1 truncate text-left">${escape_html(installCommand)}</code> `);
    CopyButton($$renderer2, { command: installCommand });
    $$renderer2.push(`<!----></div></div></div> <div class="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3 delay-400">`);
    Button($$renderer2, {
      size: "lg",
      href: "/docs",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Get Started `);
        Arrow_right($$renderer3, { class: "size-4" });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      variant: "ghost",
      size: "lg",
      href: "/docs/basic-map",
      class: "text-muted-foreground",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->View Components`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div></div>`);
  });
}
function _page($$renderer) {
  head("1eb4uvf", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>pantee-cn - Beautiful maps made simple</title>`);
    });
  });
  $$renderer.push(`<div class="flex flex-col">`);
  Header($$renderer, {});
  $$renderer.push(`<!----> <main class="flex-1 pb-32"><section class="relative w-full py-20">`);
  Hero($$renderer);
  $$renderer.push(`<!----></section> <section class="container px-6">`);
  ExamplesGrid($$renderer);
  $$renderer.push(`<!----></section></main> `);
  Footer($$renderer, {});
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
