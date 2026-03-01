import "clsx";
import { T as Tooltip_provider } from "../../chunks/tooltip-provider.js";
function _layout($$renderer, $$props) {
  let { children } = $$props;
  Tooltip_provider($$renderer, {
    children: ($$renderer2) => {
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
}
export {
  _layout as default
};
