// Creating a GAME class

class Game {
	name: string;
	genre: string[];
	publisher: string;
	PEGI: string[];
	year: number;
	multiplayer: string;
	online: string;
	image: string;

    constructor (aTitle : string, aGenre : string[], publisher : string, PEGI : string[], year : number, multiplayer : string, online : string, image : string) {
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

let zelda = new Game ("Ocarina of Time", ["Adventure"], "Nintendo", ["Age 12 and older", 1998, "Solo game", "Local mode", "./images/The_Legend_of_Zelda_Ocarina_of_Time_Logo.png")