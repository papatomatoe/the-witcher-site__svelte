<script lang="ts">
	import type { Snippet } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	interface Props {
		children: Snippet;
	}
	let { children }: Props = $props();
</script>

<Header>
	<a class="header__link button" href="/subscribe">Подключить подписку</a>
</Header>

<main class="page-content">
	{@render children()}
</main>

<style>
	.header__link {
		padding: 11px;
		padding-left: 21px;
		padding-right: 21px;
	}

	@media (min-width: 720px) {
		.header__link {
			padding-left: 27px;
			padding-right: 27px;
		}
	}
</style>
