<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import { device } from '$lib/store/environment';

	const photos = [
		{
			id: '1',
			image: 'uploads/photo-01',
			alt: 'Генри Кавилл в образе ведьмака держит операторскую хлопушку'
		},
		{
			id: '2',
			image: 'uploads/photo-02',
			alt: 'Съемочный процесс'
		},
		{
			id: '3',
			image: 'uploads/photo-03',
			alt: 'Съемочный процесс'
		},
		{
			id: '4',
			image: 'uploads/photo-04',
			alt: 'Аня Чалотра в образе Йеннифэр смотрит в видоискатель камеры на съемочной площадке'
		},
		{
			id: '5',
			image: 'uploads/photo-05',
			alt: 'Группа каскадеров позирует на фоне декораций фильма'
		},
		{
			id: '_2',
			image: 'uploads/photo-02',
			alt: 'Съемочный процесс'
		},
		{
			id: '_3',
			image: 'uploads/photo-03',
			alt: 'Съемочный процесс'
		},
		{
			id: '_4',
			image: 'uploads/photo-04',
			alt: 'Аня Чалотра в образе Йеннифэр смотрит в видоискатель камеры на съемочной площадке'
		},
		{
			id: '_5',
			image: 'uploads/photo-05',
			alt: 'Группа каскадеров позирует на фоне декораций фильма'
		}
	];

	let shownPhotosCount = $state(3);

	$effect(() => {
		shownPhotosCount = $device === 'mobile' ? 3 : 5;
	});

	const handleShowMorePhotos = () => {
		if (shownPhotosCount < photos.length) {
			shownPhotosCount += $device === 'mobile' ? 3 : 5;
		}
	};

	const shownPhotos = $derived(photos.slice(0, shownPhotosCount));
</script>

<section class="photos">
	<div class="page-container">
		<h2 class="photos__title">Кадры со съемок</h2>
		{#if photos?.length}
			<ul class="photos__list">
				{#each shownPhotos as photo (photo.id)}
					<li class="photos__item photo">
						<Image src={photo.image} alt={photo.alt} width="328" height="212" />
					</li>
				{/each}
			</ul>
			<button class="button photos__button" type="button" onclick={handleShowMorePhotos}>
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
