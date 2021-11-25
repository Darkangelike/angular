function throwBottle() {
    console.log("A bottle was sent, now waiting..");
    return new Promise(function (resolve, reject) {
        var time = randInt(0, 5000);
        console.log(time);
        setTimeout(function () {
            time < 2500 ? resolve() : reject();
        }, time);
    });
}
throwBottle().then(function () { return console.log("I got an answer!"); }, function () { return console.log("5,000 years later... Still waiting..."); });
function randInt(min, max) {
    var newNumber = Math.floor(min + Math.random() * (max - min));
    return newNumber;
}
