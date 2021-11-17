"use strict";

let albumList = [
    {
        title: "Emotion Side B",
        artist: "Carly Rae Jepsen",
        image: "https://img.discogs.com/XNaGCW9iv9byhajHFRVhYguYxfk=/fit-in/600x612/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9075772-1474332335-9793.jpeg.jpg",
        label: "Sony",
        year: 2016,
        genre: "Pop",
        duration: "N/A",
        tracks: ["First Time", "Higher", "The One", "Fever", "Body Language", "Cry", "Store", "Roses"]
    }, 
    {
        title: "Reboot",
        artist: "Wonder Girls",
        image: "https://lh3.googleusercontent.com/coYPB2bJkQftAwk-9HxPF5kmMRyliqyuoAsggq5kZ5rwRecmU9BkiPTRupr1k0-oyvwRbqpcZA805Emr0Y-3tpvnJbORdMAxoDI=w960-rj-l80-nu-e365",
        label: "JYP",
        year: 2015,
        genre: "Pop",
        duration: "N/A",
        tracks: ["Baby Don't Play", "Candle", "I feel You", "Rewind", "Loved", "John Doe", "One Black Night", "Back"]
    }
]


var parts = albumList.map((prop) => { 
    let newProp = `<p>${prop.title}</p>`
    return newProp });
var html = parts.join(``)

console.log(html);

content.innerHtml = `<ul>` + html + `</ul>`