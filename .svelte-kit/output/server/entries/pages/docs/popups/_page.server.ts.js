import { g as getExampleSource, h as highlightCode } from "../../../../chunks/examples.js";
const load = async () => {
  const popupSource = getExampleSource("StandalonePopupExample");
  return {
    popupSource,
    popupHighlighted: await highlightCode(popupSource, "svelte")
  };
};
export {
  load
};
