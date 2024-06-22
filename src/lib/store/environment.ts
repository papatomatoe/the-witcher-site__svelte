import { readable, writable } from 'svelte/store';

export const device = writable<'mobile' | 'rest'>('mobile');

export const useMatchMedia = (media: string) => {
	if (typeof window !== 'undefined') return;

	return readable<boolean>(false, (set) => {
		const matchMedia = window.matchMedia(media);

		const handle = () => {
			set(matchMedia.matches);
		};

		window.addEventListener('change', handle);

		return () => {
			window.removeEventListener('change', handle);
		};
	});
};
