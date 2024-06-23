import { MOCK_ACTORS, MOCK_MARKERS, getPhotos } from '$lib/mock/index';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const photos = await getPhotos({
		qty: 5,
		shift: 0
	});
	return {
		actors: MOCK_ACTORS,
		markers: MOCK_MARKERS,
		photos
	};
};
