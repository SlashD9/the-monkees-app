import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isValid = (<HTMLInputElement>document.getElementById('isValid'));
  validation = '';
  booking = {
    name: '',
    names: [],
    email: '',
    date: '',
    dates: [],
    event: '',
    location: '',
    locations: []
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}) {
    if (valid) {
    console.log(value);
    this.booking.dates.push(this.booking.date);
    this.booking.locations.push(this.booking.location);
    this.booking.names.push(this.booking.name);
    } else {
      this.validation = 'Form is not valid';
    }
  }
}
