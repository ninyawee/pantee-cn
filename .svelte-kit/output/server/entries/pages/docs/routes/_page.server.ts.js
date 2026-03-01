import { g as getExampleSource, h as highlightCode } from "../../../../chunks/examples.js";
const load = async () => {
  const routeSource = getExampleSource("RouteExample");
  const osrmRouteSource = getExampleSource("OsrmRouteExample");
  return {
    routeSource,
    routeHighlighted: await highlightCode(routeSource, "svelte"),
    osrmRouteSource,
    osrmRouteHighlighted: await highlightCode(osrmRouteSource, "svelte")
  };
};
export {
  load
};
