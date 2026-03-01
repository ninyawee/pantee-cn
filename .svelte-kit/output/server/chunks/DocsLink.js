import { b as attr } from "./index2.js";
function DocsLink($$renderer, $$props) {
  const { href, external = false, children } = $$props;
  $$renderer.push(`<a${attr("href", href)}${attr("target", external ? "_blank" : void 0)}${attr("rel", external ? "noopener noreferrer" : void 0)} class="text-foreground font-medium underline underline-offset-4 transition-colors">`);
  children?.($$renderer);
  $$renderer.push(`<!----></a>`);
}
export {
  DocsLink as D
};
