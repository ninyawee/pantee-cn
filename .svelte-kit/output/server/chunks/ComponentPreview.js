import { j as attr_class, f as clsx, d as derived } from "./index2.js";
import { c as cn } from "./docs-navigation.js";
import { C as CopyButton } from "./CopyButton.js";
function ComponentPreview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { code, highlightedCode, files, class: className, children } = $$props;
    let activeTab = "preview";
    const allFiles = derived(() => files ? files : [{ name: "index.svelte", code, highlightedCode }]);
    let selectedFileIndex = "0";
    let currentFile = derived(() => allFiles()[Number(selectedFileIndex)] || allFiles()[0]);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="w-full overflow-hidden rounded-lg border"><div class="bg-muted/30 flex h-12 items-center justify-between border-b px-2"><div class="flex items-center gap-2"><button${attr_class(clsx(cn(
        "rounded px-2 py-1 text-xs font-medium whitespace-nowrap transition-colors",
        "bg-muted text-foreground dark:bg-muted/80"
      )))}>Preview</button> <button${attr_class(clsx(cn("rounded px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors", "text-muted-foreground hover:bg-muted hover:text-foreground dark:hover:bg-muted/80")))}>Code</button></div> <div class="flex items-center gap-2">`);
      {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (allFiles().length === 1 || activeTab === "code") {
        $$renderer3.push("<!--[-->");
        CopyButton($$renderer3, { command: currentFile().code });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div></div> <div${attr_class(clsx(cn("h-100 overflow-hidden", className)))}>`);
      {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="h-full">`);
        children?.($$renderer3);
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]--></div></div>`);
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
  ComponentPreview as C
};
