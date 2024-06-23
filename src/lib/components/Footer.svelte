<script lang="ts">
	import Facebook from '$lib/components/Facebook.svelte';
	import Instagram from '$lib/components/Instagram.svelte';
	import Vk from '$lib/components/VK.svelte';
	import Policy from '$lib/components/Policy.svelte';
	import type { SvelteComponent } from 'svelte';

	let modal = $state<SvelteComponent>();

	const handleOpenPolicyModal = () => {
		modal?.open();
	};
</script>

<Policy bind:this={modal} />

<footer class="footer">
	<div class="footer__container page-container">
		<a href="/" class="footer__logo">
			<img src="/uploads/logo@tab.avif" alt="Лого Ведьмак" width="130" height="44" />
		</a>

		<button class="footer__policy policy" type="button" onclick={handleOpenPolicyModal}>
			<span class="policy__text">Политика обработки персональных данных</span>
		</button>

		<ul class="footer__social social">
			<li class="social__item">
				<a class="social__link" href="/" aria-label="Инстаграм"><Instagram /></a>
			</li>
			<li class="social__item">
				<a class="social__link" href="/" aria-label="Фейсбук"><Facebook /></a>
			</li>
			<li class="social__item">
				<a class="social__link" href="/" aria-label="Ви Кей"><Vk /></a>
			</li>
		</ul>
	</div>
</footer>

<style>
	:global(.blocked) {
		overflow: hidden;
	}
	.footer {
		padding: 28px 16px;
		background-color: var(--color--grey-21);
	}

	.footer__container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		align-items: center;
	}

	.footer__logo {
		width: fit-content;
	}

	.footer__logo:hover,
	.footer__logo:focus-visible {
		opacity: 0.7;
	}

	.footer__logo:active {
		opacity: 0.5;
	}

	.footer__policy {
		grid-column: 1 / -1;
		grid-row: 2 /-1;
		justify-self: start;
		padding: 0;
		margin: 26px 0 0;
		border: none;
		font-family: var(--font--primary);
		background-color: transparent;
	}

	.policy__text {
		color: var(--color--grey-76);
		border-bottom: 1px solid var(--color--grey-76);
	}

	.footer__policy:hover .policy__text,
	.footer__policy:focus-visible .policy__text {
		color: var(--color--white);
	}

	.footer__policy:active {
		opacity: 0.7;
	}

	.social {
		justify-self: end;
		display: flex;
		gap: 12px;
	}

	.social__item {
		flex-shrink: 0;
	}

	.social__link {
		display: grid;
		place-items: center;
		border-radius: 50%;
		width: 32px;
		height: 32px;
		background-color: var(--color--white);
		--color--icon: var(--color--grey-21);
	}

	.social__link:hover,
	.social__link:focus-visible {
		--color--icon: var(--color--white);
		background-color: var(--color--red-100);
	}

	.social__link:active {
		opacity: 0.7;
	}

	@media (min-width: 720px) {
		.footer {
			padding: 42px 16px;
		}

		.footer__container {
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr;
		}

		.footer__policy {
			width: 180px;
			grid-column: 2/3;
			grid-row: 1 / -1;
			margin: 0;
			justify-self: center;
		}

		.social {
			grid-column: 3/ -1;
		}
	}
</style>
