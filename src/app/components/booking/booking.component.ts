import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms/src/directives/validators';
import { FormsModule, Validators } from '@angular/forms';
import { DataService } from '../../Services/data.services';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  i: number;
  bookedDate: string[];
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
  constructor(public dataService: DataService) {
   }

  ngOnInit() {
  }

  onSubmit({value, valid}) {
    if (valid) {
      for (const i in this.dataService.bookedDate) {
        if (this.booking.date !== this.dataService.bookedDate[i]) {
          this.validation = 'Checking Date';
         } else {
          this.validation = 'Booked up for this Day, \n Please try a different Date...';
          return;
         }
      }
      this.validation = '';
      this.booking.dates.push(this.booking.date);
      this.booking.locations.push(this.booking.location);
      this.booking.names.push(this.booking.name);
    } else {
      this.validation = 'Form is not valid';
    }
    }

}
