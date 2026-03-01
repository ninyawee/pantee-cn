import { g as getExampleSource, h as highlightCode } from "../../../../chunks/examples.js";
const load = async () => {
  const controlsSource = getExampleSource("MapControlsExample");
  return {
    controlsSource,
    controlsHighlighted: await highlightCode(controlsSource, "svelte")
  };
};
export {
  load
};
