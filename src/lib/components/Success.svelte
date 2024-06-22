<script lang="ts">
</script>

<section class="success">
	<h2 class="success__title">Заявка отправлена!</h2>
	<p class="success__text">
		Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все
		детали заказа.
	</p>
	<a class="success__link button button--contained" href="/">Вернуться на главную</a>
</section>

<style>
	.success {
		padding-bottom: 32px;
	}
	.success__title {
		padding-bottom: 16px;
		font: var(--text--H1-mob);
	}

	.success__text {
		padding-bottom: 32px;
		font: var(--text--global);
	}
	.success__link {
		display: block;
		width: 100%;
	}

	@media (min-width: 720px) {
		.success {
			padding-top: 70px;
			padding-bottom: 0;
		}

		.success__title {
			font: var(--text--H1-tab);
			padding-bottom: 24px;
		}
		.success__link {
			width: 240px;
		}
	}

	@media (min-width: 1260px) {
		.success {
			padding-top: 90px;
		}

		.success__title {
			font: var(--text--H1-desk);
			padding-bottom: 24px;
		}

		.success__text {
			font: var(--text--H4-desk);
			padding-bottom: 40px;
		}
	}
</style>
