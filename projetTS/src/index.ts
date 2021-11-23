import "./css/normalize.css";
import "./css/base.css";
import "./css/style.css";

enum PEGIlist {
	e = "Everyone",
	c3 = "3 years old",
	c7 = "7 years old",
	c12 = "12 years old",
	c16 = "16 years old",
	c18 = "18 years old",
	language = "Bad language",
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
	PEGI: [PEGIlist.e, PEGIlist.c12],
	year: 1998,
	multiplayer: false,
	online: false,
	image: "images/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
};

let phasmophobia: Game = {
	name: "Phasmophobia",
	genre: ["Horror"],
	publisher: "Kinetic Games",
	PEGI: [PEGIlist.fear, PEGIlist.c18],
	year: 2020,
	multiplayer: true,
	online: true,
	image: "./images/jeu-steam-phasmophobia-early-access-cover.jpg",
};

let bustAMove: Game = {
	name: "Bust-a-Move",
	genre: ["Arcade"],
	publisher: "Taito",
	PEGI: [PEGIlist.e],
	year: 1994,
	multiplayer: true,
	online: false,
	image: "./images/index.jpg",
};

let tetris: Game = {
	name: "tetris",
	genre: ["puzzle", "arcade"],
	publisher: "Electronic Arts",
	PEGI: [PEGIlist.e],
	year: 1984,
	multiplayer: true,
	online: true,
	image: "./images/Tetris_NES_cover_art.jpg",
};

gamesList.push(zelda);

function displayOneItem(object: Object, targetContainerID: string) {
	let content: HTMLElement = document.getElementById(
		targetContainerID
	) as HTMLElement;

	// content.innerHTML =
}

// let p = document.createElement("p");
// p.innerText = "Mon beau paragraphe";
// document.getElementById("monBeauDiv").append(p);

// document
// 	.getElementById("monBeauDiv")
// 	.insertAdjacentHTML("beforeend", `<p>Mon beau paragraphe</p>`);

function displayList(list: Object[], targetContainerID: string) {}

function addOneItem(
	list: Object[],
	objectToAdd: Object,
	targetContainerID: string
) {}

function removeOneItem(
	list: Object[],
	indexToRemove: number,
	targetContainerID: string
) {}

function editOneItem(
	list: Object[],
	indexToEdit: number,
	targetContainerID: string
) {}
