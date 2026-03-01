import { s as spread_props, d as derived, e as escape_html, m as head } from "../../../../chunks/index2.js";
import { D as DocsLayout, a as DocsSection } from "../../../../chunks/DocsSection.js";
import { D as DocsCode } from "../../../../chunks/DocsCode.js";
import { C as ComponentPreview } from "../../../../chunks/ComponentPreview.js";
import "clsx";
import { g as getMapContext, M as Map } from "../../../../chunks/Map.js";
import { M as MapControls } from "../../../../chunks/MapControls.js";
import { M as MapPopup } from "../../../../chunks/MapPopup.js";
import { R as RawLayer, G as GeoJSONSource } from "../../../../chunks/RawLayer.js";
import "maplibre-gl";
import { p as page } from "../../../../chunks/index3.js";
function CircleLayer($$renderer, $$props) {
  let { children, sourceLayer, $$slots, $$events, ...props } = $$props;
  RawLayer($$renderer, spread_props([
    { type: "circle", "source-layer": sourceLayer },
    props,
    {
      children: ($$renderer2) => {
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function SymbolLayer($$renderer, $$props) {
  let { children, sourceLayer, $$slots, $$events, ...props } = $$props;
  RawLayer($$renderer, spread_props([
    { type: "symbol", "source-layer": sourceLayer },
    props,
    {
      children: ($$renderer2) => {
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function MapClusterLayer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      data,
      clusterMaxZoom = 14,
      clusterRadius = 50,
      clusterColors = ["#22c55e", "#eab308", "#ef4444"],
      clusterThresholds = [100, 750],
      pointColor = "#3b82f6",
      onpointclick,
      onclusterclick
    } = $$props;
    const id = crypto.randomUUID();
    const mapCtx = getMapContext();
    const clusterPaint = derived(() => ({
      "circle-color": [
        "step",
        ["get", "point_count"],
        clusterColors[0],
        clusterThresholds[0],
        clusterColors[1],
        clusterThresholds[1],
        clusterColors[2]
      ],
      "circle-radius": [
        "step",
        ["get", "point_count"],
        20,
        clusterThresholds[0],
        30,
        clusterThresholds[1],
        40
      ],
      "circle-stroke-width": 1,
      "circle-stroke-color": "#fff",
      "circle-opacity": 0.85
    }));
    const pointPaint = derived(() => ({
      "circle-color": pointColor,
      "circle-radius": 5,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#fff"
    }));
    async function handleClusterClick(e) {
      const map = mapCtx.map;
      if (!map || !e.features?.length) return;
      const feature = e.features[0];
      const clusterId = feature.properties?.cluster_id;
      const pointCount = feature.properties?.point_count;
      const coordinates = feature.geometry.coordinates;
      if (onclusterclick) {
        onclusterclick(clusterId, coordinates, pointCount);
      } else {
        const source = map.getSource(`cluster-source-${id}`);
        const zoom = await source.getClusterExpansionZoom(clusterId);
        map.easeTo({ center: coordinates, zoom });
      }
    }
    function handlePointClick(e) {
      if (!onpointclick || !e.features?.length) return;
      const feature = e.features[0];
      const coordinates = feature.geometry.coordinates.slice();
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      onpointclick(feature, coordinates);
    }
    GeoJSONSource($$renderer2, {
      id: `cluster-source-${id}`,
      data,
      cluster: true,
      clusterMaxZoom,
      clusterRadius,
      children: ($$renderer3) => {
        CircleLayer($$renderer3, {
          id: `clusters-${id}`,
          filter: ["has", "point_count"],
          paint: clusterPaint(),
          onclick: handleClusterClick,
          onmouseenter: (e) => {
            e.target.getCanvas().style.cursor = "pointer";
          },
          onmouseleave: (e) => {
            e.target.getCanvas().style.cursor = "";
          }
        });
        $$renderer3.push(`<!----> `);
        SymbolLayer($$renderer3, {
          id: `cluster-count-${id}`,
          filter: ["has", "point_count"],
          layout: {
            "text-field": "{point_count_abbreviated}",
            "text-font": ["Open Sans"],
            "text-size": 12
          },
          paint: { "text-color": "#fff" }
        });
        $$renderer3.push(`<!----> `);
        CircleLayer($$renderer3, {
          id: `unclustered-point-${id}`,
          filter: ["!", ["has", "point_count"]],
          paint: pointPaint(),
          onclick: handlePointClick,
          onmouseenter: (e) => {
            if (onpointclick) {
              e.target.getCanvas().style.cursor = "pointer";
            }
          },
          onmouseleave: (e) => {
            e.target.getCanvas().style.cursor = "";
          }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
  });
}
function ClusterExample($$renderer) {
  let selectedPoint = null;
  $$renderer.push(`<div class="h-100 w-full">`);
  Map($$renderer, {
    center: [-103.59, 40.66],
    zoom: 3.4,
    children: ($$renderer2) => {
      MapClusterLayer($$renderer2, {
        data: "https://maplibre.org/maplibre-gl-js/docs/assets/earthquakes.geojson",
        clusterRadius: 50,
        clusterMaxZoom: 14,
        clusterColors: ["#1d8cf8", "#6d5dfc", "#e23670"],
        pointColor: "#3b82f6",
        onpointclick: (feature, coordinates) => {
          if (feature.properties) {
            selectedPoint = { coordinates, properties: feature.properties };
          }
        }
      });
      $$renderer2.push(`<!----> `);
      if (selectedPoint) {
        $$renderer2.push("<!--[-->");
        MapPopup($$renderer2, {
          longitude: selectedPoint.coordinates[0],
          latitude: selectedPoint.coordinates[1],
          onclose: () => selectedPoint = null,
          closeOnClick: false,
          focusAfterOpen: false,
          closeButton: true,
          children: ($$renderer3) => {
            $$renderer3.push(`<div class="space-y-1 p-1"><p class="text-sm">Magnitude: ${escape_html(selectedPoint.properties.mag)}</p> <p class="text-sm">Tsunami: ${escape_html(selectedPoint.properties.tsunami === 1 ? "Yes" : "No")}</p></div>`);
          }
        });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      MapControls($$renderer2, { position: "bottom-right", showZoom: true });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const clusterSource = derived(() => page.data.clusterSource);
    const clusterHighlighted = derived(() => page.data.clusterHighlighted);
    head("10uxhd8", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Clusters - pantee-cn</title>`);
      });
    });
    DocsLayout($$renderer2, {
      title: "Clusters",
      description: "Visualize large datasets with automatic point clustering.",
      pathname: "/docs/clusters",
      children: ($$renderer3) => {
        DocsSection($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<p>The `);
            DocsCode($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->MapClusterLayer`);
              }
            });
            $$renderer4.push(`<!----> component uses MapLibre's built-in clustering to efficiently render large numbers of points. Points
			are automatically grouped into clusters at low zoom levels, and expand as you zoom in.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        DocsSection($$renderer3, {
          title: "Basic Example",
          children: ($$renderer4) => {
            $$renderer4.push(`<p>Click on clusters to zoom in. Click individual points to see details in a popup.</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        ComponentPreview($$renderer3, {
          code: clusterSource(),
          highlightedCode: clusterHighlighted(),
          children: ($$renderer4) => {
            ClusterExample($$renderer4);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
export {
  _page as default
};
