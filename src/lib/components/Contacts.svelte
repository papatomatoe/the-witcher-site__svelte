<script lang="ts">
</script>

<section class="contacts">
	<h2 class="v-h">Контактная информация</h2>
	<div class="contacts__container">
		<address class="contacts__address address">
			<div class="address__item">
				<p class="address__label">Наша горячая линия</p>
				<a class="address__value" href="tel:88003823112">8 800 38 23 112</a>
			</div>
			<div class="address__item">
				<p class="address__label">Главный офис</p>
				<p class="address__value address__value--sm">г. Москва, Садовническая ул., 80</p>
			</div>
			<div class="address__item">
				<p class="address__label">Часы работы</p>
				<p class="address__value address__value--sm">Пн-Пт с 10:00 до 22:00</p>
			</div>
		</address>
	</div>
</section>

<style>
	.contacts {
		padding-top: 20px;
	}
	.contacts__address {
		display: grid;
		gap: 24px;
	}
	.address__label {
		margin-bottom: 4px;
		font: var(--text--global);
		color: var(--color--grey-64);
	}
	.address__value {
		width: 290px;
		font: var(--text--H2-mob);
		color: var(--color--white);
	}

	.address__value--sm {
		font: var(--text--H3-tab);
	}

	@media (min-width: 720px) {
		.contacts {
			padding-top: 70px;
		}
		.contacts__address {
			gap: 32px;
		}
		.address__label {
			margin-bottom: 8px;
		}
		.address__value {
			font: var(--text--H2-tab);
		}

		.address__value--sm {
			font: var(--text--H3-tab);
		}
	}

	@media (min-width: 1260px) {
		.contacts {
			padding-top: 90px;
		}
		.contacts__address {
			gap: 32px;
		}
		.address__value {
			font: var(--text--H3-desk);
		}

		.address__value--sm {
			width: 100%;
			font: var(--text--H3-tab);
		}
	}
</style>
