<script lang="ts">
	import { base } from "$app/paths";
	import { cn } from "$lib/utils";
	import Button from "$lib/registry/ui/button/button.svelte";

	interface Props {
		class?: string;
	}

	const { class: className }: Props = $props();
</script>

<footer class={cn("w-full border-t py-5", className)}>
	<div
		class="text-muted-foreground container flex w-full flex-col items-center justify-between gap-4 text-sm sm:flex-row"
	>
		<div class="flex flex-col items-center gap-1 sm:items-start">
			<div class="flex items-center gap-2">
				<span class="text-foreground font-medium">pantee-cn</span>
				<span class="text-muted-foreground/80">•</span>
				<span>
					Built by
					<Button
						variant="link"
						size="sm"
						class="px-1"
						href="https://github.com/ninyawee"
						target="_blank"
						rel="noopener noreferrer"
					>
						Nutchanon Ninyawee
					</Button>
				</span>
				<Button variant="link" size="sm" class="text-muted-foreground/60 px-1" href="#why">
					why?
				</Button>
			</div>
			<div class="text-muted-foreground/60 flex items-center gap-1 text-xs">
				<span>Credits:</span>
				<Button
					variant="link"
					size="sm"
					class="text-muted-foreground/60 h-auto px-1 py-0 text-xs"
					href="https://github.com/AnmolSaini16/mapcn"
					target="_blank"
					rel="noopener noreferrer"
				>
					mapcn
				</Button>
				<span>&</span>
				<Button
					variant="link"
					size="sm"
					class="text-muted-foreground/60 h-auto px-1 py-0 text-xs"
					href="https://github.com/MariusLang/mapcn-svelte"
					target="_blank"
					rel="noopener noreferrer"
				>
					mapcn-svelte
				</Button>
			</div>
		</div>
		<div class="flex items-center">
			<Button variant="ghost" size="sm" href="{base}/docs">Documentation</Button>
			<Button
				variant="ghost"
				size="sm"
				href="https://github.com/ninyawee/pantee-cn"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub
			</Button>
		</div>
	</div>
</footer>
