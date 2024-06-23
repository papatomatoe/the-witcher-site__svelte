<script lang="ts">
	import Actors from '$lib/components/Actors.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Map from '$lib/components/Map.svelte';
	import Photos from '$lib/components/Photos.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Ведьмак | Главная</title>
</svelte:head>

<h1 class="v-h">Главная страница</h1>

<Hero />
<Actors actors={data.actors} />
<Photos photos={data.photos} />
<Map markers={data.markers} />

<style>
</style>
