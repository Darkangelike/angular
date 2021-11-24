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

//  CONST

const content = document.querySelector("#content");
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

// Not initialised

let gamesList = [];

// Initialised

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

let zelda = new Game(
	0,
	"Ocarina of Time",
	["Adventure"],
	"Nintendo",
	["Age 12 and older"],
	1998,
	"Solo game",
	false,
	"./images/The_Legend_of_Zelda_Ocarina_of_Time_Logo.png"
);

let phasmophobia = new Game(
	1,
	"Phasmophobia",
	["Horror"],
	"Kinetic Games",
	[PEGIlist.fear, PEGIlist.c18],
	2020,
	"Up to 4 players",
	true,
	"./images/jeu-steam-phasmophobia-early-access-cover.jpg"
);

let bustAMove = new Game(
	2,
	"Bust-a-Move",
	["Arcade"],
	"Taito",
	[PEGIlist.e],
	1994,
	"1 to 2 players",
	false,
	"./images/index.jpg"
);

let tetris = new Game(
	3,
	"tetris",
	["puzzle", "arcade"],
	"Electronic Arts",
	[PEGIlist.e],
	1984,
	"1 to 2 players",
	true,
	"./images/Tetris_NES_cover_art.jpg"
);

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

function displayOneItem(object: Game, containerID: string) {
	// DECLARATIONS
	let html: HTMLElement = document.createElement("li");
	let img: HTMLElement = document.createElement("img");
	let h2: HTMLElement = document.createElement("h2");
	let ul: HTMLElement = document.createElement("ul");

	// // Initialisation
	let targetContainer: HTMLElement = document.getElementById(
		containerID
	) as HTMLElement;
	img.setAttribute("src", `${object.image}`);
	img.setAttribute("data-id", `${object.id}`);
	h2.innerHTML = `${object.name}`;
	ul.setAttribute("class", `hide hover`);
	ul.setAttribute("id", `${object.id}`);

	// Event listener on click on the image, toggle on off the information ul
	img.addEventListener("click", function () {
		ul.classList.toggle("hide");
		ul.scrollIntoView();
	});

	// Initialising information in hidden ul
	ul.innerHTML = `<li>Genre: ${object.genre}</li>
	<li>Multiplayer : ${object.multiplayer}</li>
	<li>Online : ${object.online ? "Yes" : `No`}</li>
	<li>Year released : ${object.year}</li>
	<li>Publisher : ${object.publisher}</li>
	<li>PEGI : ${object.PEGI}</li>`;

	// Building the html
	html.appendChild(img);
	html.appendChild(h2);
	html.appendChild(ul);

	// Injecting all the html in the targetContainer previously specified as function argument
	targetContainer.appendChild(html);
}

/****************************************
 ****   FUNCTION DISPLAY ONE ITEM    *****
 *****************************************/

function displayList(list: Object[], targetContainerID: string) {
	// DECLARATIONS
	let article: HTMLDivElement = document.createElement("div");
	let img: HTMLDivElement = document.createElement("img");
	let ul: HTMLElement = document.createElement("ul");
	let li: HTMLElement = document.createElement("li");

	// // Initialisation
	// img.setAttribute("src", `${object.image}`);

	// li.appendChild(img);
	// ul.appendChild(li);
	// article.appendChild(ul);
	// document.querySelector("#content")!.insertAdjacentHTML = article;
}

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
