"use strict";
// VARIABLES
var num1 = document.querySelector("#n1").valueAsNumber;
var num2 = document.querySelector("#n2").valueAsNumber;
var content = document.querySelector("#content");
var operator = document.querySelector("#operation").value;
// function CALCULATE
// this: HTMLElement, ev: Event
function calculate(ev, num1, num2) {
    event.preventDefault();
    var result;
    if (operator != "+" &&
        operator != "-" &&
        operator != "*" &&
        operator != "/") {
        alert("Please type a correct operation sign.");
    }
    else {
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
        content.innerHTML = "".concat(num1, " ").concat(operator, " ").concat(num2, " = ").concat(result);
    }
}
// function isEmptyString
function isEmptyString(string) { }
document.querySelector("form").addEventListener("submit", calculate);
