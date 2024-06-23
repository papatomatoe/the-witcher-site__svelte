<script lang="ts">
	import { MapLibre, Marker, Popup, mapContext, type LngLatLike } from 'svelte-maplibre';
	import Logo from '$lib/components/Logo.svelte';
	import { device } from '$lib/store/environment';
	import type { IMarker } from '$lib/types';

	interface Props {
		markers: IMarker[];
	}

	let { markers }: Props = $props();

	let center = $state<LngLatLike>([37.57350289423982, 55.76387248279491]);
	let zoom = $state(11.5);

	$effect(() => {
		zoom = $device === 'mobile' ? 10 : 11.5;
	});
</script>

<section class="map-sections">
	<div class="map-sections__container">
		<div class="page-container">
			<h2 class="map-sections__title">Магазины мерча ведьмака</h2>
		</div>
	</div>
	<div class="map-sections__wrapper">
		<MapLibre
			class="map"
			style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
			{center}
			{zoom}
			standardControls={false}
		>
			{#each markers as marker (marker.id)}
				<Marker lngLat={marker.coords as LngLatLike} class="marker">
					<div class="map__marker">
						<Logo />
					</div>
					<Popup openOn="hover" offset={[0, -20]}>
						<address class="map__address address">
							<p class="address__title">{marker.title}</p>
							<p>{marker.address}</p>
						</address>
					</Popup>
				</Marker>
			{/each}
		</MapLibre>
	</div>
</section>

<style>
	:global(.maplibregl-ctrl-bottom-right) {
		display: none;
	}

	:global(.map) {
		height: 400px;
	}

	:global(.maplibregl-canvas) {
		filter: grayscale(100%) brightness(58%) contrast(410%);
	}

	.map-sections {
		padding: 32px 0 0;
	}

	.map-sections__container {
		padding: 0 16px 24px;
	}

	.map-sections__title {
		font: var(--text--H2-mob);
	}

	.map__marker {
		width: 40px;
		height: 40px;
		background-color: var(--color--white);
		border-radius: 50%;
		--color--icon: var(--color--red-100);
	}

	.map__address {
		color: var(--color--black);
		font: var(--text--P-mob);
	}

	.address__title {
		font-weight: 500;
	}

	@media (min-width: 720px) {
		.map-sections__title {
			font: var(--text--H2-tab);
		}
	}

	@media (min-width: 1260px) {
		.map-sections {
			padding: 10px 0 96px;
		}

		.map-sections__container {
			padding: 0;
		}
		.map-sections__title {
			padding-bottom: 40px;
			font: var(--text--H2-desk);
		}

		.map-sections__wrapper {
			width: 1200px;
			margin: 0 auto;
		}

		:global(.map) {
			height: 540px;
		}
	}
</style>
