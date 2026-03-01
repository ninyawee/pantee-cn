import { g as getExampleSource, h as highlightCode } from "../../../../chunks/examples.js";
const load = async () => {
  const clusterSource = getExampleSource("ClusterExample");
  return {
    clusterSource,
    clusterHighlighted: await highlightCode(clusterSource, "svelte")
  };
};
export {
  load
};
