import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = '';
  email = '';
  date = '';
  event = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.date);
    console.log(this.event);
  }
}
