<script lang="ts">
	interface Props {
		name: string;
		placeholder?: string;
		value?: string;
		error?: string;
		clearError?: () => void;
	}

	let { name, placeholder, value = $bindable(), error = $bindable(), clearError }: Props = $props();

	const handleInput = () => {
		error = '';
		clearError && clearError();
	};
</script>

<label class="textarea" class:textarea--with-error={error}>
	<textarea class="textarea__field" {name} {placeholder} bind:value oninput={handleInput}
	></textarea>
	{#if error}
		<p class="textarea__error error-text">{error}</p>
	{/if}
</label>

<style>
	.textarea {
		position: relative;
		width: 100%;
		padding-bottom: 20px;
		min-height: 156px;
	}

	.textarea__field {
		display: block;
		padding: 16px 20px;
		width: 100%;
		height: 100%;
		background-color: var(--color--grey-18);
		border: 1px solid var(--color--grey-18);
		resize: vertical;
		color: var(--color--white);
		font: var(--text--global);
	}

	.textarea__field:hover {
		background-color: var(--color--grey-20);
	}

	.textarea__field::placeholder {
		font: var(--text--global);
	}

	.textarea__error {
		position: absolute;
		top: calc(100% - 15px);
		left: 0;
	}

	.textarea--with-error .textarea__field {
		background-color: var(--color--red-35);
		border-color: var(--color--red-35);
	}

	.textarea--with-error .textarea__field::placeholder {
		color: var(--color--red-9);
	}
</style>
