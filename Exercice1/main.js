"use strict";

/***************************************************
****************************************************
******************** VARIABLES *********************
****************************************************
****************************************************/

let albumList = [
    {
        title: "Emotion Side B",
        artist: "Carly Rae Jepsen",
        image: "https://img.discogs.com/XNaGCW9iv9byhajHFRVhYguYxfk=/fit-in/600x612/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9075772-1474332335-9793.jpeg.jpg",
        year: 2016,
        tracks: ["First Time", "Higher", "The One", "Fever", "Body Language", "Cry", "Store", "Roses"]
    }
]
const form = document.querySelector("#form");
const content = document.querySelector("#content")
const albumTitle = document.querySelector("#Title")
const albumArtist = document.querySelector("#Artist")
const albumPicture = document.querySelector("#Picture")
var element_to_scroll_to = document.getElementById('form');

/***************************************************
****************************************************
******************** FUNCTIONS *********************
****************************************************
****************************************************/

 /*************************************
 ****   FUNCTION DISPLAY BUTTONS  *****
 **************************************/

 function displayButtons () {
    console.log("mouseover ok");
 };
 
 /*************************************
 ****    FUNCTION DISPLAY FORM    *****
 **************************************/

 function displayForm() {
     form.classList.toggle("hide");
     form.classList.toggle("display")
     element_to_scroll_to.scrollIntoView();
 };

 /*************************************
 ****     FUNCTION ADD ALBUM      *****
 **************************************/
function addAlbum(event) {
     event.preventDefault();
    let object = new Object();
    object.title = albumTitle.value;
    object.artist = albumArtist.value;
    if (albumPicture.value.length == 0) {
        object.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png"} else {
    object.image = albumPicture.value;
        }
    albumList.push(object)
    displayAlbums();
    form.classList.add("hide")
    // document.querySelector("form").reset();
    console.log("ok");
}

 /*************************************
 ****   FUNCTION DISPLAY ALBUMS   *****
 **************************************/

 function displayAlbums() {
     let html = "<ul>"
     let index = 0;
    albumList.forEach(album => {
        html += `<li><img data-index="${index}" src="${album.image}" alt="${album.title} cover picture"></img>
        <ul class="hide">
            <li><button data-index="${index}" type="submit" class="edit" value="edit">Edit</button></li>
            <li><button data-index="${index}" type="submit" class="delete" value="delete">Delete</button></li>
        </ul>
        <p><strong>${album.title}</strong><br>
        <em>${album.artist}</em></p></li>`;
        index++
    })
    html += "</ul>"
    content.innerHTML = html;
    let images = document.querySelectorAll("img");
    images.forEach(img => {
    img.addEventListener("mouseover", displayButtons);
    img.addEventListener("click", displayInfo);
});
    let buttonsEdit = document.querySelectorAll(`#content button[class="edit"]`)
    buttonsEdit.forEach(button => {
        button.addEventListener("click", editAlbum)
    })
    let buttonsDelete = document.querySelectorAll(`#content button[class="delete"]`)
    buttonsDelete.forEach(button => {
        button.addEventListener("click", deleteAlbum)
    })
 }
 
 /*************************************
 ****    FUNCTION DISPLAY INFO    *****
 **************************************/

 function displayInfo() {
     console.log("click ok");
 }

 
//  /*************************************
//  ****    FUNCTION FETCH INFO      *****
//  **************************************/

function fetchInfo (url) {
    
}


//  /*************************************
//  ****    FUNCTION EDIT ALBUM      *****
//  **************************************/

function editAlbum() {
    form.classList.remove("hide");
    let i = this.dataset.index;
    
    console.log(albumList[i].title);
}


//  /*************************************
//  ****    FUNCTION DELETE ALBUM    *****
//  **************************************/

function deleteAlbum() {
    albumList.splice(this.dataset.index, 1)
    displayAlbums();
}

/***************************************************
****************************************************
********************** CODE ************************
****************************************************
****************************************************/


document.addEventListener("DOMContentLoaded", function() {

    
/***************************************************
****************************************************
********************** EVENTS **********************
****************************************************
****************************************************/
    document.querySelector("#addButton").addEventListener("click", displayForm);
    document.querySelector("form").addEventListener("submit", addAlbum);


     displayAlbums();

})

// https://images.genius.com/ab2e5b1b69b740dea2fb7dfc27b776ca.1000x1000x1.jpg