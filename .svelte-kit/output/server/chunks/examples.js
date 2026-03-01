import { createHighlighter } from "shiki";
let highlighter = null;
async function highlightCode(code, lang = "svelte") {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-dark", "github-light"],
      langs: ["ts", "tsx", "js", "jsx", "json", "bash", "css", "html", "md", "svelte"]
    });
  }
  return highlighter.codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark"
    },
    defaultColor: false
  });
}
const __vite_glob_0_0 = '<script lang="ts">\n	import { Map } from "$lib/components/ui/map";\n	import MapController from "./MapController.svelte";\n<\/script>\n\n<div class="relative h-[400px] w-full">\n	<Map center={[-73.9857, 40.7484]} zoom={15}>\n		<MapController />\n	</Map>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n	import { Map } from "$lib/components/ui/map";\n<\/script>\n\n<div class="h-[400px] w-full">\n	<Map center={[-74.006, 40.7128]} zoom={12} />\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n	import { Map } from "$lib/components/ui/map";\n	import MapControls from "$lib/registry/blocks/map/MapControls.svelte";\n	import MapClusterLayer from "$lib/registry/blocks/map/MapClusterLayer.svelte";\n	import MapPopup from "$lib/registry/blocks/map/MapPopup.svelte";\n\n	interface EarthquakeProperties {\n		mag: number;\n		place: string;\n		tsunami: number;\n	}\n\n	let selectedPoint: {\n		coordinates: [number, number];\n		properties: EarthquakeProperties;\n	} | null = $state(null);\n<\/script>\n\n<div class="h-100 w-full">\n	<Map center={[-103.59, 40.66]} zoom={3.4}>\n		<MapClusterLayer\n			data="https://maplibre.org/maplibre-gl-js/docs/assets/earthquakes.geojson"\n			clusterRadius={50}\n			clusterMaxZoom={14}\n			clusterColors={["#1d8cf8", "#6d5dfc", "#e23670"]}\n			pointColor="#3b82f6"\n			onpointclick={(feature, coordinates) => {\n				if (feature.properties) {\n					selectedPoint = {\n						coordinates,\n						properties: feature.properties as EarthquakeProperties,\n					};\n				}\n			}}\n		/>\n\n		{#if selectedPoint}\n			<MapPopup\n				longitude={selectedPoint.coordinates[0]}\n				latitude={selectedPoint.coordinates[1]}\n				onclose={() => (selectedPoint = null)}\n				closeOnClick={false}\n				focusAfterOpen={false}\n				closeButton\n			>\n				<div class="space-y-1 p-1">\n					<p class="text-sm">Magnitude: {selectedPoint.properties.mag}</p>\n					<p class="text-sm">\n						Tsunami: {selectedPoint.properties.tsunami === 1 ? "Yes" : "No"}\n					</p>\n				</div>\n			</MapPopup>\n		{/if}\n\n		<MapControls position="bottom-right" showZoom />\n	</Map>\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n	import { Map } from "$lib/components/ui/map";\n	import ViewportTracker from "./ControlledMapViewportTracker.svelte";\n\n	interface MapViewport {\n		center: [number, number];\n		zoom: number;\n		bearing: number;\n		pitch: number;\n	}\n\n	let viewport = $state<MapViewport>({\n		center: [-74.006, 40.7128],\n		zoom: 8,\n		bearing: 0,\n		pitch: 0,\n	});\n<\/script>\n\n<div class="relative h-[400px] w-full">\n	<Map center={viewport.center} zoom={viewport.zoom}>\n		<ViewportTracker bind:viewport />\n		<div\n			role="status"\n			aria-live="polite"\n			class="bg-background/80 absolute top-2 left-2 z-10 flex flex-wrap gap-x-3 gap-y-1 rounded border px-2 py-1.5 font-mono text-xs backdrop-blur"\n		>\n			<span>\n				<span class="text-muted-foreground">lng:</span>\n				{viewport.center[0].toFixed(3)}\n			</span>\n			<span>\n				<span class="text-muted-foreground">lat:</span>\n				{viewport.center[1].toFixed(3)}\n			</span>\n			<span>\n				<span class="text-muted-foreground">zoom:</span>\n				{viewport.zoom.toFixed(1)}\n			</span>\n			<span>\n				<span class="text-muted-foreground">bearing:</span>\n				{viewport.bearing.toFixed(1)}°\n			</span>\n			<span>\n				<span class="text-muted-foreground">pitch:</span>\n				{viewport.pitch.toFixed(1)}°\n			</span>\n		</div>\n	</Map>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n	import { getContext, onMount, onDestroy } from "svelte";\n	import MapLibreGL from "maplibre-gl";\n\n	interface MapViewport {\n		center: [number, number];\n		zoom: number;\n		bearing: number;\n		pitch: number;\n	}\n\n	interface Props {\n		viewport: MapViewport;\n	}\n\n	// eslint-disable-next-line no-useless-assignment\n	let { viewport = $bindable() }: Props = $props();\n\n	const mapCtx = getContext<{\n		getMap: () => MapLibreGL.Map | null;\n		isLoaded: () => boolean;\n	}>("map");\n\n	let mapInstance: MapLibreGL.Map | null = null;\n\n	function updateViewport() {\n		if (!mapInstance) return;\n\n		const center = mapInstance.getCenter();\n		const newViewport = {\n			center: [center.lng, center.lat] as [number, number],\n			zoom: mapInstance.getZoom(),\n			bearing: mapInstance.getBearing(),\n			pitch: mapInstance.getPitch(),\n		};\n		viewport = newViewport;\n	}\n\n	onMount(() => {\n		mapInstance = mapCtx.getMap();\n\n		if (mapInstance) {\n			mapInstance.on("move", updateViewport);\n			updateViewport();\n		}\n	});\n\n	onDestroy(() => {\n		if (mapInstance) {\n			mapInstance.off("move", updateViewport);\n		}\n	});\n<\/script>\n';
const __vite_glob_0_5 = `<script lang="ts">
	import { getContext } from "svelte";
	import MapLibreGL from "maplibre-gl";
	import { Button } from "$lib/registry/ui/button";
	import Layers from "@lucide/svelte/icons/layers";
	import X from "@lucide/svelte/icons/x";

	interface Props {
		geojsonData: GeoJSON.FeatureCollection;
	}

	let { geojsonData }: Props = $props();

	const mapCtx = getContext<{
		getMap: () => MapLibreGL.Map | null;
		isLoaded: () => boolean;
	}>("map");

	let isLayerVisible = $state(false);
	let hoveredPark: string | null = $state(null);

	$effect(() => {
		const map = mapCtx?.getMap();
		if (!map || !mapCtx?.isLoaded()) return;

		// Add source if it doesn't exist
		if (!map.getSource("parks")) {
			map.addSource("parks", {
				type: "geojson",
				data: geojsonData,
			});
		}

		// Add fill layer if it doesn't exist
		if (!map.getLayer("parks-fill")) {
			map.addLayer({
				id: "parks-fill",
				type: "fill",
				source: "parks",
				paint: {
					"fill-color": "#22c55e",
					"fill-opacity": 0.4,
				},
				layout: {
					visibility: isLayerVisible ? "visible" : "none",
				},
			});
		}

		// Add outline layer if it doesn't exist
		if (!map.getLayer("parks-outline")) {
			map.addLayer({
				id: "parks-outline",
				type: "line",
				source: "parks",
				paint: {
					"line-color": "#16a34a",
					"line-width": 2,
				},
				layout: {
					visibility: isLayerVisible ? "visible" : "none",
				},
			});
		}

		const handleMouseEnter = () => {
			map.getCanvas().style.cursor = "pointer";
		};

		const handleMouseLeave = () => {
			map.getCanvas().style.cursor = "";
			hoveredPark = null;
		};

		const handleMouseMove = (e: MapLibreGL.MapMouseEvent) => {
			const features = map.queryRenderedFeatures(e.point, {
				layers: ["parks-fill"],
			});
			if (features.length > 0) {
				hoveredPark = features[0].properties?.name || null;
			}
		};

		map.on("mouseenter", "parks-fill", handleMouseEnter);
		map.on("mouseleave", "parks-fill", handleMouseLeave);
		map.on("mousemove", "parks-fill", handleMouseMove);

		return () => {
			map.off("mouseenter", "parks-fill", handleMouseEnter);
			map.off("mouseleave", "parks-fill", handleMouseLeave);
			map.off("mousemove", "parks-fill", handleMouseMove);
		};
	});

	function toggleLayer() {
		const map = mapCtx?.getMap();
		if (!map) return;

		const visibility = isLayerVisible ? "none" : "visible";
		map.setLayoutProperty("parks-fill", "visibility", visibility);
		map.setLayoutProperty("parks-outline", "visibility", visibility);
		isLayerVisible = !isLayerVisible;
	}
<\/script>

<div class="absolute top-3 left-3 z-10">
	<Button size="sm" variant={isLayerVisible ? "default" : "secondary"} onclick={toggleLayer}>
		{#if isLayerVisible}
			<X class="mr-1.5 size-4" />
			Hide Parks
		{:else}
			<Layers class="mr-1.5 size-4" />
			Show Parks
		{/if}
	</Button>
</div>

{#if hoveredPark}
	<div
		class="bg-background/90 absolute bottom-3 left-3 z-10 rounded-md border px-3 py-2 text-sm font-medium backdrop-blur dark:bg-gray-900/90"
	>
		{hoveredPark}
	</div>
{/if}
`;
const __vite_glob_0_6 = '<script lang="ts">\n	import { Map, MapControls } from "$lib/components/ui/map";\n	import CustomLayerContent from "./CustomLayerContent.svelte";\n\n	const geojsonData = {\n		type: "FeatureCollection" as const,\n		features: [\n			{\n				type: "Feature" as const,\n				properties: { name: "Central Park", type: "park" },\n				geometry: {\n					type: "Polygon" as const,\n					coordinates: [\n						[\n							[-73.9731, 40.7644],\n							[-73.9819, 40.7681],\n							[-73.958, 40.8006],\n							[-73.9493, 40.7969],\n							[-73.9731, 40.7644],\n						],\n					],\n				},\n			},\n			{\n				type: "Feature" as const,\n				properties: { name: "Bryant Park", type: "park" },\n				geometry: {\n					type: "Polygon" as const,\n					coordinates: [\n						[\n							[-73.9837, 40.7536],\n							[-73.9854, 40.7542],\n							[-73.984, 40.7559],\n							[-73.9823, 40.7553],\n							[-73.9837, 40.7536],\n						],\n					],\n				},\n			},\n		],\n	};\n<\/script>\n\n<div class="h-[400px] w-full">\n	<Map center={[-73.97, 40.78]} zoom={11.8}>\n		<MapControls />\n		<CustomLayerContent {geojsonData} />\n	</Map>\n</div>\n';
const __vite_glob_0_7 = '<script lang="ts">\n	import { Map } from "$lib/components/ui/map";\n	import PitchController from "./CustomStylePitchController.svelte";\n\n	const styles = {\n		default: undefined,\n		openstreetmap: "https://tiles.openfreemap.org/styles/bright",\n		openstreetmap3d: "https://tiles.openfreemap.org/styles/liberty",\n	};\n\n	type StyleKey = keyof typeof styles;\n\n	let style = $state<StyleKey>("default");\n	let selectedStyle = $derived(styles[style]);\n	let stylesConfig = $derived(\n		selectedStyle ? { light: selectedStyle, dark: selectedStyle } : undefined\n	);\n<\/script>\n\n<div class="relative h-[400px] w-full">\n	<Map center={[-0.1276, 51.5074]} zoom={15} styles={stylesConfig}>\n		<PitchController {style} />\n		<div class="absolute top-2 right-2 z-10">\n			<select\n				bind:value={style}\n				class="bg-background text-foreground rounded-md border px-2 py-1 text-sm shadow"\n			>\n				<option value="default">Default (Carto)</option>\n				<option value="openstreetmap">OpenStreetMap</option>\n				<option value="openstreetmap3d">OpenStreetMap 3D</option>\n			</select>\n		</div>\n	</Map>\n</div>\n';
const __vite_glob_0_8 = '<script lang="ts">\n	import { getContext, onMount } from "svelte";\n	import MapLibreGL from "maplibre-gl";\n\n	interface Props {\n		style: "default" | "openstreetmap" | "openstreetmap3d";\n	}\n\n	let { style }: Props = $props();\n\n	const mapCtx = getContext<{\n		getMap: () => MapLibreGL.Map | null;\n		isLoaded: () => boolean;\n	}>("map");\n\n	let mapInstance: MapLibreGL.Map | null = null;\n\n	onMount(() => {\n		mapInstance = mapCtx.getMap();\n	});\n\n	$effect(() => {\n		if (!mapInstance) return;\n\n		const is3D = style === "openstreetmap3d";\n		mapInstance.easeTo({ pitch: is3D ? 60 : 0, duration: 500 });\n	});\n<\/script>\n';
const __vite_glob_0_9 = '<script lang="ts">\n	import { Map, MapMarker, MarkerContent, MarkerPopup } from "$lib/components/ui/map";\n	import MapPin from "@lucide/svelte/icons/map-pin";\n\n	let markerPosition = $state({\n		lng: -73.98,\n		lat: 40.75,\n	});\n\n	function handleDragEnd(e: { lng: number; lat: number }) {\n		markerPosition = { lng: e.lng, lat: e.lat };\n	}\n<\/script>\n\n<div class="h-100 w-full">\n	<Map center={[-73.98, 40.75]} zoom={12}>\n		<MapMarker\n			longitude={markerPosition.lng}\n			latitude={markerPosition.lat}\n			draggable\n			ondragend={handleDragEnd}\n		>\n			<MarkerContent>\n				<div class="cursor-move">\n					<MapPin class="fill-black stroke-white dark:fill-white" size={28} />\n				</div>\n			</MarkerContent>\n\n			<MarkerPopup>\n				<div class="space-y-1">\n					<p class="text-foreground font-medium">Coordinates</p>\n					<p class="text-muted-foreground text-xs">\n						{markerPosition.lat.toFixed(4)},{markerPosition.lng.toFixed(4)}\n					</p>\n				</div>\n			</MarkerPopup>\n		</MapMarker>\n	</Map>\n</div>\n';
const __vite_glob_0_10 = '<script lang="ts">\n	import MapLibreGL from "maplibre-gl";\n	import { Map, MapPopup } from "$lib/components/ui/map";\n	import { getContext } from "svelte";\n\n	// Generate random points around NYC\n	function generateRandomPoints(count: number) {\n		const center = { lng: -73.98, lat: 40.75 };\n		const features = [];\n\n		for (let i = 0; i < count; i++) {\n			const lng = center.lng + (Math.random() - 0.5) * 0.15;\n			const lat = center.lat + (Math.random() - 0.5) * 0.1;\n			features.push({\n				type: "Feature" as const,\n				properties: {\n					id: i,\n					name: `Location ${i + 1}`,\n					category: ["Restaurant", "Cafe", "Bar", "Shop"][Math.floor(Math.random() * 4)],\n				},\n				geometry: {\n					type: "Point" as const,\n					coordinates: [lng, lat],\n				},\n			});\n		}\n\n		return {\n			type: "FeatureCollection" as const,\n			features,\n		};\n	}\n\n	// 200 markers - would be slow with DOM markers, but fast with layers\n	const pointsData = generateRandomPoints(200);\n\n	interface SelectedPoint {\n		id: number;\n		name: string;\n		category: string;\n		coordinates: [number, number];\n	}\n\n	let selectedPoint: SelectedPoint | null = $state(null);\n\n	// Store cleanup function\n	let layerCleanup: (() => void) | null = null;\n\n	// Setup map layers - called when Map renders its children\n	function setupMapLayers() {\n		const mapCtx = getContext<{\n			getMap: () => MapLibreGL.Map | null;\n			isLoaded: () => boolean;\n		}>("map");\n\n		const instanceId = Math.random().toString(36).substring(2, 9);\n		const sourceId = `markers-source-${instanceId}`;\n		const layerId = `markers-layer-${instanceId}`;\n\n		const map = mapCtx?.getMap();\n		if (!map || !mapCtx?.isLoaded()) return;\n\n		if (map.getSource(sourceId)) return;\n\n		map.addSource(sourceId, {\n			type: "geojson",\n			data: pointsData,\n		});\n\n		map.addLayer({\n			id: layerId,\n			type: "circle",\n			source: sourceId,\n			paint: {\n				"circle-radius": 6,\n				"circle-color": "#3b82f6",\n				"circle-stroke-width": 2,\n				"circle-stroke-color": "#ffffff",\n			},\n		});\n\n		const handleClick = (\n			e: MapLibreGL.MapMouseEvent & { features?: MapLibreGL.MapGeoJSONFeature[] }\n		) => {\n			if (!e.features?.length) return;\n\n			const feature = e.features[0];\n			const coords = (feature.geometry as GeoJSON.Point).coordinates as [number, number];\n\n			selectedPoint = {\n				id: feature.properties?.id,\n				name: feature.properties?.name,\n				category: feature.properties?.category,\n				coordinates: coords,\n			};\n		};\n\n		const handleMouseEnter = () => {\n			map.getCanvas().style.cursor = "pointer";\n		};\n\n		const handleMouseLeave = () => {\n			map.getCanvas().style.cursor = "";\n		};\n\n		map.on("click", layerId, handleClick);\n		map.on("mouseenter", layerId, handleMouseEnter);\n		map.on("mouseleave", layerId, handleMouseLeave);\n\n		// Store cleanup function\n		layerCleanup = () => {\n			map.off("click", layerId, handleClick);\n			map.off("mouseenter", layerId, handleMouseEnter);\n			map.off("mouseleave", layerId, handleMouseLeave);\n\n			try {\n				if (map.getLayer(layerId)) map.removeLayer(layerId);\n				if (map.getSource(sourceId)) map.removeSource(sourceId);\n			} catch {\n				// ignore cleanup errors\n			}\n		};\n	}\n\n	// Cleanup on unmount\n	$effect(() => {\n		return () => {\n			if (layerCleanup) {\n				layerCleanup();\n				layerCleanup = null;\n			}\n		};\n	});\n<\/script>\n\n<div class="h-[400px] w-full">\n	<Map center={[-73.98, 40.75]} zoom={11}>\n		<!-- Call setup function - this code runs in Map\'s context where map context is available -->\n		{setupMapLayers()}\n\n		{#if selectedPoint}\n			<MapPopup\n				longitude={selectedPoint.coordinates[0]}\n				latitude={selectedPoint.coordinates[1]}\n				onclose={() => (selectedPoint = null)}\n				closeOnClick={false}\n				focusAfterOpen={false}\n				offset={10}\n				closeButton\n			>\n				<div class="min-w-[140px]">\n					<p class="font-medium">{selectedPoint.name}</p>\n					<p class="text-muted-foreground text-sm">{selectedPoint.category}</p>\n				</div>\n			</MapPopup>\n		{/if}\n	</Map>\n</div>\n';
const __vite_glob_0_11 = '<script lang="ts">\n	import { useMap } from "$lib/hooks/use-map.svelte";\n	import { Button } from "$lib/registry/ui/button/index";\n	import { RotateCcw, Mountain } from "@lucide/svelte";\n\n	let pitch = $state(0);\n	let bearing = $state(0);\n\n	const { map, isLoaded } = useMap();\n\n	// Track pitch and bearing from the map instance\n	$effect(() => {\n		const mapInstance = map;\n		if (!mapInstance || !isLoaded) return;\n\n		// Initial values\n		pitch = Math.round(mapInstance.getPitch());\n		bearing = Math.round(mapInstance.getBearing());\n\n		// Listen for map movements\n		const onMove = () => {\n			pitch = Math.round(mapInstance.getPitch());\n			bearing = Math.round(mapInstance.getBearing());\n		};\n\n		mapInstance.on("move", onMove);\n\n		return () => {\n			mapInstance.off("move", onMove);\n		};\n	});\n\n	function handle3DView() {\n		map?.easeTo({\n			pitch: 60,\n			bearing: -20,\n			duration: 1000,\n		});\n	}\n\n	function handleReset() {\n		map?.easeTo({\n			pitch: 0,\n			bearing: 0,\n			duration: 1000,\n		});\n	}\n<\/script>\n\n{#if isLoaded}\n	<div class="absolute top-3 left-3 z-10 flex flex-col gap-2">\n		<div class="flex gap-2">\n			<Button size="sm" variant="secondary" onclick={handle3DView}>\n				<Mountain class="mr-1.5 size-4" />\n				3D View\n			</Button>\n			<Button size="sm" variant="secondary" onclick={handleReset}>\n				<RotateCcw class="mr-1.5 size-4" />\n				Reset\n			</Button>\n		</div>\n		<div\n			class="border-border bg-background/90 rounded-md border px-3 py-2 font-mono text-xs backdrop-blur"\n		>\n			<div>Pitch: {pitch}°</div>\n			<div>Bearing: {bearing}°</div>\n		</div>\n	</div>\n{/if}\n';
const __vite_glob_0_12 = '<script lang="ts">\n	import { Map, MapControls } from "$lib/components/ui/map";\n<\/script>\n\n<div class="h-100 w-full">\n	<Map center={[2.3522, 48.8566]} zoom={11}>\n		<MapControls position="bottom-right" showZoom showCompass showLocate showFullscreen />\n	</Map>\n</div>\n';
const __vite_glob_0_13 = '<script lang="ts">\n	import {\n		Map,\n		MapMarker,\n		MarkerContent,\n		MarkerPopup,\n		MarkerTooltip,\n	} from "$lib/components/ui/map";\n\n	const locations = [\n		{\n			id: 1,\n			name: "Empire State Building",\n			lng: -73.9857,\n			lat: 40.7484,\n		},\n		{\n			id: 2,\n			name: "Central Park",\n			lng: -73.9654,\n			lat: 40.7829,\n		},\n		{\n			id: 3,\n			name: "Times Square",\n			lng: -73.9855,\n			lat: 40.758,\n		},\n	];\n<\/script>\n\n<div class="h-[400px] w-full">\n	<Map center={[-73.98, 40.76]} zoom={12}>\n		{#each locations as location (location.id)}\n			<MapMarker longitude={location.lng} latitude={location.lat}>\n				<MarkerContent>\n					<div class="bg-primary size-4 rounded-full border-2 border-white shadow-lg"></div>\n				</MarkerContent>\n\n				<MarkerTooltip>\n					{location.name}\n				</MarkerTooltip>\n\n				<MarkerPopup>\n					<div class="space-y-1">\n						<p class="text-foreground font-medium">\n							{location.name}\n						</p>\n						<p class="text-muted-foreground text-xs">\n							{location.lat.toFixed(4)}, {location.lng.toFixed(4)}\n						</p>\n					</div>\n				</MarkerPopup>\n			</MapMarker>\n		{/each}\n	</Map>\n</div>\n';
const __vite_glob_0_14 = '<script lang="ts">\n	import { getContext } from "svelte";\n	import MapLibreGL from "maplibre-gl";\n	import { MapPopup } from "$lib/components/ui/map";\n\n	// Generate random points around NYC\n	function generateRandomPoints(count: number) {\n		const center = { lng: -73.98, lat: 40.75 };\n		const features = [];\n\n		for (let i = 0; i < count; i++) {\n			const lng = center.lng + (Math.random() - 0.5) * 0.15;\n			const lat = center.lat + (Math.random() - 0.5) * 0.1;\n			features.push({\n				type: "Feature" as const,\n				properties: {\n					id: i,\n					name: `Location ${i + 1}`,\n					category: ["Restaurant", "Cafe", "Bar", "Shop"][Math.floor(Math.random() * 4)],\n				},\n				geometry: {\n					type: "Point" as const,\n					coordinates: [lng, lat],\n				},\n			});\n		}\n\n		return {\n			type: "FeatureCollection" as const,\n			features,\n		};\n	}\n\n	// 200 markers - would be slow with DOM markers, but fast with layers\n	const pointsData = generateRandomPoints(200);\n\n	interface SelectedPoint {\n		id: number;\n		name: string;\n		category: string;\n		coordinates: [number, number];\n	}\n\n	// Generate unique ID for this component instance\n	let instanceId = $derived.by(() => {\n		return Math.random().toString(36).substring(2, 9);\n	});\n	let sourceId = $derived(`markers-source-${instanceId}`);\n	let layerId = $derived(`markers-layer-${instanceId}`);\n\n	let selectedPoint: SelectedPoint | null = $state(null);\n\n	const mapCtx = getContext<{\n		getMap: () => MapLibreGL.Map | null;\n		isLoaded: () => boolean;\n	}>("map");\n\n	$effect(() => {\n		const map = mapCtx?.getMap();\n		if (!map || !mapCtx?.isLoaded()) return;\n\n		map.addSource(sourceId, {\n			type: "geojson",\n			data: pointsData,\n		});\n\n		map.addLayer({\n			id: layerId,\n			type: "circle",\n			source: sourceId,\n			paint: {\n				"circle-radius": 6,\n				"circle-color": "#3b82f6",\n				"circle-stroke-width": 2,\n				"circle-stroke-color": "#ffffff",\n				// add more paint properties here to customize the appearance of the markers\n			},\n		});\n\n		const handleClick = (\n			e: MapLibreGL.MapMouseEvent & { features?: MapLibreGL.MapGeoJSONFeature[] }\n		) => {\n			if (!e.features?.length) return;\n\n			const feature = e.features[0];\n			const coords = (feature.geometry as GeoJSON.Point).coordinates as [number, number];\n\n			selectedPoint = {\n				id: feature.properties?.id,\n				name: feature.properties?.name,\n				category: feature.properties?.category,\n				coordinates: coords,\n			};\n		};\n\n		const handleMouseEnter = () => {\n			map.getCanvas().style.cursor = "pointer";\n		};\n\n		const handleMouseLeave = () => {\n			map.getCanvas().style.cursor = "";\n		};\n\n		map.on("click", layerId, handleClick);\n		map.on("mouseenter", layerId, handleMouseEnter);\n		map.on("mouseleave", layerId, handleMouseLeave);\n\n		return () => {\n			map.off("click", layerId, handleClick);\n			map.off("mouseenter", layerId, handleMouseEnter);\n			map.off("mouseleave", layerId, handleMouseLeave);\n\n			try {\n				if (map.getLayer(layerId)) map.removeLayer(layerId);\n				if (map.getSource(sourceId)) map.removeSource(sourceId);\n			} catch {\n				// ignore cleanup errors\n			}\n		};\n	});\n<\/script>\n\n{#if selectedPoint}\n	<MapPopup\n		longitude={selectedPoint.coordinates[0]}\n		latitude={selectedPoint.coordinates[1]}\n		onclose={() => (selectedPoint = null)}\n		closeOnClick={false}\n		focusAfterOpen={false}\n		offset={10}\n		closeButton\n	>\n		<div class="min-w-[140px]">\n			<p class="font-medium">{selectedPoint.name}</p>\n			<p class="text-muted-foreground text-sm">{selectedPoint.category}</p>\n		</div>\n	</MapPopup>\n{/if}\n';
const __vite_glob_0_15 = '<script lang="ts">\n	import { Map, MapMarker, MarkerContent, MapRoute, MarkerLabel } from "$lib/components/ui/map";\n	import { Loader2, Clock, Route } from "@lucide/svelte";\n	import { Button } from "$lib/registry/ui/button/index";\n\n	const start = { name: "Amsterdam", lng: 4.9041, lat: 52.3676 };\n	const end = { name: "Rotterdam", lng: 4.4777, lat: 51.9244 };\n\n	interface RouteData {\n		coordinates: [number, number][];\n		duration: number; // seconds\n		distance: number; // meters\n	}\n\n	let routes = $state<RouteData[]>([]);\n	let selectedIndex = $state(0);\n	let isLoading = $state(true);\n\n	function formatDuration(seconds: number): string {\n		const mins = Math.round(seconds / 60);\n		if (mins < 60) return `${mins} min`;\n		const hours = Math.floor(mins / 60);\n		const remainingMins = mins % 60;\n		return `${hours}h ${remainingMins}m`;\n	}\n\n	function formatDistance(meters: number): string {\n		if (meters < 1000) return `${Math.round(meters)} m`;\n		return `${(meters / 1000).toFixed(1)} km`;\n	}\n\n	async function fetchRoutes() {\n		try {\n			const response = await fetch(\n				`https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson&alternatives=true`\n			);\n			const data = await response.json();\n\n			if (data.routes?.length > 0) {\n				const routeData: RouteData[] = data.routes.map(\n					(route: {\n						geometry: { coordinates: [number, number][] };\n						duration: number;\n						distance: number;\n					}) => ({\n						coordinates: route.geometry.coordinates,\n						duration: route.duration,\n						distance: route.distance,\n					})\n				);\n				routes = routeData;\n			}\n		} catch (error) {\n			console.error("Failed to fetch routes:", error);\n		} finally {\n			isLoading = false;\n		}\n	}\n\n	// Map routes with their indices for rendering\n	const routesWithIndex = $derived(routes.map((route, index) => ({ route, index })));\n\n	// Fetch routes on mount\n	fetchRoutes();\n<\/script>\n\n<div class="relative h-125 w-full">\n	<Map center={[4.69, 52.14]} zoom={8.5}>\n		{#each routesWithIndex as { route, index } (index)}\n			{@const isSelected = index === selectedIndex}\n			<MapRoute\n				id={`route-${index}`}\n				coordinates={route.coordinates}\n				color={isSelected ? "#6366f1" : "#94a3b8"}\n				width={isSelected ? 6 : 5}\n				opacity={isSelected ? 1 : 0.6}\n				onclick={() => (selectedIndex = index)}\n			/>\n		{/each}\n\n		<MapMarker longitude={start.lng} latitude={start.lat}>\n			<MarkerContent>\n				<div class="size-5 rounded-full border-2 border-white bg-green-500 shadow-lg"></div>\n				<MarkerLabel position="top">{start.name}</MarkerLabel>\n			</MarkerContent>\n		</MapMarker>\n\n		<MapMarker longitude={end.lng} latitude={end.lat}>\n			<MarkerContent>\n				<div class="size-5 rounded-full border-2 border-white bg-red-500 shadow-lg"></div>\n				<MarkerLabel position="bottom">{end.name}</MarkerLabel>\n			</MarkerContent>\n		</MapMarker>\n	</Map>\n\n	{#if routes.length > 0}\n		<div class="absolute top-3 left-3 flex flex-col gap-2">\n			{#each routes as route, index}\n				{@const isActive = index === selectedIndex}\n				{@const isFastest = index === 0}\n				<Button\n					variant={isActive ? "default" : "secondary"}\n					size="sm"\n					onclick={() => (selectedIndex = index)}\n					class="justify-start gap-3"\n				>\n					<div class="flex items-center gap-1.5">\n						<Clock class="size-3.5" />\n						<span class="font-medium">{formatDuration(route.duration)}</span>\n					</div>\n					<div class="flex items-center gap-1.5 text-xs opacity-80">\n						<Route class="size-3" />\n						{formatDistance(route.distance)}\n					</div>\n					{#if isFastest}\n						<span\n							class="rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-medium text-green-700 dark:bg-green-900 dark:text-green-300"\n						>\n							Fastest\n						</span>\n					{/if}\n				</Button>\n			{/each}\n		</div>\n	{/if}\n\n	{#if isLoading}\n		<div class="bg-background/50 absolute inset-0 flex items-center justify-center">\n			<Loader2 class="text-muted-foreground size-6 animate-spin" />\n		</div>\n	{/if}\n</div>\n';
const __vite_glob_0_16 = '<script lang="ts">\n	import { Map, MapMarker, MarkerContent, MarkerLabel, MarkerPopup } from "$lib/components/ui/map";\n\n	import { Button } from "$lib/registry/ui/button";\n	import { Star, Navigation, Clock, ExternalLink } from "@lucide/svelte";\n\n	const places = [\n		{\n			id: 1,\n			name: "The Metropolitan Museum of Art",\n			label: "Museum",\n			category: "Museum",\n			rating: 4.8,\n			reviews: 12453,\n			hours: "10:00 AM - 5:00 PM",\n			image: "https://images.unsplash.com/photo-1575223970966-76ae61ee7838?w=300&h=200&fit=crop",\n			lng: -73.9632,\n			lat: 40.7794,\n		},\n		{\n			id: 2,\n			name: "Brooklyn Bridge",\n			label: "Landmark",\n			category: "Landmark",\n			rating: 4.9,\n			reviews: 8234,\n			hours: "Open 24 hours",\n			image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=300&h=200&fit=crop",\n			lng: -73.9969,\n			lat: 40.7061,\n		},\n		{\n			id: 3,\n			name: "Grand Central Terminal",\n			label: "Transit",\n			category: "Transit",\n			rating: 4.7,\n			reviews: 5621,\n			hours: "5:15 AM - 2:00 AM",\n			image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=300&h=200&fit=crop",\n			lng: -73.9772,\n			lat: 40.7527,\n		},\n	];\n<\/script>\n\n<div class="h-125 w-full">\n	<Map center={[-73.98, 40.74]} zoom={11}>\n		{#each places as place (place.id)}\n			<MapMarker longitude={place.lng} latitude={place.lat}>\n				<MarkerContent>\n					<div\n						class="size-5 cursor-pointer rounded-full border-2 border-white bg-rose-500 shadow-lg transition-transform hover:scale-110"\n					></div>\n					<MarkerLabel position="bottom">\n						{place.label}\n					</MarkerLabel>\n				</MarkerContent>\n\n				<MarkerPopup class="w-62 p-0">\n					<div class="relative h-32 overflow-hidden rounded-t-md">\n						<img\n							src={place.image}\n							alt={place.name}\n							class="h-full w-full object-cover"\n							loading="lazy"\n						/>\n					</div>\n\n					<div class="space-y-2 p-3">\n						<div>\n							<span class="text-muted-foreground text-xs font-medium tracking-wide uppercase">\n								{place.category}\n							</span>\n							<h3 class="text-foreground leading-tight font-semibold">\n								{place.name}\n							</h3>\n						</div>\n\n						<div class="flex items-center gap-3 text-sm">\n							<div class="flex items-center gap-1">\n								<Star class="size-3.5 fill-amber-400 text-amber-400" />\n								<span class="font-medium">\n									{place.rating}\n								</span>\n								<span class="text-muted-foreground">\n									({place.reviews.toLocaleString()})\n								</span>\n							</div>\n						</div>\n\n						<div class="text-muted-foreground flex items-center gap-1.5 text-sm">\n							<Clock class="size-3.5" />\n							<span>{place.hours}</span>\n						</div>\n\n						<div class="flex gap-2 pt-1">\n							<Button size="sm" class="h-8 flex-1">\n								<Navigation class="mr-1.5 size-3.5" />\n								Directions\n							</Button>\n\n							<Button size="sm" variant="outline" class="h-8">\n								<ExternalLink class="size-3.5" />\n							</Button>\n						</div>\n					</div>\n				</MarkerPopup>\n			</MapMarker>\n		{/each}\n	</Map>\n</div>\n';
const __vite_glob_0_17 = '<script lang="ts">\n	import { Map, MapMarker, MarkerContent, MarkerTooltip, MapRoute } from "$lib/components/ui/map";\n\n	const route: [number, number][] = [\n		[-74.006, 40.7128], // NYC City Hall\n		[-73.9857, 40.7484], // Empire State Building\n		[-73.9772, 40.7527], // Grand Central\n		[-73.9654, 40.7829], // Central Park\n	];\n\n	const stops = [\n		{ name: "City Hall", lng: -74.006, lat: 40.7128 },\n		{ name: "Empire State Building", lng: -73.9857, lat: 40.7484 },\n		{ name: "Grand Central Terminal", lng: -73.9772, lat: 40.7527 },\n		{ name: "Central Park", lng: -73.9654, lat: 40.7829 },\n	];\n<\/script>\n\n<div class="h-100 w-full">\n	<Map center={[-73.98, 40.75]} zoom={11.2}>\n		<MapRoute coordinates={route} color="#3b82f6" width={4} opacity={0.8} />\n\n		{#each stops as stop, index (stop.name)}\n			<MapMarker longitude={stop.lng} latitude={stop.lat}>\n				<MarkerContent>\n					<div\n						class="flex size-4.5 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-xs font-bold text-white shadow-lg"\n					>\n						{index + 1}\n					</div>\n				</MarkerContent>\n\n				<MarkerTooltip>\n					{stop.name}\n				</MarkerTooltip>\n			</MapMarker>\n		{/each}\n	</Map>\n</div>\n';
const __vite_glob_0_18 = '<script lang="ts">\n	import { Map, MapPopup } from "$lib/components/ui/map";\n	import { Button } from "$lib/registry/ui/button";\n\n	let showPopup = $state(true);\n<\/script>\n\n<div class="relative h-[400px] w-full">\n	<Map center={[-74.006, 40.7128]} zoom={13}>\n		{#if showPopup}\n			<MapPopup\n				longitude={-74.006}\n				latitude={40.7128}\n				closeButton\n				focusAfterOpen={false}\n				closeOnClick={false}\n				onclose={() => (showPopup = false)}\n				class="w-62"\n			>\n				<div class="space-y-2">\n					<h3 class="text-foreground font-semibold">New York City</h3>\n					<p class="text-muted-foreground text-sm">\n						The city that never sleeps. Population: 8.3 million\n					</p>\n					<Button size="sm" variant="outline" class="w-full" onclick={() => (showPopup = false)}>\n						Close\n					</Button>\n				</div>\n			</MapPopup>\n		{/if}\n	</Map>\n\n	{#if !showPopup}\n		<Button size="sm" class="absolute bottom-4 left-4 z-10" onclick={() => (showPopup = true)}>\n			Show Popup\n		</Button>\n	{/if}\n</div>\n';
const examples = /* @__PURE__ */ Object.assign({
  "/src/lib/components/docs/preview/examples/AdvancedUsageExample.svelte": __vite_glob_0_0,
  "/src/lib/components/docs/preview/examples/BasicMapExample.svelte": __vite_glob_0_1,
  "/src/lib/components/docs/preview/examples/ClusterExample.svelte": __vite_glob_0_2,
  "/src/lib/components/docs/preview/examples/ControlledMapExample.svelte": __vite_glob_0_3,
  "/src/lib/components/docs/preview/examples/ControlledMapViewportTracker.svelte": __vite_glob_0_4,
  "/src/lib/components/docs/preview/examples/CustomLayerContent.svelte": __vite_glob_0_5,
  "/src/lib/components/docs/preview/examples/CustomLayerExample.svelte": __vite_glob_0_6,
  "/src/lib/components/docs/preview/examples/CustomStyleExample.svelte": __vite_glob_0_7,
  "/src/lib/components/docs/preview/examples/CustomStylePitchController.svelte": __vite_glob_0_8,
  "/src/lib/components/docs/preview/examples/DraggableMarkerExample.svelte": __vite_glob_0_9,
  "/src/lib/components/docs/preview/examples/LayerMarkersExample.svelte": __vite_glob_0_10,
  "/src/lib/components/docs/preview/examples/MapController.svelte": __vite_glob_0_11,
  "/src/lib/components/docs/preview/examples/MapControlsExample.svelte": __vite_glob_0_12,
  "/src/lib/components/docs/preview/examples/MarkersExample.svelte": __vite_glob_0_13,
  "/src/lib/components/docs/preview/examples/MarkersLayer.svelte": __vite_glob_0_14,
  "/src/lib/components/docs/preview/examples/OsrmRouteExample.svelte": __vite_glob_0_15,
  "/src/lib/components/docs/preview/examples/PopupExample.svelte": __vite_glob_0_16,
  "/src/lib/components/docs/preview/examples/RouteExample.svelte": __vite_glob_0_17,
  "/src/lib/components/docs/preview/examples/StandalonePopupExample.svelte": __vite_glob_0_18
});
function normalizeImports(source) {
  return source.replace(/@\/registry\/map/g, "@/components/ui/map");
}
function getExampleSource(name) {
  const key = `/src/lib/components/docs/preview/examples/${name}.svelte`;
  const loader = examples[key];
  if (!loader) {
    throw new Error(`Example file not found: ${name}`);
  }
  return normalizeImports(loader);
}
function getExampleSources(names) {
  return names.map((name) => {
    const key = `/src/lib/components/docs/preview/examples/${name}.svelte`;
    const loader = examples[key];
    if (!loader) {
      throw new Error(`Example file not found: ${name}`);
    }
    return {
      name,
      code: normalizeImports(loader)
    };
  });
}
export {
  getExampleSources as a,
  getExampleSource as g,
  highlightCode as h
};
