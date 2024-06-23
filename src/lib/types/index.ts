export interface IActor {
	id: string;
	name: string;
	personage: string;
	description: string;
	image: string;
}

export interface IPhoto {
	id: string;
	image: string;
	alt: string;
}

export interface IMarker {
	id: string;
	coords: number[];
	title: string;
	address: string;
}
