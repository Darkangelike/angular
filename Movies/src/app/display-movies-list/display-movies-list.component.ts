import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../models/movie'

@Component({
  selector: 'app-display-movies-list',
  templateUrl: './display-movies-list.component.html',
  styleUrls: ['./display-movies-list.component.css']
})
export class DisplayMoviesListComponent implements OnInit {

  @Output() deleteRequest = new EventEmitter();

 @Input() public aMovie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent() {
    this.deleteRequest.emit()
    

  }

}
