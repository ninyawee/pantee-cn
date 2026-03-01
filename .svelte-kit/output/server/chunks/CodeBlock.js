import { e as escape_html } from "./index2.js";
import "clsx";
import { C as CopyButton } from "./CopyButton.js";
function CodeBlock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { code, language = "svelte", showCopyButton = true } = $$props;
    $$renderer2.push(`<div class="w-full overflow-hidden rounded-lg border">`);
    if (showCopyButton) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-muted/30 flex h-10 items-center justify-end border-b px-2">`);
      CopyButton($$renderer2, { command: code });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="bg-muted/20 overflow-auto p-4 text-sm [&amp;_code]:bg-transparent! [&amp;_pre]:bg-transparent!">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<pre><code>${escape_html(code)}</code></pre>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
export {
  CodeBlock as C
};
