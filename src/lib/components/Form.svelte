<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import { goto } from '$app/navigation';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import File from '$lib/components/File.svelte';
	import Input from '$lib/components/Input.svelte';
	import Select from '$lib/components/Select.svelte';
	import Textarea from '$lib/components/Textarea.svelte';
	import type { ActionData } from '../../routes/subscribe/$types';

	let { form }: { form: ActionData } = $props();
</script>

<section class="form-section">
	<form
		class="form"
		method="POST"
		use:enhance={() => {
			return async ({ result }) => {
				if (result.type === 'redirect') {
					goto(result.location);
				} else {
					await applyAction(result);
				}
			};
		}}
		enctype="multipart/form-data"
	>
		<h2 class="form__title">Оставьте заявку</h2>
		<div class="form__container">
			<Select
				name="city"
				placeholder="Выберете город"
				error={form?.errors?.city && form?.errors?.city[0]}
				options={[
					{ value: 'Москва', title: 'Москва' },
					{ value: 'Санкт-Петербург', title: 'Санкт-Петербург' },
					{ value: 'Казань', title: 'Казань' },
					{ value: 'Краснодар', title: 'Краснодар' },
					{ value: 'Ростов на дону', title: 'Ростов на дону' }
				]}
			/>
			<Input
				type="text"
				name="username"
				label="Имя"
				error={form?.errors?.username && form?.errors?.username[0]}
			/>
			<div class="form__fields">
				<Input
					type="email"
					name="email"
					label="E-mail"
					error={form?.errors?.email && form?.errors?.email[0]}
				/>
				<Input
					name="phone"
					mask="+7 (000) 000-00-00"
					error={form?.errors?.phone && form?.errors?.phone[0]}
				/>
			</div>
			<Textarea
				name="message"
				placeholder="Оставьте пометку к заказу"
				error={form?.errors?.message && form?.errors?.message[0]}
			/>
			<File
				name="file"
				placeholder="Прикрепите файл"
				error={form?.errors?.file && form?.errors?.file[0]}
			/>
			<Checkbox
				name="personalData"
				label="Даю согласие на обработку своих персональных данных"
				error={form?.errors?.personalData && form?.errors?.personalData[0]}
			/>
		</div>
		<button type="submit" class="button button--contained form__submit">Оставить заявку</button>
	</form>
</section>

<style>
	.form-section {
		padding-bottom: 20px;
	}
	.form__title {
		padding-bottom: 24px;
		font: var(--text--H2-mob);
	}
	.form__container {
		padding-bottom: 20px;
		display: grid;
		gap: 10px;
	}
	.form__submit {
		width: 100%;
	}

	.form__fields {
		display: grid;
		gap: 10px;
	}

	@media (min-width: 720px) {
		.form-section {
			padding: 0;
		}
		.form__title {
			padding-bottom: 36px;
			font: var(--text--H2-tab);
		}
	}
	@media (min-width: 1260px) {
		.form__title {
			padding-bottom: 48px;
			font: var(--text--H2-desk);
		}

		.form__container {
			gap: 12px;
		}

		.form__submit {
			width: 205px;
		}

		.form__fields {
			grid-template-columns: 1fr 1fr;
			gap: 24px;
		}
	}
</style>
