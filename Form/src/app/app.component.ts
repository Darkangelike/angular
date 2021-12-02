import { Component } from '@angular/core';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
chaeyoung : Person;
mina : Person;

constructor() {
  this.chaeyoung = new Person ("Chaeyoung", "Son", new Date("1999/04/23")),
  this.mina = new Person ("Mina", "Myoui", new Date("1997/03/24"))
}


}
