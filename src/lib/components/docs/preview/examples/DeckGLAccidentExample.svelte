<script lang="ts">
	import { MapLibre } from "svelte-maplibre-gl";
	import { DeckGLOverlay } from "@svelte-maplibre-gl/deckgl";
	import { ScatterplotLayer } from "@deck.gl/layers";

	interface Accident {
		lat: number;
		lon: number;
		death: number;
		severe: number;
		light: number;
		dept: string;
		date: string;
		crash: string;
		cause: string;
	}

	let accidents: Accident[] = $state([]);
	let hovered: Accident | null = $state(null);

	function getSeverity(d: Accident): number {
		return d.death * 5 + d.severe * 2 + d.light;
	}

	function getColor(d: Accident): [number, number, number, number] {
		if (d.death > 0) return [220, 38, 38, 200];
		if (d.severe > 0) return [249, 115, 22, 200];
		return [234, 179, 8, 180];
	}

	function getRadius(d: Accident): number {
		return 800 + getSeverity(d) * 600;
	}

	$effect(() => {
		fetch("/data/drr-accident-2022.json")
			.then((r) => r.json())
			.then((data: Accident[]) => {
				accidents = data;
			});
	});

	const layers = $derived([
		new ScatterplotLayer<Accident>({
			id: "accident-scatter",
			data: accidents,
			getPosition: (d) => [d.lon, d.lat],
			getFillColor: (d) => getColor(d),
			getRadius: (d) => getRadius(d),
			radiusMinPixels: 3,
			radiusMaxPixels: 30,
			pickable: true,
			antialiasing: true,
			onHover: (info) => {
				hovered = (info.object as Accident) ?? null;
			},
		}),
	]);
</script>

<div class="relative h-[500px] w-full">
	<MapLibre
		class="h-full w-full"
		style="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
		zoom={5.2}
		center={[100.5, 13.2]}
		minZoom={4}
	>
		<DeckGLOverlay interleaved {layers} />
	</MapLibre>

	{#if hovered}
		<div
			class="pointer-events-none absolute top-3 left-3 z-10 max-w-xs rounded-lg border border-zinc-700 bg-zinc-900/95 p-3 text-xs text-zinc-200 shadow-lg"
		>
			<div class="mb-1 font-semibold text-white">
				{hovered.dept}
			</div>
			<div class="text-zinc-400">
				{new Date(hovered.date).toLocaleDateString("th-TH", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</div>
			{#if hovered.crash}
				<div class="mt-1">{hovered.crash}</div>
			{/if}
			{#if hovered.cause}
				<div class="text-zinc-400">{hovered.cause}</div>
			{/if}
			<div class="mt-1.5 flex gap-3">
				{#if hovered.death > 0}
					<span class="text-red-400">เสียชีวิต {hovered.death}</span>
				{/if}
				{#if hovered.severe > 0}
					<span class="text-orange-400">บาดเจ็บสาหัส {hovered.severe}</span>
				{/if}
				{#if hovered.light > 0}
					<span class="text-yellow-400">บาดเจ็บเล็กน้อย {hovered.light}</span>
				{/if}
			</div>
		</div>
	{/if}

	<div
		class="absolute top-3 right-3 z-10 rounded-lg border border-zinc-700 bg-zinc-900/90 px-3 py-2 text-xs text-zinc-300"
	>
		<div class="mb-1 font-semibold text-white">Rural Road Accidents 2022</div>
		<div class="flex items-center gap-2">
			<span class="flex items-center gap-1">
				<span class="inline-block h-2 w-2 rounded-full bg-red-500"></span> Fatal
			</span>
			<span class="flex items-center gap-1">
				<span class="inline-block h-2 w-2 rounded-full bg-orange-500"></span> Severe
			</span>
			<span class="flex items-center gap-1">
				<span class="inline-block h-2 w-2 rounded-full bg-yellow-500"></span> Minor
			</span>
		</div>
		<div class="mt-1 flex gap-3 border-t border-zinc-700 pt-1 text-zinc-400">
			<span>{accidents.length} incidents</span>
			<span>{accidents.reduce((s, d) => s + d.death, 0)} deaths</span>
			<span>{accidents.reduce((s, d) => s + d.severe, 0)} severe</span>
		</div>
		<div class="mt-1 text-[10px] text-zinc-500">
			<a
				href="https://gdcatalog.go.th/dataset/gdpublish-arms-accident"
				target="_blank"
				rel="noopener noreferrer"
				class="underline hover:text-zinc-300"
			>
				Source: Dept. of Rural Roads — GD Catalog
			</a>
		</div>
	</div>
</div>
