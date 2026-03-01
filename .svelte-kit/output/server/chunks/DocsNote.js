import "clsx";
function DocsNote($$renderer, $$props) {
  const { children } = $$props;
  $$renderer.push(`<div class="bg-muted/30 text-foreground/70 [&amp;_strong]:text-foreground rounded-lg border px-5 py-4 text-[14px] leading-relaxed [&amp;_strong]:font-medium">`);
  children?.($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  DocsNote as D
};
