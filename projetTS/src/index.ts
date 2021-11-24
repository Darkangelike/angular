/****************************************************
 ****************************************************
 ********************  IMPORTS  *********************
 ****************************************************
 ****************************************************/

import "./css/normalize.css";
import "./css/base.css";
import "./css/style.css";
import { Game } from "./game";

/****************************************************
 ****************************************************
 ******************** VARIABLES *********************
 ****************************************************
 ****************************************************/

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

// type Game = {
// 	name: string;
// 	genre: string[];
// 	publisher: string;
// 	PEGI: string[];
// 	year: number;
// 	multiplayer: string;
// 	online: string;
// 	image: string;
// };

let gamesList = [];

// let zelda: Game = {
// 	name: "Ocarina of Time",
// 	genre: ["Adventure,"],
// 	publisher: "Nintento",
// 	PEGI: [PEGIlist.e, PEGIlist.c12],
// 	year: 1998,
// 	multiplayer: "Solo game",
// 	online: "Local mode",
// 	image: "./images/The_Legend_of_Zelda_Ocarina_of_Time_Logo.png",
// };

let zelda = new Game(
	"Ocarina of Time",
	["Adventure"],
	"Nintendo",
	["Age 12 and older"],
	1998,
	"Solo game",
	"Local mode",
	"./images/The_Legend_of_Zelda_Ocarina_of_Time_Logo.png"
);

let phasmophobia: Game = {
	name: "Phasmophobia",
	genre: ["Horror"],
	publisher: "Kinetic Games",
	PEGI: [PEGIlist.fear, PEGIlist.c18],
	year: 2020,
	multiplayer: "Up to 4 players",
	online: "Online game mode only",
	image: "./images/jeu-steam-phasmophobia-early-access-cover.jpg",
};

let bustAMove: Game = {
	name: "Bust-a-Move",
	genre: ["Arcade"],
	publisher: "Taito",
	PEGI: [PEGIlist.e],
	year: 1994,
	multiplayer: "1 to 2 players",
	online: "Local mode",
	image: "./images/index.jpg",
};

let tetris: Game = {
	name: "tetris",
	genre: ["puzzle", "arcade"],
	publisher: "Electronic Arts",
	PEGI: [PEGIlist.e],
	year: 1984,
	multiplayer: "1 to 2 players",
	online: "Local and online mode",
	image: "./images/Tetris_NES_cover_art.jpg",
};

const form = document.querySelector("form");
const submit = document.querySelector("#submit");
const title = document.querySelector("#title");
const image = document.querySelector("#image");
const genre = document.querySelector("#genre");
const publisher = document.querySelector("#publisher");
const PEGI = document.querySelector("#PEGI");
const year = document.querySelector("#year");
const multi = document.querySelector("#multi");
const online = document.querySelector("#online");

/***************************************************
 ****************************************************
 ********************** EVENTS **********************
 ****************************************************
 ****************************************************/

document.querySelector("button")?.addEventListener("click", displayForm);
submit?.addEventListener("submit", addOneItem);

/****************************************************
 ****************************************************
 ******************** FUNCTIONS *********************
 ****************************************************
 ****************************************************/

/****************************************
 ****   FUNCTION DISPLAY ONE ITEM    *****
 *****************************************/

function displayOneItem(object: Game, targetContainerID: string) {
	let content: HTMLElement = document.getElementById(
		targetContainerID
	) as HTMLElement;
}

// let p = document.createElement("p");
// p.innerText = "Mon beau paragraphe";
// document.getElementById("monBeauDiv").append(p);

// document
// 	.getElementById("monBeauDiv")
// 	.insertAdjacentHTML("beforeend", `<p>Mon beau paragraphe</p>`);

/****************************************
 ****   FUNCTION DISPLAY ONE ITEM    *****
 *****************************************/

function displayList(list: Object[], targetContainerID: string) {}

/****************************************
 ****     FUNCTION ADD ONE ITEM      *****
 *****************************************/

function addOneItem() {}

/****************************************
 ****   FUNCTION REMOVE ONE ITEM    *****
 *****************************************/

function removeOneItem(
	list: Object[],
	indexToRemove: number,
	targetContainerID: string
) {}

/****************************************
 ****    FUNCTION EDIT ONE ITEM      *****
 *****************************************/

function editOneItem(
	list: Object[],
	indexToEdit: number,
	targetContainerID: string
) {}

/****************************************
 ****     FUNCTION DISPLAY FORM      *****
 *****************************************/

function displayForm() {
	form!.classList.toggle("hide");
	form!.scrollIntoView();
	form!.dataset.mode = "add";
}

/***************************************************
 ****************************************************
 ********************** CODE ************************
 ****************************************************
 ****************************************************/

displayOneItem(zelda, "content");
