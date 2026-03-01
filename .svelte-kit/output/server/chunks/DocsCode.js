import { j as attr_class, f as clsx } from "./index2.js";
import { c as cn } from "./docs-navigation.js";
function DocsCode($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { className = "", children } = $$props;
    $$renderer2.push(`<code${attr_class(clsx(cn("bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm", className)))}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></code>`);
  });
}
export {
  DocsCode as D
};
