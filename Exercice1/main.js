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
        label: "Sony",
        year: 2016,
        genre: "pop",
        duration: "N/A",
        tracks: ["First Time", "Higher", "The One", "Fever", "Body Language", "Cry", "Store", "Roses"]
    }
]
const form = document.querySelector("#form");
const content = document.querySelector("#content")
const albumTitle = document.querySelector("#Title")
const albumArtist = document.querySelector("#Artist")
const albumPicture = document.querySelector("#Picture")
var scroll_to_form = document.getElementById('form');


/***************************************************
****************************************************
********************** EVENTS **********************
****************************************************
****************************************************/

    document.querySelector("#addButton").addEventListener("click", displayForm);
    document.querySelector("form").addEventListener("submit", addAlbum);


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
     scroll_to_form.scrollIntoView();
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
    if (document.querySelector("#Label").value.length == 0) {
        object.label = "N/A"
    } else {
        object.label =document.querySelector("#Label").value
    }

    if (document.querySelector("#Year").value.length == 0) {
        object.year = "N/A"
    } else {
        object.year =document.querySelector("#Year").value
    }

    if (document.querySelector("#Genre").value.length == 0) {
        object.genre = "N/A"
    } else {
        object.genre =document.querySelector("#Genre").value
    }

    if (form.classList.contains("edit")) {
        console.log(this);
    } else {
        albumList.push(object)
    }
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
    document.querySelector("#Title").value = albumList[i].title
    document.querySelector("#Artist").value = albumList[i].artist
    document.querySelector("#Picture").value = albumList[i].image
    document.querySelector("#Label").value = albumList[i].label
    document.querySelector("#Year").value = albumList[i].year
    document.querySelector("#Genre").value = albumList[i].genre
    // document.querySelector("#duration").value = albumList[i].duration
    scroll_to_form.scrollIntoView();
    console.log(albumList[i].title);
    form.classList.add("edit")
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


     displayAlbums();


// https://images.genius.com/ab2e5b1b69b740dea2fb7dfc27b776ca.1000x1000x1.jpg