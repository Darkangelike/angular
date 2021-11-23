import "./css/normalize.css";
import "./css/base.css";
import "./css/style.css";

enum PEGIlist {
	everyone = "Everyone",
	class3 = "3 years old",
	class7 = "7 years old",
	class12 = "12 years old",
	class16 = "16 years old",
	class18 = "18 years old",
	badLanguage = "Bad language",
	discrimination = "Discrimination",
	drugs = "Drugs",
	fear = "Fear",
	gambling = "Gambling",
	sex = "Sex",
	violence = "Violence",
	ingamePurchases = "In-game Purchases",
}

type Game = {
	name: string;
	genre: string[];
	publisher: string;
	PEGI: string[];
	year: number;
	multiplayer: boolean;
	online: boolean;
	image: string;
};

let gamesList = [];

let zelda: Game = {
	name: "Ocarina of Time",
	genre: ["Adventure,"],
	publisher: "Nintento",
	PEGI: [PEGIlist.everyone, PEGIlist.class12],
	year: 1998,
	multiplayer: false,
	online: false,
	image: "images/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
};

gamesList.push(zelda);

const content: HTMLElement = document.getElementById("content") as HTMLElement;
content.innerHTML = "Hello World";
