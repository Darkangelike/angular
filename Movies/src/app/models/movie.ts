export class Movie {
    name: string;
    year: Date;
    genres: string[];
    director: string;
    duration: number;

    constructor(name: string, year: Date, genres: string[], director: string, duration: number) {
        this.name = name;
        this.year = year;
        this.genres = genres;
        this.director = director;
        this.duration = duration;
    }
}
