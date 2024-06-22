<script lang="ts">
	import Clip from '$lib/components/Clip.svelte';

	interface Props {
		name: string;
		placeholder?: string;
		error?: string;
		clearError?: () => void;
	}

	let { name, placeholder, error = $bindable(), clearError }: Props = $props();

	let fileName = $state();

	const handleChange = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		error = '';
		clearError && clearError();

		const files = e?.currentTarget?.files && e.currentTarget.files;

		if (!files || !files.length) return;

		const file = files[0];
		fileName = file.name;
	};
</script>

<div class="file" class:file--with-error={error}>
	<label class="file__container">
		{#if fileName}
			<p class="file__title">{fileName}</p>
		{:else if placeholder}
			<p class="file__placeholder">{placeholder}</p>
		{/if}
		<input class="file__input v-h" type="file" {name} onchange={handleChange} />
		<p class="file__icon"><Clip /></p>
	</label>
	{#if error}
		<p class="error-text file__error">{error}</p>
	{/if}
</div>

<style>
	.file {
		position: relative;
		width: 100%;
		padding-bottom: 20px;
	}

	.file__container {
		position: relative;
		display: block;
		padding: 16px 65px 16px 20px;
		width: 100%;
		height: 100%;
		background-color: var(--color--grey-18);
		color: var(--color--white);
		font: var(--text--global);
		cursor: pointer;
	}

	.file__container:has(.file__input:hover) {
		background-color: var(--color--grey-20);
	}

	.file__container:has(.file__input:focus-visible) {
		outline: 1px solid var(--color--white);
	}

	.file__placeholder {
		color: var(--color--grey-51);
		font: var(--text--global);
	}

	.file__icon {
		position: absolute;
		display: grid;
		place-items: center;
		top: 50%;
		right: 20px;
		--color--icon: var(--color--grey-51);
		translate: 0 -50%;
	}

	.file__error {
		position: absolute;
		top: calc(100% - 15px);
		left: 0;
	}

	.file--with-error .file__container {
		background-color: var(--color--red-35);
	}
	.file--with-error .file__placeholder {
		color: var(--color--red-9);
	}
	.file--with-error .file__icon {
		--color--icon: var(--color--red-9);
	}

	.file--with-error .file__container:has(.file__input:hover) {
		background-color: var(--color--red-35);
	}
</style>
