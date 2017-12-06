import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmailValidator } from '@angular/forms/src/directives/validators';
import { FormsModule, Validators } from '@angular/forms';
import { DataService } from '../../Services/data.services';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { setTimeout } from 'core-js/library/web/timers';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  i: number;
  bookedDate: string[];
  validation = '';
  successMSG = '';
  finish = true;
  bookingInfo = true;

  booking = {
    name: '',
    names: [],
    email: '',
    date: '',
    dates: [],
    event: '',
    location: '',
    locations: [],
    price: '0'
  };
  constructor(public dataService: DataService, private modalService: BsModalService) {
   }

   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
   }
   openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'second modal-lg' });
    }
    closeFirstModal() {
      this.modalRef.hide();
    }
    closeSecondModal() {
      this.modalRef2.hide();
      this.modalRef2 = null;
    }
    closeAllModal() {
      this.closeSecondModal();
      this.closeFirstModal();
    }
  ngOnInit() {
  }

  onSubmit({value, valid}) {
    if (valid) {
      for (const i in this.dataService.bookedDate) {
        if (this.booking.date === this.dataService.bookedDate[i]) {
          this.validation = 'Date not availible';
          this.successMSG = 'Please choose another date';
          this.finish = false;
          this.bookingInfo = false;
          return;
         }
      }
      this.validation = 'Success';
      this.successMSG = 'Thank you for your booking, We will contact you shortly with more details';
      this.finish = true;
      this.bookingInfo = true;

      switch (this.booking.event) {
        case 'Small Venue':
          this.booking.price = '1200';
          break;
        case 'Medium Venue':
          this.booking.price = '1500';
          break;
          default:
          this.booking.price = '';
      }

      this.booking.dates.push(this.booking.date);
      this.booking.locations.push(this.booking.location);
      this.booking.names.push(this.booking.name);
      console.log(this.booking.event);
    } else {
      this.validation = 'Form is not valid';
    }
    }

}
