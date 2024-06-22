<script lang="ts">
	import Check from '$lib/components/Check.svelte';
	interface Props {
		name: string;
		label: string;
		checked?: boolean;
		error?: string;
		clearError?: () => void;
	}

	let { name, label, checked = $bindable(true), error = $bindable(), clearError }: Props = $props();

	const handleChange = () => {
		clearError && clearError();
	};
</script>

<div class="checkbox" class:checkbox--with-error={error}>
	<label class="checkbox__container">
		<input
			class="checkbox__input v-h"
			type="checkbox"
			bind:checked
			{name}
			onchange={handleChange}
		/>
		<div class="checkbox__icon">
			<Check />
		</div>
		<p class="checkbox__label">{label}</p>
	</label>
	{#if error}
		<p class="checkbox__error error-text">{error}</p>
	{/if}
</div>

<style>
	.checkbox {
		position: relative;
		width: 100%;
		padding-bottom: 20px;
	}
	.checkbox__container {
		display: flex;
		align-items: center;
		gap: 24px;
		cursor: pointer;
	}

	.checkbox__icon {
		--color--icon: transparent;
		flex-shrink: 0;
		display: grid;
		place-items: center;
		width: 32px;
		height: 32px;
		background-color: var(--color--grey-23);
		border: 1px solid var(--color--grey-46);
	}

	.checkbox__input:checked + .checkbox__icon {
		--color--icon: var(--color--white);
	}

	.checkbox__label {
		width: fit-content;
		font: var(--text--global);
		line-height: 1.2;
	}
	.checkbox__error {
		position: absolute;
		top: calc(100% - 15px);
		left: 0;
	}

	.checkbox__container:has(.checkbox__input:focus-visible) {
		outline: 1px solid var(--color--white);
	}
	.checkbox__container:hover {
		opacity: 0.7;
	}

	.checkbox--with-error .checkbox__icon {
		background-color: #371d1d;
		border-color: #6e2727;
	}
</style>
