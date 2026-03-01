import { s as spread_props, j as attr_class, f as clsx, k as ensure_array_like, b as attr, e as escape_html, g as setContext, d as derived } from "./index2.js";
import { I as Icon, c as cn, B as Button, f as findNeighbors } from "./docs-navigation.js";
import { o as onDestroy } from "./index-server.js";
import { C as Chevron_right } from "./chevron-right.js";
function Chevron_left($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
    Icon($$renderer2, spread_props([
      { name: "chevron-left" },
      /**
       * @component @name ChevronLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUgMTgtNi02IDYtNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chevron-left
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
function DocsToc($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { items, className } = $$props;
    let activeId = null;
    let observer = null;
    onDestroy(() => observer?.disconnect());
    if (items?.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attr_class(clsx(cn("flex flex-col gap-1", className)))}><p class="text-foreground mb-2 text-[13px] font-medium">On This Page</p> <div class="relative"><div class="bg-border absolute top-1 bottom-1 left-0 w-px"></div> <div class="flex flex-col gap-1"><!--[-->`);
      const each_array = ensure_array_like(items);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        const isActive = item.slug === activeId;
        $$renderer2.push(`<a${attr("href", `#${item.slug}`)}${attr_class(clsx(cn("relative py-1 pl-3 text-[13px] no-underline transition-colors", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground")))}>`);
        if (isActive) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="bg-foreground absolute top-1 bottom-1 left-0 w-px rounded-full"></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> ${escape_html(item.title)}</a>`);
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function DocsLayout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const DOCS_TOC_CONTEXT = "docs-toc";
    const { title, description, pathname, prev, next, toc, children } = $$props;
    const neighbors = derived(() => {
      if (pathname && (!prev || !next)) {
        const result = findNeighbors(pathname);
        return { previous: prev ?? result.previous, next: next ?? result.next };
      }
      return { previous: prev, next };
    });
    let registeredToc = [];
    let sectionRegistry = {};
    function registerSection(item) {
      if (sectionRegistry[item.slug]) return;
      sectionRegistry[item.slug] = item;
      registeredToc = Object.values(sectionRegistry);
    }
    function unregisterSection(slug) {
      if (!sectionRegistry[slug]) return;
      delete sectionRegistry[slug];
      registeredToc = Object.values(sectionRegistry);
    }
    setContext(DOCS_TOC_CONTEXT, { registerSection, unregisterSection });
    $$renderer2.push(`<div class="flex gap-8"><div class="mx-auto max-w-3xl min-w-0 flex-1 pt-10 pb-20"><div class="space-y-3"><h1 class="text-foreground text-3xl font-semibold tracking-tight">${escape_html(title)}</h1> <p class="text-muted-foreground leading-relaxed">${escape_html(description)}</p></div> <div class="mt-12 space-y-12">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div> `);
    if (neighbors().previous || neighbors().next) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mt-16 flex items-center justify-between gap-4">`);
      if (neighbors().previous) {
        $$renderer2.push("<!--[-->");
        Button($$renderer2, {
          variant: "ghost",
          size: "sm",
          class: "-ml-2 h-auto py-2",
          href: neighbors().previous.href,
          children: ($$renderer3) => {
            Chevron_left($$renderer3, {});
            $$renderer3.push(`<!----> ${escape_html(neighbors().previous.title)}`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div></div>`);
      }
      $$renderer2.push(`<!--]--> `);
      if (neighbors().next) {
        $$renderer2.push("<!--[-->");
        Button($$renderer2, {
          variant: "ghost",
          size: "sm",
          class: "-mr-2 h-auto py-2",
          href: neighbors().next.href,
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->${escape_html(neighbors().next.title)} `);
            Chevron_right($$renderer3, {});
            $$renderer3.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <aside class="hidden w-44 shrink-0 xl:block"><nav class="sticky top-24">`);
    DocsToc($$renderer2, { items: toc ?? registeredToc });
    $$renderer2.push(`<!----></nav></aside></div>`);
  });
}
function DocsSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { title, children } = $$props;
    const slug = derived(() => title ? title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : void 0);
    onDestroy(() => {
    });
    $$renderer2.push(`<section class="space-y-5">`);
    if (title) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h2${attr("id", slug())} class="scroll-mt-28 text-xl font-semibold tracking-tight">${escape_html(title)}</h2>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="text-foreground/80 [&amp;_strong]:text-foreground [&amp;_em]:text-muted-foreground space-y-4 text-base leading-7 [&amp;_li]:leading-7 [&amp;_ol]:list-decimal [&amp;_ol]:space-y-2 [&amp;_ol]:pl-5 [&amp;_p]:leading-7 [&amp;_strong]:font-medium [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-5">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div></section>`);
  });
}
export {
  DocsLayout as D,
  DocsSection as a
};
