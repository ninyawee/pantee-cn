<script lang="ts">
	import { base } from "$app/paths";

	const {
		href,
		external = false,
		children,
	} = $props<{
		href: string;
		external?: boolean;
		children?: import("svelte").Snippet;
	}>();

	const resolvedHref = $derived(!external && href.startsWith("/") ? base + href : href);
</script>

<a
	href={resolvedHref}
	target={external ? "_blank" : undefined}
	rel={external ? "noopener noreferrer" : undefined}
	class="text-foreground font-medium underline underline-offset-4 transition-colors"
>
	{@render children?.()}
</a>
