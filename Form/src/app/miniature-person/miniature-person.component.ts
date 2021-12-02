import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-miniature-person',
  templateUrl: './miniature-person.component.html',
  styleUrls: ['./miniature-person.component.css'],
})
export class MiniaturePersonComponent implements OnInit {
  constructor() {}
  @Input() aPerson!: Person;

  ngOnInit(): void {}
}
