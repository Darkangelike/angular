"use script";

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
    , 
    {
        title: "Warning",
        artist: "Sunmi",
        image: "https://lh3.googleusercontent.com/l_AX0vaOv8cikdhZ--d6ev_aD2fyyv_a-BZbcb6HTFfC5ADI-hsTq00I7qXM5jy7cfxuCGOXDqpUzpTRkHGhG994XTiw1lwAFpw=w960-rj-l80-nu-e365",
        label: "JYP",
        year: 2017,
        genre: "Pop",
        duration: "19:59",
        tracks: ["Addict", "Siren", "Curve", "Black Pearl", "Gashina", "Heroine", "Secret Tape"]
    }
    , 
    {
        title: "Pink Tape",
        artist: "f(x)",
        image: "https://lh3.googleusercontent.com/QSiBISWHb1KRBRP0TbN81ZpSmGa4vyweECDARRGCxamPfp1lrm9gWuYFCUNvxOkx1Wg1iE6W2MIAfdoWfzEqA6ZZKMMzotyecqQ=w960-rj-l80-nu-e365",
        label: "SME",
        year: 2013,
        genre: "Pop",
        duration: "N/A",
        tracks: ["Rum Pum Pum", "Shadow", "Pretty Girl", "Kick", "Signal", "Step", "Goodbye Summer", "Airplane", "Toy", "No More", "Snapshot", "Ending Page"]
    }
    , 
    {
        title: "Verse#2",
        artist: "JJ Project",
        image: "https://lh3.googleusercontent.com/OApodA6-JyXE9-8PRGjS4KVRoQmnUzwA1b75tjCY5ak9TMSjTFAVrSz63mV8SuFjojJxbZPvrvboGWePjQmSJbO5Th6TwP4KuA=w960-rj-l80-nu-e365",
        label: "JYP",
        year: 2017,
        genre: "Pop",
        duration: "N/A",
        tracks: ["Coming Home", "On&On", "Icarus", "Don't Wanna Know", "Find You", "Fade Away"]
    }
    , 
    {
        title: "Canvas",
        artist: "Nu'est",
        image: "https://lh3.googleusercontent.com/ONogm7VhpD1SdVeHPgkOLXV5dy-49YIlEbaixFMo2vuxg5ppl7gKLcnUDDI-xzq6gnYWZrXVSCjU_3MQvnYbzT7UH2id8hO8SjQ=w960-rj-l80-nu-e365",
        label: "Pledis",
        year: 2016,
        genre: "Pop",
        duration: "17:08",
        tracks: ["Daybreak", "R.L.T.L", "Love Paint", "Thank You", "Look"]
    }
    , 
    {
        title: "/// (You, Clouds, Rain)",
        artist: "Heize",
        image: "https://lh3.googleusercontent.com/HDawgN2LzCmaHk9OjJOKfhuqxCidTXQn33hKI2by7fWt4JWlFkROOC3IrNwWokYS9FprfphLloZ-wHZV3xSS6KLrLY-VhDGkkw=w960-rj-l80-nu-e365",
        label: "CJ E&M Music",
        year: 2017,
        genre: "R'n'B",
        duration: "N/A",
        tracks: ["Don't Know You (널 너무 모르고)", "Dark Clouds (feat. Nafla)", "Raining with You", "You, Clouds, Rain (feat. Shin Yong-jae)","Star (저 별) (Rain Ver.)"
]
    }
]

// find will return the ENTIRE OBJECT
let found = albumList.find(album => album.year == "2015" && album.genre =="Pop")
// console.log(found);

// findIndex only returns ONE FOUND value
let recentYears = (album) => album.year >= 2015 && album.label == "JYP";
let index;
// console.log(albumList.findIndex(recentYears));

// filter creates a new array with items that pass the function verification given in parameters
let filteredList = albumList.filter(recentYears);
// console.log(filteredList.map(element => element.title + ` - ` + element.artist));

// function mock() {
//     console.log(this);
// }

// let prop = "prop";

// mock.call(prop)


function checkObj(obj, checkProp) {
  // Only change code below this line
  console.log(obj, checkProp);
  console.log(obj[checkProp]);
if (obj.hasOwnProperty(checkProp)) {
  return obj.checkProp
} else {
  return "Not Found"
}
  // Only change code above this line
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));

let jo