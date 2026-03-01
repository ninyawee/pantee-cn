<script lang="ts">
	import { getContext } from "svelte";
	import MapLibreGL from "maplibre-gl";

	interface Props {
		pointsData: GeoJSON.FeatureCollection;
		onselect: (point: {
			id: number;
			name: string;
			category: string;
			coordinates: [number, number];
		} | null) => void;
	}

	let { pointsData, onselect }: Props = $props();

	const mapCtx = getContext<{
		getMap: () => MapLibreGL.Map | null;
		isLoaded: () => boolean;
	}>("map");

	const instanceId = Math.random().toString(36).substring(2, 9);
	const sourceId = `markers-source-${instanceId}`;
	const layerId = `markers-layer-${instanceId}`;

	$effect(() => {
		const map = mapCtx?.getMap();
		if (!map || !mapCtx?.isLoaded()) return;

		function setup() {
			if (map.getSource(sourceId)) return;

			map.addSource(sourceId, {
				type: "geojson",
				data: pointsData,
			});

			map.addLayer({
				id: layerId,
				type: "circle",
				source: sourceId,
				paint: {
					"circle-radius": 6,
					"circle-color": "#3b82f6",
					"circle-stroke-width": 2,
					"circle-stroke-color": "#ffffff",
				},
			});
		}

		if (map.isStyleLoaded()) {
			setup();
		} else {
			map.once("style.load", setup);
		}

		const handleClick = (
			e: MapLibreGL.MapMouseEvent & { features?: MapLibreGL.MapGeoJSONFeature[] }
		) => {
			if (!e.features?.length) return;

			const feature = e.features[0];
			const coords = (feature.geometry as GeoJSON.Point).coordinates as [number, number];

			onselect({
				id: feature.properties?.id,
				name: feature.properties?.name,
				category: feature.properties?.category,
				coordinates: coords,
			});
		};

		const handleMouseEnter = () => {
			map.getCanvas().style.cursor = "pointer";
		};

		const handleMouseLeave = () => {
			map.getCanvas().style.cursor = "";
		};

		map.on("click", layerId, handleClick);
		map.on("mouseenter", layerId, handleMouseEnter);
		map.on("mouseleave", layerId, handleMouseLeave);

		return () => {
			map.off("click", layerId, handleClick);
			map.off("mouseenter", layerId, handleMouseEnter);
			map.off("mouseleave", layerId, handleMouseLeave);

			try {
				if (map.getLayer(layerId)) map.removeLayer(layerId);
				if (map.getSource(sourceId)) map.removeSource(sourceId);
			} catch {
				// ignore cleanup errors
			}
		};
	});
</script>
