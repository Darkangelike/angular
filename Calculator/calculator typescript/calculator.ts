"use strict";

// VARIABLES

let num1 = (document.querySelector("#n1") as HTMLInputElement).valueAsNumber;
let num2 = (document.querySelector("#n2") as HTMLInputElement).valueAsNumber;
let content = document.querySelector("#content") as HTMLElement;
let operator = (document.querySelector("#operation") as HTMLInputElement).value;

// function CALCULATE
// this: HTMLElement, ev: Event
function calculate(ev: Event, num1, num2) {
	event.preventDefault();
	let result: number;
	if (
		operator != "+" &&
		operator != "-" &&
		operator != "*" &&
		operator != "/"
	) {
		alert("Please type a correct operation sign.");
	} else {
		switch (operator) {
			case "+":
				result = num1 + num2;
				break;

			case "-":
				result = num1 - num2;
				break;

			case "*":
				result = num1 * num2;
				break;

			case "/":
				result = num1 / num2;
				break;
		}
		content.innerHTML = `${num1} ${operator} ${num2} = ${result}`;
	}
}

// function isEmptyString

function isEmptyString(string) {}

document.querySelector("form").addEventListener("submit", calculate);
