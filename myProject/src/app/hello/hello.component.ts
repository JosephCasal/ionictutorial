import { Component, OnInit } from '@angular/core';
import { PEOPLE, Person } from '../person/person';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  // greeting: string;
  people = PEOPLE;
  personName: Person;

  constructor() {

   }

  //  log(event){
  //    console.log(event);
  //  }

  addPerson(personName) {
    this.people.push({name: personName})
  }

  ngOnInit() {
  }

}
