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
let images = document.querySelectorAll("img");
const form = document.querySelector("#form");
const content = document.querySelector("#content")
const albumTitle = document.querySelector("#albumTitle")
const albumArtist = document.querySelector("#albumArtist")
const albumPicture = document.querySelector("#albumPicture")

/***************************************************
****************************************************
********************** EVENTS **********************
****************************************************
****************************************************/

images.forEach(img => {
    img.addEventListener("mouseover", displayButtons)
});

document.querySelector("#albumSubmit").addEventListener("click", addAlbum);



/***************************************************
****************************************************
******************** FUNCTIONS *********************
****************************************************
****************************************************/

 /*************************************
 ****   FUNCTION DISPLAY BUTTONS  *****
 **************************************/

 function displayButtons () {

 };
 
 /*************************************
 ****    FUNCTION DISPLAY FORM    *****
 **************************************/

 function displayForm() {
     form.classList.toggle("hide");
     console.log("ok");
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
    console.log(albumList);
    form.classList.add("hide")
}

 
 /*************************************
 ****   FUNCTION DISPLAY ALBUMS   *****
 **************************************/

 function displayAlbums() {
     let html = "<ul>"
    albumList.forEach(album => {
        html += `<li><img src="${album.image}" alt="${album.title} cover picture"></img>
        <p><strong>${album.title}</strong><br>
        <em>${album.artist}</em></p></li>`
    })
    html += "</ul>"
    content.innerHTML = html;
    console.log(html);
 }
 
 /*************************************
 **** FUNCTION  *****
 **************************************/

 
 /*************************************
 **** FUNCTION  *****
 **************************************/


/***************************************************
****************************************************
********************** CODE ************************
****************************************************
****************************************************/


document.addEventListener("DOMContentLoaded", function() {
    displayAlbums();
    document.querySelector("#addButton").addEventListener("click", displayForm);

})