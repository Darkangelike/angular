export class Person {
  name: string;
  surname: string;
  dob: Date;
  fullName: string;

  constructor(name: string, surname: string, dob: Date) {
    this.name = name;
    this.surname = surname;
    this.dob = dob;
    this.fullName = `${name} ${surname}`;
  }
}
