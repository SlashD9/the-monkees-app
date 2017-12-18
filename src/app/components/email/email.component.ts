import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmailValidator } from '@angular/forms/src/directives/validators';
import { FormsModule, Validators } from '@angular/forms';
import { DataService } from '../../Services/data.services';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
    modalRef: BsModalRef;
    modalRef2: BsModalRef;
    validation = '';
    successMSG = '';
    finish = true;
    bookingInfo = true;
    booking = {
      name: '',
      names: [],
      email: ''
    };

    constructor(private modalService: BsModalService) {}

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    openModal2(template: TemplateRef<any>) {
      this.modalRef2 = this.modalService.show(template, { class: 'second' });
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

    onSubmit({value, valid}) {
      if (valid) {
        this.validation = 'Success';
        this.successMSG = 'Thank you for siging up to our news letter, We will contact you shortly with more details';
        this.finish = true;
        this.bookingInfo = true;
      }else {
        this.validation = 'Something went wrong...!';
        this.successMSG = 'Please try again';
        this.finish = true;
        this.bookingInfo = true;
      }
    }

  ngOnInit() {
  }


}
