// Creating a GAME class

export class Game {
	name: string;
	genre: string[];
	publisher: string;
	PEGI: string[];
	year: number;
	multiplayer: string;
	online: string;
	image: string;

	constructor(
		aTitle: string,
		aGenre: string[],
		publisher: string,
		PEGI: string[],
		year: number,
		multiplayer: string,
		online: string,
		image: string
	) {
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
