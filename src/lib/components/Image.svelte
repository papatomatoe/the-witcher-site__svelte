<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		width?: string | number;
		height?: string | number;
	}
	let { src, alt, width, height }: Props = $props();
</script>

<picture>
	<source media="(min-width: 1260px)" srcset="{src}@desk.avif" />
	<source media="(min-width: 720px)" srcset="{src}@tab.avif" />
	<img src="{src}@mob.avif" {alt} {width} {height} />
</picture>

<style>
	picture {
		display: grid;
	}
	img {
		width: 100%;
	}
</style>
