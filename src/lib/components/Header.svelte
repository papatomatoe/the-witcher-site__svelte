<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import type { Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
		bg?: 'on' | 'off';
	}
	let { children, bg = 'on' }: Props = $props();
</script>

<header class="header" class:header--transparent={bg === 'off'}>
	<nav class="header__nav page-container">
		<a class="header__logo" href="/">
			<Image src="/uploads/logo" alt="Логотип Ведьмак" width="106" height="36" />
		</a>
		{#if children}
			{@render children()}
		{/if}
	</nav>
</header>

<style>
	.header {
		padding: 16px 0.5em 16px 16px;
		background-color: var(--color--black);
		min-height: 80px;
		display: flex;
		align-items: center;
	}

	.header--transparent {
		background: transparent;
	}

	.header__nav {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.header__logo {
		display: block;
		width: 106px;
		padding: 2px 0;
	}

	.header__logo:hover,
	.header__logo:focus-visible {
		opacity: 0.7;
	}

	.header__logo:active {
		opacity: 0.5;
	}

	@media (min-width: 380px) {
		.header {
			padding: 16px;
		}
	}

	@media (min-width: 720px) {
		.header {
			padding: 12px 16px;
		}

		.header__nav {
			width: 640px;
		}

		.header__logo {
			width: 130px;
		}
	}

	@media (min-width: 1260px) {
		.header {
			padding: 20px 0;
		}

		.header__nav {
			width: 1200px;
		}
	}
</style>
