import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms/src/directives/validators';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
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
    this.validation = 'Form is not valid';
    console.log(value);
    this.booking.dates.push(this.booking.date);
    this.booking.locations.push(this.booking.location);
    this.booking.names.push(this.booking.name);
    } else {
      this.validation = 'Form is not valid';
    }
  }

}
