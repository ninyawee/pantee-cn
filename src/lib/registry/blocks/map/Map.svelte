<script lang="ts">
	import { MapLibre } from "svelte-maplibre-gl";
	import type maplibregl from "maplibre-gl";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import { theme } from "$lib/theme";
	import { cn } from "$lib/utils.js";

	type MapStyleOption = string | maplibregl.StyleSpecification;

	interface Props {
		children?: import("svelte").Snippet;
		styles?: {
			light?: MapStyleOption;
			dark?: MapStyleOption;
		};
		theme?: "light" | "dark";
		projection?: maplibregl.ProjectionSpecification;
		center?: maplibregl.LngLatLike;
		zoom?: number;
		bearing?: number;
		pitch?: number;
		map?: maplibregl.Map;
		class?: string;
		[key: string]: unknown;
	}

	const defaultStyles = {
		dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
		light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
	};

	let {
		children,
		styles,
		theme: _theme,
		projection,
		center = $bindable([13.405, 52.52] as [number, number]),
		zoom = $bindable(0),
		bearing = $bindable(0),
		pitch = $bindable(0),
		map = $bindable(),
		class: className,
		...rest
	}: Props = $props();

	// Provide backward-compatible string context for example components
	// that use getContext("map") with the old API shape
	setContext("map", {
		getMap: () => map ?? null,
		isLoaded: () => !!map,
		isStyleReady: () => !!map,
	});

	// Theme detection
	let tailwindTheme: "light" | "dark" = $state("light");

	function getDocumentTheme(): "light" | "dark" | null {
		if (typeof document === "undefined") return null;
		if (document.documentElement.classList.contains("dark")) return "dark";
		if (document.documentElement.classList.contains("light")) return "light";
		return null;
	}

	function getSystemTheme(): "light" | "dark" {
		if (typeof window === "undefined") return "light";
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}

	if (browser) {
		const themeUnsubscribe = theme.subscribe((value) => {
			tailwindTheme = value;
		});

		const updateTheme = () => {
			const docTheme = getDocumentTheme();
			tailwindTheme = docTheme ?? getSystemTheme();
		};

		updateTheme();

		const observer = new MutationObserver(updateTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleSystemChange = (e: MediaQueryListEvent) => {
			if (!getDocumentTheme()) {
				tailwindTheme = e.matches ? "dark" : "light";
			}
		};
		mediaQuery.addEventListener("change", handleSystemChange);
	}

	const resolvedTheme = $derived(_theme ?? tailwindTheme);

	const mapStyles = $derived({
		dark: styles?.dark ?? defaultStyles.dark,
		light: styles?.light ?? defaultStyles.light,
	});

	const currentStyle = $derived(
		resolvedTheme === "light" ? mapStyles.light : mapStyles.dark
	) as string;
</script>

<div class={cn("relative h-full w-full", className)}>
	{#if !map}
		<div class="absolute inset-0 z-10 flex items-center justify-center">
			<div class="flex gap-1">
				<span class="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full"></span>
				<span
					class="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full [animation-delay:150ms]"
				></span>
				<span
					class="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full [animation-delay:300ms]"
				></span>
			</div>
		</div>
	{/if}
	<MapLibre
		bind:map
		bind:center
		bind:zoom
		bind:bearing
		bind:pitch
		style={currentStyle}
		renderWorldCopies={false}
		attributionControl={{ compact: true }}
		class="h-full w-full"
		{...rest}
	>
		{#snippet children(mapInstance)}
			{@render children?.()}
		{/snippet}
	</MapLibre>
</div>
