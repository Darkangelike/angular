export class Person {
  name: string;
  surname: string;
  dob: Date;
  fullName: string;
  isMinor: boolean;

  constructor(name: string, surname: string, dob: Date) {
    this.name = name;
    this.surname = surname;
    this.dob = dob;
    this.fullName = `${name} ${surname}`;
    this.isMinor = this.checkMinorPerson();
  }

  checkMinorPerson() {
    return true;
  }
}
