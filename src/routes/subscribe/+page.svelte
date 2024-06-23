<script lang="ts">
	import Form from '$lib/components/Form.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
	<title>Ведьмак | Заявка</title>
</svelte:head>

<h1 class="v-h">Страница оформления заявки</h1>

<Form {form} />
