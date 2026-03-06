<script lang="ts">
	import { GeoJSONSource, LineLayer, getMapContext } from "svelte-maplibre-gl";
	import { onMount } from "svelte";

	function buildDashSequence(dash: number, gap: number): number[][] {
		const total = dash + gap;
		const stepSize = 0.5;
		const frames: number[][] = [];

		for (let offset = 0; offset < total; offset += stepSize) {
			if (offset <= dash) {
				frames.push([offset, gap, dash - offset]);
			} else {
				const into = offset - dash;
				frames.push([0, into, dash, gap - into]);
			}
		}

		return frames;
	}

	interface Props {
		id?: string;
		coordinates: [number, number][];
		color?: string;
		bgColor?: string;
		width?: number;
		bgWidth?: number;
		bgOpacity?: number;
		speed?: number;
		dashLength?: number;
		gapLength?: number;
		paused?: boolean;
	}

	let {
		coordinates,
		color = "#2563eb",
		bgColor = "#ffffff",
		width = 3,
		bgWidth = 6,
		bgOpacity = 0.4,
		speed = 0.5,
		dashLength = 3,
		gapLength = 2,
		paused = false,
		id = crypto.randomUUID(),
	}: Props = $props();

	const MIN_FPS = 2;
	const MAX_FPS = 60;
	const fps = $derived(
		MIN_FPS + Math.pow(Math.max(0, Math.min(1, speed)), 2) * (MAX_FPS - MIN_FPS)
	);

	const dashSequence = $derived(buildDashSequence(dashLength, gapLength));

	const mapCtx = getMapContext();

	const data = $derived({
		type: "Feature" as const,
		properties: {},
		geometry: {
			type: "LineString" as const,
			coordinates,
		},
	});

	const layerId = `ant-path-layer-${id}`;
	let step = 0;
	let frameId: number | null = null;
	let lastTime = 0;

	function animate(time: number) {
		const map = mapCtx.map;
		if (!map || !map.getLayer(layerId)) {
			frameId = requestAnimationFrame(animate);
			return;
		}

		const interval = 1000 / fps;
		if (!paused && time - lastTime >= interval) {
			lastTime = time;
			map.setPaintProperty(
				layerId,
				"line-dasharray",
				dashSequence[step % dashSequence.length]
			);
			step++;
		}

		frameId = requestAnimationFrame(animate);
	}

	onMount(() => {
		frameId = requestAnimationFrame(animate);
		return () => {
			if (frameId !== null) cancelAnimationFrame(frameId);
		};
	});
</script>

{#if coordinates.length >= 2}
	<GeoJSONSource id={`ant-path-source-${id}`} {data}>
		<LineLayer
			id={`ant-path-bg-${id}`}
			layout={{ "line-join": "round", "line-cap": "round" }}
			paint={{
				"line-color": bgColor,
				"line-width": bgWidth,
				"line-opacity": bgOpacity,
			}}
		/>
		<LineLayer
			id={layerId}
			layout={{ "line-join": "round", "line-cap": "butt" }}
			paint={{
				"line-color": color,
				"line-width": width,
				"line-opacity": 1,
				"line-dasharray": dashSequence[0],
			}}
		/>
	</GeoJSONSource>
{/if}
