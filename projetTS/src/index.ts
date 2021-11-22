import "./css/normalize.css";
import "./css/base.css";
import "./css/style.css";

enum PEGIlist {
	everyone = "Everyone",
	class3 = "3 years old",
	class7 = "7 years old",
	class12 = "12 years old",
	class16 = "16 years old",
	class18 = "18 years old",
	badLanguage = "Bad language",
	discrimination = "Discrimination",
	drugs = "Drugs",
	fear = "Fear",
	gambling = "Gambling",
	sex = "Sex",
	violence = "Violence",
	ingamePurchases = "In-game Purchases",
}

type VideoGame = {
	name: string;
	genre: string[];
	publisher: string;
	PEGI: string[];
	year: number;
	multiplayer: string;
	online: boolean;
	image: string;
};

// let zelda: VideoGame = {
// 	name: "Ocarina of Time",
// 	genre: [PEGIlist.everyone, PEGIlist.class12],
// };

console.log("Hello world");
