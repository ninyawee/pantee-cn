import { af as ssr_context, ag as lifecycle_function_unavailable } from "./index2.js";
import "clsx";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function mount() {
  lifecycle_function_unavailable("mount");
}
function unmount() {
  lifecycle_function_unavailable("unmount");
}
async function tick() {
}
export {
  mount as m,
  onDestroy as o,
  tick as t,
  unmount as u
};
