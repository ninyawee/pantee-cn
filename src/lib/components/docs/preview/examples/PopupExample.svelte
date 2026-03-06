<script lang="ts">
	import { Map, MapMarker, MarkerContent, MarkerLabel, MarkerPopup } from "$lib/components/ui/map";

	import { Button } from "$lib/registry/ui/button";
	import { Star, Navigation, Clock, ExternalLink } from "@lucide/svelte";

	const places = [
		{
			id: 1,
			name: "Wat Phra Kaew",
			label: "Temple",
			category: "Temple",
			rating: 4.8,
			reviews: 15234,
			hours: "8:30 AM - 3:30 PM",
			image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=300&h=200&fit=crop",
			lng: 100.4914,
			lat: 13.7516,
		},
		{
			id: 2,
			name: "Wat Arun",
			label: "Landmark",
			category: "Landmark",
			rating: 4.9,
			reviews: 9876,
			hours: "8:00 AM - 6:00 PM",
			image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=300&h=200&fit=crop",
			lng: 100.4889,
			lat: 13.7437,
		},
		{
			id: 3,
			name: "Chatuchak Weekend Market",
			label: "Market",
			category: "Market",
			rating: 4.7,
			reviews: 7321,
			hours: "9:00 AM - 6:00 PM",
			image: "https://images.unsplash.com/photo-1533050487297-09b450131914?w=300&h=200&fit=crop",
			lng: 100.5508,
			lat: 13.7999,
		},
	];
</script>

<div class="h-125 w-full">
	<Map center={[100.51, 13.77]} zoom={11}>
		{#each places as place (place.id)}
			<MapMarker longitude={place.lng} latitude={place.lat}>
				<MarkerContent>
					<div
						class="size-5 cursor-pointer rounded-full border-2 border-white bg-rose-500 shadow-lg transition-transform hover:scale-110"
					></div>
					<MarkerLabel position="bottom">
						{place.label}
					</MarkerLabel>
				</MarkerContent>

				<MarkerPopup class="w-62 p-0">
					<div class="relative h-32 overflow-hidden rounded-t-md">
						<img
							src={place.image}
							alt={place.name}
							class="h-full w-full object-cover"
							loading="lazy"
						/>
					</div>

					<div class="space-y-2 p-3">
						<div>
							<span class="text-muted-foreground text-xs font-medium tracking-wide uppercase">
								{place.category}
							</span>
							<h3 class="text-foreground leading-tight font-semibold">
								{place.name}
							</h3>
						</div>

						<div class="flex items-center gap-3 text-sm">
							<div class="flex items-center gap-1">
								<Star class="size-3.5 fill-amber-400 text-amber-400" />
								<span class="font-medium">
									{place.rating}
								</span>
								<span class="text-muted-foreground">
									({place.reviews.toLocaleString()})
								</span>
							</div>
						</div>

						<div class="text-muted-foreground flex items-center gap-1.5 text-sm">
							<Clock class="size-3.5" />
							<span>{place.hours}</span>
						</div>

						<div class="flex gap-2 pt-1">
							<Button size="sm" class="h-8 flex-1">
								<Navigation class="mr-1.5 size-3.5" />
								Directions
							</Button>

							<Button size="sm" variant="outline" class="h-8">
								<ExternalLink class="size-3.5" />
							</Button>
						</div>
					</div>
				</MarkerPopup>
			</MapMarker>
		{/each}
	</Map>
</div>
