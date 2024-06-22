<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { device } from '$lib/store/environment';
	import '../styles/index.css';
	import { navigating } from '$app/stores';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	$effect(() => {
		const mobileMedia = window.matchMedia('(width < 720px)');
		const restMedia = window.matchMedia('(width >= 720px)');

		const handleMachMobile = () => {
			if (mobileMedia.matches) $device = 'mobile';
		};

		const handleMatchRest = () => {
			if (restMedia.matches) $device = 'rest';
		};

		$device = mobileMedia.matches ? 'mobile' : 'rest';

		mobileMedia.addEventListener('change', handleMachMobile);
		restMedia.addEventListener('change', handleMatchRest);
		return () => {
			mobileMedia.removeEventListener('change', handleMachMobile);
			restMedia.removeEventListener('change', handleMatchRest);
		};
	});
</script>

<main class="page-content">
	{#if $navigating}
		<p>Loading...</p>
	{:else}
		{@render children()}
	{/if}
</main>

<Footer />
