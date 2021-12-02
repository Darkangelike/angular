import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../models/Movie'

@Component({
  selector: 'app-display-movies-list',
  templateUrl: './display-movies-list.component.html',
  styleUrls: ['./display-movies-list.component.css']
})
export class DisplayMoviesListComponent implements OnInit {

  // @Output() deleteRequest = new EventEmitter();

 tabMovies : Movie[];

//  @Input() aMovie : Movie;

  constructor() { 
    this.tabMovies = [
      new Movie ("King Kong", new Date("2017/04/12"), ["Action", "Fantastic"], "Jordan Vogt-Roberts", 118),
      new Movie ("Last Night in Soho", new Date("2021/09/15"), ["Psychologic", "Thriller"], "N/A", 118),
      new Movie ("The Last Duel", new Date("2021/10/12"), ["Action", "Historical"], "NO idea", 118),
      new Movie ("Man from Earth", new Date("2012/05/15"), ["Fantastic"], "No idea either", 118),
      new Movie ("New Arrival", new Date("2018/05/23"), ["Sci-Fi", "Fantastic"], "Whatever", 118),
      new Movie ("Last Train to Busan", new Date("2016/01/12"), ["Horror", "Fantastic"], "Someone", 118)
      ]}

  ngOnInit(): void {
  }

  clickEvent() {
    console.log(this);
    

  }

}
