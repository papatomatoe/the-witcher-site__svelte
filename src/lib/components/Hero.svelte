<script lang="ts">
</script>

<section class="hero">
	<h2 class="v-h">Баннер</h2>
	<div class="page-container">
		<div class="hero__info">
			<p class="hero__title">Сериал Ведьмак</p>
			<p class="hero__text">
				Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей
				судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.
			</p>
			<a class="hero__link button button--contained" href="/watch">Смотреть сериал</a>
		</div>
	</div>
</section>

<style>
	.hero {
		height: 353px;
		padding: 56px 16px 16px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top right;
		position: relative;
		background-image: url('/uploads/hero@mob.avif');
	}

	.hero__info {
		width: 80%;
		max-width: 373px;
	}

	.hero__link {
		display: block;
		width: fit-content;
	}

	.hero__title {
		font: var(--text--H1-mob);
		margin-bottom: 5px;
	}

	.hero__text {
		font: var(--text--P-mob);
		margin-bottom: 32px;
	}

	@media (min-width: 720px) {
		.hero {
			padding-top: 60px;
			height: 360px;
			background-image: url('/uploads/hero@tab.avif');
		}

		.hero__info {
			max-width: 373px;
		}

		.hero__title {
			font: var(--text--H1-tab);
			margin-bottom: 16px;
		}

		.hero__text {
			font: var(--text--P-tab);
			margin-bottom: 32px;
		}
	}

	@media (min-width: 1260px) {
		.hero {
			height: 440px;
			padding-top: 104px;
			background-image: url('/uploads/hero@desk.avif');
		}

		.hero__info {
			max-width: 440px;
		}

		.hero__title {
			font: var(--text--H1-desk);
			margin-bottom: 24px;
		}

		.hero__text {
			font: var(--text--P-desk);
			margin-bottom: 40px;
		}
	}
</style>
