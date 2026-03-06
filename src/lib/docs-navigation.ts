import Map from "@lucide/svelte/icons/map";
import BookOpen from "@lucide/svelte/icons/book-open";
import Code from "@lucide/svelte/icons/code";
import Braces from "@lucide/svelte/icons/braces";
import MapPin from "@lucide/svelte/icons/map-pin";
import MessageSquare from "@lucide/svelte/icons/message-square";
import Route from "@lucide/svelte/icons/route";
import Settings from "@lucide/svelte/icons/settings";
import Layers from "@lucide/svelte/icons/layers";
import Wrench from "@lucide/svelte/icons/wrench";
import Box from "@lucide/svelte/icons/box";
import Database from "@lucide/svelte/icons/database";
import Sparkles from "@lucide/svelte/icons/sparkles";
import Mountain from "@lucide/svelte/icons/mountain";
import Pencil from "@lucide/svelte/icons/pencil";
import Bug from "@lucide/svelte/icons/bug";
import TreePine from "@lucide/svelte/icons/tree-pine";

export interface NavItem {
	title: string;
	href: string;
	icon: import("svelte").Component;
}

export interface NavGroup {
	title: string;
	items: NavItem[];
}

export const docsNavigation: NavGroup[] = [
	{
		title: "Basics",
		items: [
			{ title: "Getting Started", href: "/docs", icon: BookOpen },
			{ title: "Installation", href: "/docs/installation", icon: Code },
			{ title: "API Reference", href: "/docs/api-reference", icon: Braces },
		],
	},
	{
		title: "Examples",
		items: [
			{ title: "Plain Map", href: "/docs/plain", icon: Map },
			{ title: "3D Model with Three.js", href: "/docs/threejs-model", icon: Box },
			{ title: "Ant Path Animation", href: "/docs/ant-path", icon: Bug },
			{ title: "3D Trail Path", href: "/docs/3d-trail", icon: TreePine },
		],
	},
	{
		title: "Extensions",
		items: [
			{ title: "PMTiles Protocol", href: "/docs/pmtiles", icon: Database },
			{ title: "deck.gl Overlay", href: "/docs/deckgl-overlay", icon: Sparkles },
			{ title: "Contour Lines", href: "/docs/contour-lines", icon: Mountain },
			{ title: "Terra Draw", href: "/docs/terra-draw", icon: Pencil },
		],
	},
	{
		title: "Components",
		items: [
			{ title: "Map", href: "/docs/basic-map", icon: Map },
			{ title: "Controls", href: "/docs/controls", icon: Settings },
			{ title: "Markers", href: "/docs/markers", icon: MapPin },
			{ title: "Popups", href: "/docs/popups", icon: MessageSquare },
			{ title: "Routes", href: "/docs/routes", icon: Route },
			{ title: "Clusters", href: "/docs/clusters", icon: Layers },
			{ title: "Advanced", href: "/docs/advanced-usage", icon: Wrench },
		],
	},
];

export const fullNavItems: NavItem[] = docsNavigation.flatMap((group) => group.items);

export function findNeighbors(pathName: string): {
	previous: NavItem | null;
	next: NavItem | null;
} {
	const path = pathName.split("?")[0].split("#")[0];
	const index = fullNavItems.findIndex((item) => item.href === path);

	let previous: NavItem | null = null;
	for (let i = index - 1; i >= 0; i--) {
		if (fullNavItems[i].href !== "/llms.txt") {
			previous = fullNavItems[i];
			break;
		}
	}

	let next: NavItem | null = null;
	for (let i = index + 1; i < fullNavItems.length; i++) {
		if (fullNavItems[i].href !== "/llms.txt") {
			next = fullNavItems[i];
			break;
		}
	}

	return { previous, next };
}
