"use strict";

let number1 = document.querySelector("#n1")
let number2 = document.querySelector("#n2")
let operation = document.querySelector("#operation")
let content = document.querySelector("#content")


function calculate (event) {
    event.preventDefault();
    let result;
    if (operation.value != "+" && operation.value != "-" && operation.value != "*" && operation.value != "/") {
        alert("Please type a correct operation sign.")
    } else if (isEmptyString(operation.value) && isEmptyString(number1.value) && isEmptyString(number2.value)) {
        alert("All inputs must be filled.")
    } else {
    switch (operation.value) {
        case "+" :
            result = parseInt(number1.value) + parseInt(number2.value)
            break;

        case "-" :
            result = parseInt(number1.value) - parseInt(number2.value)
            break;
        
        case "*" :
            result = parseInt(number1.value) * parseInt(number2.value)
            break;

        case "/" :
            result = parseInt(number1.value) / parseInt(number2.value)
            break;
    }
    
    content.innerHTML = `${number1.value} ${operation.value} ${number2.value} = ${result}`
}
}

 /*****************************************
 **** FUNCTION IS EMPTY STRING (TRIM) *****
 ******************************************/
 
 function isEmptyString(string) {
	let empty = false;
	let stringWithoutSpace = string.trim();
	if (stringWithoutSpace.length == 0) {
		empty = true;
	}	
	return empty;
 }

document.querySelector("form").addEventListener("submit", calculate)