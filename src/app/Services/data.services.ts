import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    bookedDate: any[];

    constructor() {
        this.bookedDate = [
            {
                date: '2017-12-23',
                location: 'Dublin, Ireland',
                venue: 'Three Arena',
                availability: 'Sold Out'
            },
            {
                date: '2017-12-24',
                location: 'Belfast, Ireland',
                venue: 'The SSE Arena',
                availability: 'Some Tickets Left'
            },
            {
                date: '2017-12-25',
                location: 'North Pole',
                venue: 'Santa\'s Grotto',
                availabilty: 'Available'
            },
            {
                date: '2018-01-10',
                location: 'London, England',
                venue: 'O2 Arena',
                availabilty: 'Some Tickets Left'
            },
            {
                date: '2018-01-20',
                location: 'Frankfurt, Germany',
                venue: 'Commerzbank Arena',
                availabilty: 'On Sale 01/01/2018'
            },
            {
                date: '2018-02-18',
                location: 'Amsterdam, Netherlands',
                venue: 'Amsterdam Arena',
                availabilty: 'On Sale 25/01/2018'
            }
        ];
    }

    getBookedDates() {
        return this.bookedDate;
    }
}
