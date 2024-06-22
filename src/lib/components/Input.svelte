<script lang="ts">
	import { imask } from '@imask/svelte';

	interface Props {
		mask?: string;
		name: string;
		label?: string;
		value?: string;
		error?: string;
		type?: 'text' | 'email' | 'phone';
		onchange?: (value: string) => void;
		clearError?: () => void;
	}

	let {
		name,
		mask,
		value = $bindable(),
		label,
		error = $bindable(),
		type = 'text',
		onchange,
		clearError
	}: Props = $props();

	let cleanValue = $state('');

	const handleInput = () => {
		error = '';
	};

	const accept = (e: CustomEvent) => {
		value = e.detail.value;
		cleanValue = e.detail.unmaskedValue;
	};
</script>

<div
	class="input"
	class:input--without-label={!label}
	class:input--with-value={value}
	class:input--with-error={error}
>
	<label class="input__container">
		{#if label}
			<p class="input__label">{label}</p>
		{/if}

		{#if mask}
			<input
				{type}
				class="input__field"
				bind:value
				oninput={handleInput}
				use:imask={{
					mask,
					lazy: false
				}}
				onaccept={accept}
			/>
			<input type="hidden" {name} bind:value={cleanValue} />
		{:else}
			<input {type} class="input__field" bind:value {name} oninput={handleInput} />
		{/if}
	</label>
	{#if error}
		<p class="input__error error-text">{error}</p>
	{/if}
</div>

<style>
	.input {
		position: relative;
		width: 100%;
		padding-bottom: 20px;
	}

	.input__container {
		position: relative;
		display: block;
		padding: 27px 20px 11px;
		background-color: var(--color--grey-18);
	}

	.input__label {
		position: absolute;
		top: 50%;
		left: 20px;
		translate: 0 -50%;
		font: var(--text--global);
		color: var(--color--grey-51);
	}

	.input__field {
		display: block;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		border: none;
		background-color: transparent;
		outline: 0;
		color: var(--color--white);
		font: var(--text--global);
	}

	.input--without-label .input__container {
		padding: 19px 20px;
	}

	.input__container:hover {
		background-color: var(--color--grey-20);
	}

	.input__container:has(.input__field:focus-visible) {
		background-color: var(--color--grey-20);
		outline: 1px solid var(--color--white);
	}

	.input__container:has(.input__field:focus-visible) .input__label,
	.input--with-value .input__label {
		top: 15px;
		font-size: 12px;
	}

	.input--with-error .input__container:has(.input__field:focus-visible),
	.input--with-error .input__container {
		background-color: var(--color--red-35);
	}

	.input--with-error .input__container .input__label {
		color: var(--color--red-9);
	}

	.input__error {
		position: absolute;
		top: calc(100% - 15px);
		left: 0;
	}
</style>
