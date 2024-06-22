<script>
	import Actors from '$lib/components/Actors.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Map from '$lib/components/Map.svelte';
	import Photos from '$lib/components/Photos.svelte';
</script>

<svelte:head>
	<title>Ведьмак | Главная</title>
</svelte:head>

<h1 class="v-h">Главная страница</h1>

<Hero />
<Actors />
<Photos />
<Map />

<style>
</style>
