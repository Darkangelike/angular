function throwBottle(): Promise<void> {
	console.log("A bottle was sent, now waiting..");

	return new Promise(function (resolve, reject) {
		let time: number = randInt(0, 5000);
		console.log(time);
		setTimeout(() => {
			time < 2500 ? resolve() : reject();
		}, time);
	});
}

throwBottle().then(
	() => console.log("I got an answer!"),
	() => console.log("5,000 years later... Still waiting...")
);

function randInt(min: number, max: number) {
	let newNumber: number = Math.floor(min + Math.random() * (max - min));
	return newNumber;
}
