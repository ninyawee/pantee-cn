import { g as getExampleSource, h as highlightCode } from "../../../../chunks/examples.js";
const load = async () => {
  const markersSource = getExampleSource("MarkersExample");
  const popupSource = getExampleSource("PopupExample");
  const draggableMarkerSource = getExampleSource("DraggableMarkerExample");
  return {
    markersSource,
    markersHighlighted: await highlightCode(markersSource, "svelte"),
    popupSource,
    popupHighlighted: await highlightCode(popupSource, "svelte"),
    draggableMarkerSource,
    draggableMarkerHighlighted: await highlightCode(draggableMarkerSource, "svelte")
  };
};
export {
  load
};
