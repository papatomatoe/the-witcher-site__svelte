<script lang="ts">
	import { clickOutside } from '$lib/helpers/clickOutside';
	import Arrow from '$lib/components/Arrow.svelte';

	interface IOption {
		value: string;
		title: string;
	}
	interface Props {
		options?: IOption[];
		value?: IOption;
		onselect?: (value: IOption) => void;
		clearError?: () => void;
		name: string;
		label?: string;
		placeholder?: string;
		error?: string | null;
	}

	let {
		name,
		label,
		placeholder,
		options,
		value,
		error = $bindable(),
		onselect,
		clearError
	}: Props = $props();

	let selected = $state(value);
	let showOptions = $state(false);

	let fieldValue = $derived(selected?.value ?? '');

	const handleSelectOption = (option: IOption) => {
		error = '';
		selected = option;
		onselect && onselect(option);
		showOptions = false;
	};

	const handleToggleOptions = () => {
		clearError && clearError();
		showOptions = !showOptions;
	};
</script>

<div class="select">
	<div
		class="select__container"
		class:select__container--error={error}
		use:clickOutside={() => {
			showOptions = false;
		}}
	>
		{#if label}
			<p class="select__label">{label}</p>
		{/if}
		<button class="select__button" type="button" onclick={handleToggleOptions}>
			<p class="button__text">
				{#if selected?.title}
					{selected.title}
				{:else}
					<span class="select__placeholder">
						{placeholder ?? 'select...'}
					</span>
				{/if}
			</p>
			<p class="select__icon" class:select__icon--flip={showOptions}><Arrow /></p>
		</button>
		{#if options?.length && showOptions}
			<ul class="select__options">
				{#each options as option (option.value)}
					<li class="select__option option">
						<button
							class="select__button option__button"
							type="button"
							onclick={() => handleSelectOption(option)}
						>
							{option.title}
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	{#if error}
		<p class="select__error error-text">{error}</p>
	{/if}
</div>
<input type="hidden" {name} value={fieldValue} readonly />

<style>
	.select {
		position: relative;
		width: 100%;
		padding-bottom: 20px;
	}

	.select__container {
		width: 100%;
		position: relative;
		background-color: var(--color--grey-18);
	}

	.select__button {
		position: relative;
		display: block;
		width: 100%;
		margin: 0;
		padding: 16px 55px 16px 20px;
		border: none;
		background-color: transparent;
		display: block;
		color: var(--color--white);
		text-align: left;
		font-size: 16px;
		font-weight: 400;
		line-height: 1.5;
	}

	.button__text {
		text-wrap: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.select__placeholder {
		color: var(--color--grey-51);
	}

	.select__icon {
		--color--icon: var(--color--white);
		position: absolute;
		top: 50%;
		right: 20px;
		translate: 0 -50%;
		rotate: 180deg;
	}
	.select__icon--flip {
		rotate: 0deg;
	}

	.select__options {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		max-height: 400px;
		height: fit-content;
		overflow-y: auto;
		background-color: var(--color--grey-18);
		z-index: 1;
	}

	.select__error {
		position: absolute;
		top: calc(100% - 15px);
		left: 0;
	}

	.select__container--error {
		background-color: var(--color--red-35);
	}

	.select__container--error .button__text > * {
		color: var(--color--red-9);
	}

	.select__container--error .select__icon {
		--color--icon: var(--color--red-9);
	}
</style>
