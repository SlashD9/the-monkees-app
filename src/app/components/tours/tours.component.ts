import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.services';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  bookedDate: any[] = this.dataService.bookedDate;
  date = this.bookedDate[0].date;


  constructor(public dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService.bookedDate[0].date);
  }

}
