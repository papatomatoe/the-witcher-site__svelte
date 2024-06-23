<script lang="ts">
	import type { Snippet } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Contacts from '$lib/components/Contacts.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<Header bg="off" />

<main class="page-content">
	<div class="subscribe">
		<div class="subscribe__container page-container">
			{@render children()}

			<Contacts />
		</div>
	</div>
</main>

<style>
	.subscribe {
		padding: 43px 16px 56px;
	}

	@media (min-width: 720px) {
		.subscribe {
			padding: 34px 16px 56px;
		}
		.subscribe__container {
			display: grid;
			grid-template-columns: 320px 1fr;
			gap: 53px;
		}
	}

	@media (min-width: 1260px) {
		.subscribe {
			padding: 62px 0 88px;
		}
		.subscribe__container {
			display: grid;
			grid-template-columns: 486px 1fr;
			gap: 126px;
		}
	}
</style>
