<script lang="ts" generics="P extends GeoJSON.GeoJsonProperties">
	import { GeoJSONSource, CircleLayer, SymbolLayer, getMapContext } from "svelte-maplibre-gl";
	import type MapLibreGL from "maplibre-gl";

	interface Props {
		data: string | GeoJSON.FeatureCollection<GeoJSON.Point, P>;
		clusterMaxZoom?: number;
		clusterRadius?: number;
		clusterColors?: [string, string, string];
		clusterThresholds?: [number, number];
		pointColor?: string;
		onpointclick?: (
			feature: GeoJSON.Feature<GeoJSON.Point, P>,
			coordinates: [number, number]
		) => void;
		onclusterclick?: (clusterId: number, coordinates: [number, number], pointCount: number) => void;
	}

	let {
		data,
		clusterMaxZoom = 14,
		clusterRadius = 50,
		clusterColors = ["#22c55e", "#eab308", "#ef4444"],
		clusterThresholds = [100, 750],
		pointColor = "#3b82f6",
		onpointclick,
		onclusterclick,
	}: Props = $props();

	const id = crypto.randomUUID();
	const mapCtx = getMapContext();

	const clusterPaint = $derived({
		"circle-color": [
			"step",
			["get", "point_count"],
			clusterColors[0],
			clusterThresholds[0],
			clusterColors[1],
			clusterThresholds[1],
			clusterColors[2],
		],
		"circle-radius": [
			"step",
			["get", "point_count"],
			20,
			clusterThresholds[0],
			30,
			clusterThresholds[1],
			40,
		],
		"circle-stroke-width": 1,
		"circle-stroke-color": "#fff",
		"circle-opacity": 0.85,
	});

	const pointPaint = $derived({
		"circle-color": pointColor,
		"circle-radius": 5,
		"circle-stroke-width": 2,
		"circle-stroke-color": "#fff",
	});

	async function handleClusterClick(
		e: MapLibreGL.MapMouseEvent & { features?: MapLibreGL.MapGeoJSONFeature[] }
	) {
		const map = mapCtx.map;
		if (!map || !e.features?.length) return;

		const feature = e.features[0];
		const clusterId = feature.properties?.cluster_id as number;
		const pointCount = feature.properties?.point_count as number;
		const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [number, number];

		if (onclusterclick) {
			onclusterclick(clusterId, coordinates, pointCount);
		} else {
			const source = map.getSource(`cluster-source-${id}`) as MapLibreGL.GeoJSONSource;
			const zoom = await source.getClusterExpansionZoom(clusterId);
			map.easeTo({ center: coordinates, zoom });
		}
	}

	function handlePointClick(
		e: MapLibreGL.MapMouseEvent & { features?: MapLibreGL.MapGeoJSONFeature[] }
	) {
		if (!onpointclick || !e.features?.length) return;

		const feature = e.features[0];
		const coordinates = (feature.geometry as GeoJSON.Point).coordinates.slice() as [
			number,
			number,
		];

		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		onpointclick(feature as unknown as GeoJSON.Feature<GeoJSON.Point, P>, coordinates);
	}
</script>

<GeoJSONSource
	id={`cluster-source-${id}`}
	{data}
	cluster={true}
	{clusterMaxZoom}
	{clusterRadius}
>
	<!-- Cluster circles -->
	<CircleLayer
		id={`clusters-${id}`}
		filter={["has", "point_count"]}
		paint={clusterPaint}
		onclick={handleClusterClick}
		onmouseenter={(e) => {
			e.target.getCanvas().style.cursor = "pointer";
		}}
		onmouseleave={(e) => {
			e.target.getCanvas().style.cursor = "";
		}}
	/>

	<!-- Cluster count labels -->
	<SymbolLayer
		id={`cluster-count-${id}`}
		filter={["has", "point_count"]}
		layout={{
			"text-field": "{point_count_abbreviated}",
			"text-font": ["Open Sans"],
			"text-size": 12,
		}}
		paint={{
			"text-color": "#fff",
		}}
	/>

	<!-- Unclustered points -->
	<CircleLayer
		id={`unclustered-point-${id}`}
		filter={["!", ["has", "point_count"]]}
		paint={pointPaint}
		onclick={handlePointClick}
		onmouseenter={(e) => {
			if (onpointclick) {
				e.target.getCanvas().style.cursor = "pointer";
			}
		}}
		onmouseleave={(e) => {
			e.target.getCanvas().style.cursor = "";
		}}
	/>
</GeoJSONSource>
