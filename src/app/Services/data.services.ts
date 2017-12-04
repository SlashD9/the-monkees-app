import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    bookedDate: string[];

    constructor() {
        this.bookedDate = ['2017-12-23', '2017-12-24', '2017-12-25', '2018-01-10', '2018-01-20', '2018-02-18'];
    }

    getBookedDates() {
        return this.bookedDate;
    }
}
