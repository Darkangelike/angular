"use strict";


/***************************************************
****************************************************
****************** FUNCTIONS INTEGER ***************
****************************************************
****************************************************/

/***********************************
 **** FUNCTIONS GET RANDOM INT *****
 ***********************************/

 /**
  * 
  * @param {int} min 
  * @param {int} max 
  * @returns a value between min and max
  */
function getRandomInt(min, max) {

    let number = min + Math.floor(Math.random() * (max - min));

    return number;
}


 /******************************
 **** FUNCTION REQUEST INT *****
 *******************************/
/**
 * 
 * @param {*} question to prompt ask to the user
 * @param {*} min int asked
 * @param {*} max int asked
 * @returns the int chosen by the user in between min and max
 */
function requestInt(question, min, max) {
    let int;
    do {
        int = parseInt(window.prompt(question));
    } while (isNaN(int) || int < min || int > max || int.length == 0);
    return int;
}


/***************************************************
****************************************************
****************** FUNCTIONS STRING ****************
****************************************************
****************************************************/

/*****************************
*** FUNCTION REQUEST STRING **
******************************/

/**
 * 
 * @param {string} question 
 * @returns a string chosen by the user
 */
function requestString(question) {
    item = window.prompt(question)
    return item;
}


 /****************************
 **** FUNCTION YES OR NO *****
 *****************************/

function yesOrNo (question) {
    let answer;
    do {
        answer = window.prompt(question).toLowerCase();
        console.log(answer);
    } while (answer != "no" && answer != "yes" && answer != "non" && answer != "oui" && answer != "y" && answer != "n" && answer != "o")
    if (answer == "yes" || answer == "y" || answer == "o" || answer == "oui") {
        answer = true
    } else {
        answer = false;
    }
    console.log("bool", answer);
    return answer;
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


/***************************************************
****************************************************
******************* FUNCTIONS HTML *****************
****************************************************
****************************************************/

 /*************************************
 ******* FUNCTION INSERT OPTIONS ******
 **************************************/

/**
 * 
 * @param {*} list name of the array which contains the data to be inserted
 * @param {*} targetTag the HTML target
 */
function insertListOptions(list, targetTag) {
    for (let i = 0; i < list.length; i++) {
    targetTag.innerHTML += `<option>${characters[i]}</option>`
    }
}


 /*******************************
 **** FUNCTION DISPLAY LIST *****
 ********************************/

 function displayList(list, target) {
     let html ="";
     list = loadData(list)
     console.log("before loop: ", list);
     list.forEach(element => {
         html += `<li>${element}</li>`
     });
     target.innerHTML = html;
 }



/***************************************************
****************************************************
******************* FUNCTIONS FORM *****************
****************************************************
****************************************************/


 /**********************************************
 ********* FUNCTION ERASE FORM VALUES **********
 ***********************************************/

 function eraseFormValues() {
     name.value = "";
     lvl.value = null;
     document.getElementById("description").value = "";
 }

 
/***************************************************
****************************************************
*************** FUNCTIONS LOCAL DATA ***************
****************************************************
****************************************************/
 
/*********************************************
 ********* FUNCTION LOAD LOCAL DATA **********
 *********************************************/

 function loadLocalData() {
    let list = localStorage.getItem("todolist");
    list = JSON.parse(list);
    if (list == null) list = [];
    return list
 }

 
 
 /****************************
 **** FUNCTION LOAD DATA *****
 *****************************/

 function loadData(listkey) {
    let list = JSON.parse(localStorage.getItem(listkey))
    if (list == null) list = [];
    return list;
 }


 
 /*********************************************
 **** FUNCTION SAVE LIST IN LOCAL STORAGE *****
 **********************************************/

 function saveData(list, keylist) {
     let jsonList = JSON.stringify(list)
     localStorage.setItem(keylist, jsonList)
 }

