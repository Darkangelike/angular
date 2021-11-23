let zelda = [
	{
		name: "Ocarina of Time",
		genre: ["Adventure,"],
		publisher: "Nintento",
		PEGI: ["Children above 12 years old"],
		year: 1998,
		multiplayer: false,
		online: false,
		image: "images/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
	},
];

let props = zelda.map((obj) => {
	let nObj = {};
	nObj[obj.name] = obj.value;
	return nObj;
});

console.log(props);

// let reformattedArray = kvArray.map(obj => {
//    let rObj = {}
//    rObj[obj.key] = obj.value
//    return rObj

var parts = zelda.map((prop) => {
	let newProp = `<p>${prop.name}</p>`;
	return newProp;
});
var html = parts.join(``);

console.log(html);
