<script lang="ts">
	let modal = $state<HTMLDialogElement>();
	let body = $state<HTMLBRElement>();

	export const open = () => {
		modal?.showModal();
		if (!body?.classList.contains('blocked')) {
			body?.classList.add('blocked');
		}
	};

	export const close = () => {
		modal?.close();

		if (body?.classList.contains('blocked')) {
			body?.classList.remove('blocked');
		}
	};
</script>

<svelte:body bind:this={body} />
<dialog class="modal" bind:this={modal}>
	<button type="button" class="modal__close" onclick={close} aria-label="закрыть модальное окно"
	></button>

	<article class="modal__content">
		<h2 class="modal__title">Обработка данных</h2>
		<section class="modal__section">
			<h3>1. Что регулирует настоящая политика конфиденциальности</h3>
			<p>
				Настоящая политика конфиденциальности (далее — Политика) действует в отношении всей
				информации, включая персональные данные в понимании применимого законодательства (далее —
				«Персональная информация»), которую ООО «Гросс маркет» и/или его аффилированные лица, в том
				числе входящие в одну группу с ООО «Гросс маркет» (далее — «Гросс маркет»), могут получитьо
				Вас в процессе использования Вами любых сайтов, программ, продуктов и/или сервисов Гросс
				маркет (далее вместе «Сервисы»), информацию о которых Гросс маркет может также получать
				Персональную информацию от своих партнеров (далее — «Партнеры»), сайты, программы, продукты
				или сервисы которых Вы используете (например, от рекламодателей Гросс маркет или службами
				такси). В таких случаях передача Персональной информации возможна только в случаях,
				установленных применимым законодательством, и осуществляется на основании специальных
				договоров между Гросс маркет и каждым из Партнеров.
			</p>
			<p>
				Пожалуйста, обратите внимание, что использование любого из Сайтов и/или Сервисов может
				регулироваться дополнительными условиями, которые могут вносить в настоящую Политику
				изменения и/или дополнения, и/или иметь специальные условия в отношении персональной
				информации, размещенные в соответствующих разделах документов для таких Сайтов /или
				Сервисов.
			</p>
		</section>
		<section>
			<h3>2. Кто обрабатывает информацию</h3>
			<p>
				Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная информация собирается
				и используется Яндексом, в том числе включая общество с ограниченной ответственностью «Гросс
				маркет», юридическое лицо, созданное по законодательству Российской Федерации и
				зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс
				маркет»), или его аффилированным лицом, предоставляющим соответствующий Сервис в иных
				юрисдикциях. С информацией о том, какое лицо предоставляет тот или иной Сервис, Вы можете
				ознакомиться в условиях использования соответствующего Сервиса.
			</p>
		</section>
		<section>
			<h3>3. Какова цель данной Политики</h3>
			<p>
				Защита Вашей Персональной информации и Вашей конфиденциальности чрезвычайно важны для Гросс
				маркета. Поэтому при использовании Вами Сайтов и Сервисов Гросс маркет защищает и
				обрабатывает Вашу Персональную информацию в строгом соответствии с применимым
				законодательством.
			</p>
		</section>
	</article>
</dialog>

<style>
	dialog:modal {
		max-width: 100%;
		max-height: 100%;
	}
	.modal {
		width: 100dvw;
		height: 100dvh;
		margin: 0;
		padding: 24px 16px;
		border: none;
	}

	.modal__close {
		position: absolute;
		width: 24px;
		height: 24px;
		padding: 0;
		margin: 0;
		top: 24px;
		right: 16px;
		background-color: transparent;
		border: none;
	}

	.modal__close::before,
	.modal__close::after {
		position: absolute;
		content: '';
		width: 2px;
		height: 25px;
		border-radius: 5px;
		background-color: var(--color--black);
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		rotate: 45deg;
	}

	.modal__close::after {
		rotate: 135deg;
	}

	.modal__title {
		font: var(--text--H3-mob);
		padding: 0 24px 30px 0;
	}

	.modal__content h3 {
		padding: 10px 0 24px;
		font-size: 18px;
		line-height: 1.5;
		font-weight: 500;
	}

	.modal__content p {
		padding-bottom: 20px;
		font-size: 18px;
		line-height: 1.5;
		font-weight: 400;
	}

	@media (min-width: 720px) {
		.modal {
			width: 90%;
			height: 80%;
			margin: 0;
			padding: 48px 40px;
			top: 50%;
			left: 50%;
			translate: -50% -50%;
		}

		.modal::backdrop {
			background-color: var(--color--black);
			opacity: 0.4;
		}

		.modal__close {
			top: 32px;
			right: 32px;
		}

		.modal__title {
			font: var(--text--H2-tab);
		}

		.modal__content h3 {
			font-size: 22px;
		}

		.modal__content p {
			font-size: 20px;
		}
	}

	@media (min-width: 1260px) {
		.modal {
			width: 1080px;
			padding: 56px 80px;
		}

		.modal__title {
			font: var(--text--H2-desk);
		}
	}
</style>
