<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import ArrowLeft from '$lib/components/ArrowLeft.svelte';
	import ArrowRight from '$lib/components/ArrowRight.svelte';
	import { clickOutside } from '$lib/helpers/clickOutside';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType } from 'embla-carousel';
	import type { IActor } from '$lib/types/index';

	interface Props {
		actors: IActor[];
	}

	let { actors }: Props = $props();

	let emblaApi = $state<EmblaCarouselType>();

	let progress = $state(0);
	let disabledPrevButton = $state(true);
	let disabledNextButton = $state(true);
	let selectedActorId = $state<string | null>(null);

	const onInit = (event: CustomEvent<EmblaCarouselType>) => {
		emblaApi = event.detail;
	};

	const checkButtonsEnabled = () => {
		if (!emblaApi) return;

		disabledPrevButton = !emblaApi.canScrollPrev();
		disabledNextButton = !emblaApi.canScrollNext();
	};

	const checkScrollAndButtons = () => {
		checkButtonsEnabled();
		handleScroll();
	};

	$effect(() => {
		if (!emblaApi) return;

		checkScrollAndButtons();

		emblaApi
			.on('reInit', checkScrollAndButtons)
			.on('scroll', checkScrollAndButtons)
			.on('slideFocus', checkScrollAndButtons)
			.on('select', checkButtonsEnabled);
	});

	const handleSelectActor = (id: string) => {
		selectedActorId = selectedActorId === id ? null : id;
	};

	const handleSelectPrev = () => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
		checkButtonsEnabled();
	};

	const handleSelectNextIndex = () => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
		checkButtonsEnabled();
	};

	const handleScroll = () => {
		if (!emblaApi) return;
		progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
	};
</script>

<section class="actors">
	<div class="actors__container container">
		<div class="container__box page-container">
			<h2 class="actors__title">Актерский состав</h2>
			{#if actors?.length}
				<div class="actors__buttons">
					<button
						class="actors__button"
						type="button"
						onclick={handleSelectPrev}
						disabled={disabledPrevButton}
						aria-label="перейти к предыдущему актеру"
					>
						<ArrowLeft />
					</button>
					<button
						class="actors__button"
						type="button"
						onclick={handleSelectNextIndex}
						disabled={disabledNextButton}
						aria-label="перейти к следующему актеру"
					>
						<ArrowRight />
					</button>
				</div>
				<progress class="actors__progress" value={progress}></progress>
			{/if}
		</div>
	</div>
	{#if actors?.length}
		<div class="embla" onemblaInit={onInit} use:emblaCarouselSvelte>
			<ul class="embla__container actors__list">
				{#each actors as actor (actor.id)}
					<li
						class="embla__slide actors__item actor"
						use:clickOutside={() => {
							selectedActorId = null;
						}}
					>
						<button class="actor__button" type="button" onclick={() => handleSelectActor(actor.id)}>
							<Image src={actor.image} alt="фото {actor.name}" width="216" height="280" />
							<div class="actor__info" class:actor__info--selected={selectedActorId === actor.id}>
								<p class="actor__pers">{actor.personage}</p>
								<h3 class="actor__name">{actor.name}</h3>
								<p class="actor__desc">{actor.description}</p>
							</div>
						</button>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</section>

<style>
	.actors__container {
		padding: 16px;
	}

	.container__box {
		position: relative;
	}

	.actors__title {
		padding-right: 65px;
		font: var(--text--H2-mob);
	}

	.actors__buttons {
		position: absolute;
		top: 4px;
		right: -5px;
		display: flex;
		gap: 12px;
	}

	.actors__button {
		width: 28px;
		height: 28px;
		padding: 0;
		margin: 0;
		border: none;
		background-color: transparent;
		--color--icon: var(--color--red-82);
	}

	.actors__button :global(svg) {
		width: 28px;
		height: 28px;
	}

	.actors__button:hover,
	.actors__button:focus-visible {
		--color--icon: var(--color--red-100);
		filter: drop-shadow(0 0 4px rgba(250, 30, 30, 0.5));
	}

	.actors__button:active {
		opacity: 0.7;
	}

	.actors__button:disabled {
		--color--icon: var(--color--grey-36);
		filter: none;
		opacity: 1;
		cursor: auto;
	}

	.embla {
		overflow: hidden;
		padding: 0 16px;
	}

	.actors__list {
		display: flex;
		gap: 24px;
	}

	.actor {
		position: relative;
		flex-shrink: 0;
		width: 216px;
	}

	.actor__button {
		display: block;
		padding: 0;
		margin: 0;
		border: none;
		background-color: transparent;
	}

	.actor__info {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 16px;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: end;
		color: var(--color--white);
	}

	.actor__name {
		font: var(--text--H4-mob);
	}

	.actor__pers {
		font: var(--text--H4b-mob);
	}

	.actor__desc {
		font: var(--text--P-mob);
		margin-top: auto;
		display: none;
	}

	.actor__info--selected {
		background: var(--linear-gradient--v-1);
	}

	.actor__info--selected .actor__desc {
		text-align: start;
		display: block;
	}

	progress[value] {
		--color: var(--color--red-82);
		--background: var(--color--grey-36);
		--border-radius: 2px;

		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: none;
		width: 100%;
		height: 2px;
		border-radius: var(--border-radius);
		background: var(--background);
	}
	progress[value]::-webkit-progress-bar {
		border-radius: var(--border-radius);
		background: var(--background);
	}
	progress[value]::-webkit-progress-value {
		border-radius: var(--border-radius);
		background: var(--color);
	}
	progress[value]::-moz-progress-bar {
		border-radius: var(--border-radius);
		background: var(--color);
	}

	@media (min-width: 720px) {
		.actors__container {
			padding: 64px 16px 32px;
		}

		.actors__title {
			font: var(--text--H2-tab);
			padding-right: 90px;
			padding-bottom: 10px;
		}

		.actors__buttons {
			gap: 24px;
			top: 7px;
			right: -8px;
		}

		.actors__button {
			width: 32px;
			height: 32px;
		}

		.actors__button :global(svg) {
			width: 32px;
			height: 32px;
		}

		.embla {
			padding-left: calc(calc(100% - 640px) / 2);
			padding-right: calc(calc(100% - 640px) / 2);
		}

		.actor {
			width: 256px;
		}

		.actor__pers {
			font: var(--text--H4b-tab);
		}

		.actor__name {
			font: var(--text--H4-tab);
		}

		.actor__desc {
			font: var(--text--P-tab);
		}
	}

	@media (min-width: 1260px) {
		.actors__container {
			padding: 72px 16px 32px;
		}

		.actors__title {
			font: var(--text--H2-desk);
		}

		.embla {
			padding-left: calc(calc(100% - 1200px) / 2);
			padding-right: calc(calc(100% - 1200px) / 2);
		}

		.actor {
			width: 282px;
		}

		.actor__info {
			padding: 24px 24px 32px;
		}

		.actor__pers {
			font: var(--text--H4b-desk);
		}

		.actor__name {
			font: var(--text--H4-desk);
		}

		.actor__desc {
			font: var(--text--P-desk);
		}
	}
</style>
