<script lang="ts">
	import { MapLibre, CustomLayer } from "svelte-maplibre-gl";
	import type maplibregl from "maplibre-gl";
	import * as THREE from "three";
	import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

	class ThreeJsLayer implements Omit<maplibregl.CustomLayerInterface, "id" | "type"> {
		renderingMode = "3d" as const;
		private camera = new THREE.Camera();
		private scene = new THREE.Scene();
		private renderer: THREE.WebGLRenderer | null = null;
		private map: maplibregl.Map | null = null;

		onAdd(map: maplibregl.Map, gl: WebGL2RenderingContext) {
			this.map = map;

			const light1 = new THREE.DirectionalLight(0xffffff);
			light1.position.set(0, -70, 100).normalize();
			this.scene.add(light1);

			const light2 = new THREE.DirectionalLight(0xffffff);
			light2.position.set(0, 70, 100).normalize();
			this.scene.add(light2);

			const loader = new GLTFLoader();
			loader.load(
				"https://maplibre.org/maplibre-gl-js/docs/assets/34M_17/34M_17.gltf",
				(gltf) => {
					this.scene.add(gltf.scene);
				}
			);

			this.renderer = new THREE.WebGLRenderer({
				canvas: map.getCanvas(),
				context: gl,
				antialias: true,
			});
			this.renderer.autoClear = false;
		}

		render(
			_gl: WebGL2RenderingContext | WebGLRenderingContext,
			args: maplibregl.CustomRenderMethodInput
		) {
			const modelOrigin: [number, number] = [148.9819, -35.39847];
			const modelAltitude = 0;
			const scaling = 10_000.0;
			const modelMatrix = this.map!.transform.getMatrixForModel(modelOrigin, modelAltitude);
			const m = new THREE.Matrix4().fromArray(args.defaultProjectionData.mainMatrix);
			const l = new THREE.Matrix4()
				.fromArray(modelMatrix)
				.scale(new THREE.Vector3(scaling, scaling, scaling));

			this.camera.projectionMatrix = m.multiply(l);
			this.renderer!.resetState();
			this.renderer!.render(this.scene, this.camera);
			this.map!.triggerRepaint();
		}
	}

	const customLayerImpl = new ThreeJsLayer();
</script>

<div class="h-[400px] w-full">
	<MapLibre
		style="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
		zoom={5}
		pitch={50}
		maxPitch={80}
		center={[150.165, -35.017]}
		class="h-full w-full"
	>
		<CustomLayer implementation={customLayerImpl} />
	</MapLibre>
</div>
