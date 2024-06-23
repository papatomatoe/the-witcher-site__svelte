<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import { getPhotos } from '$lib/mock';
	import { device } from '$lib/store/environment';
	import type { IPhoto } from '$lib/types';

	interface Props {
		photos: IPhoto[];
	}

	let { photos }: Props = $props();

	let loading = $state(false);

	const handleShowMorePhotos = async () => {
		loading = true;
		try {
			const newPhotos = await getPhotos({
				qty: $device === 'mobile' ? 3 : 8,
				shift: photos.length
			});
			photos = [...photos, ...newPhotos];
		} catch (e) {
			console.error(e);
		} finally {
			loading = false;
		}
	};
</script>

<section class="photos">
	<div class="page-container">
		<h2 class="photos__title">Кадры со съемок</h2>
		{#if photos?.length}
			<ul class="photos__list">
				{#each photos as photo (photo.id)}
					<li class="photos__item photo">
						<Image src={photo.image} alt={photo.alt} width="328" height="212" />
					</li>
				{/each}
			</ul>
			<button
				class="button photos__button"
				type="button"
				onclick={handleShowMorePhotos}
				disabled={loading}
			>
				Показать еще
			</button>
		{/if}
	</div>
</section>

<style>
	.photos {
		padding: 64px 16px 16px;
	}

	.photos__title {
		font: var(--text--H2-mob);
	}

	.photos__list {
		padding: 24px 0;
		display: grid;
		gap: 16px;
	}

	.photos__button {
		width: 100%;
	}

	@media (min-width: 720px) {
		.photos__title {
			font: var(--text--H2-tab);
		}

		.photos__list {
			grid-template-columns: repeat(4, minmax(120px, 148px));
			grid-template-rows: repeat(2, 1fr);
		}

		.photo:first-of-type {
			grid-column: 1/ 3;
			grid-row: 1 /-1;
		}
	}

	@media (min-width: 1260px) {
		.photos {
			padding: 72px 0;
		}

		.photos__title {
			font: var(--text--H2-desk);
		}

		.photos__list {
			padding: 40px 0 32px;
			grid-template-columns: repeat(4, 282px);
			grid-template-rows: repeat(2, 282px);
		}

		.photo:first-of-type {
			grid-column: 1/ 3;
			grid-row: 1 /-1;
		}
	}
</style>
