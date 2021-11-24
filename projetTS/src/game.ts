// Creating a GAME class

export class Game {
	id: number;
	name: string;
	genre: string[];
	publisher: string;
	PEGI: string[];
	year: number;
	multiplayer: string;
	online: boolean;
	image: string;

	constructor(
		aNumber: number,
		aTitle: string,
		aGenre: string[],
		publisher: string,
		PEGI: string[],
		year: number,
		multiplayer: string,
		online: boolean,
		image: string
	) {
		this.id = aNumber;
		this.name = aTitle;
		this.genre = aGenre;
		this.publisher = publisher;
		this.PEGI = PEGI;
		this.year = year;
		this.multiplayer = multiplayer;
		this.online = online;
		this.image = image;
	}
}
