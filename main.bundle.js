webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Services/data.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
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
                availability: 'Available'
            },
            {
                date: '2018-01-10',
                location: 'London, England',
                venue: 'O2 Arena',
                availability: 'Some Tickets Left'
            },
            {
                date: '2018-01-20',
                location: 'Frankfurt, Germany',
                venue: 'Commerzbank Arena',
                availability: 'On Sale 01/01/2018'
            },
            {
                date: '2018-02-18',
                location: 'Amsterdam, Netherlands',
                venue: 'Amsterdam Arena',
                availability: 'On Sale 25/01/2018'
            }
        ];
    }
    DataService.prototype.getBookedDates = function () {
        return this.bookedDate;
    };
    DataService.prototype.getBookings = function (dateInput, locationInput, venueInput, availabilityInput) {
        this.bookedDate.push({
            date: dateInput,
            location: locationInput,
            venue: venueInput,
            availability: availabilityInput
        });
    };
    DataService.prototype.storeBookings = function () {
        if (localStorage.getItem('bookedDate') === null) {
            this.bookedDate = [];
        }
        else {
        }
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.services.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<br><br><br><br>\r\n<div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_band_band_component__ = __webpack_require__("../../../../../src/app/components/band/band.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_music_music_component__ = __webpack_require__("../../../../../src/app/components/music/music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_video_video_component__ = __webpack_require__("../../../../../src/app/components/video/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_photos_photos_component__ = __webpack_require__("../../../../../src/app/components/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_davy_davy_component__ = __webpack_require__("../../../../../src/app/components/davy/davy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_micky_micky_component__ = __webpack_require__("../../../../../src/app/components/micky/micky.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_michael_michael_component__ = __webpack_require__("../../../../../src/app/components/michael/michael.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_peter_peter_component__ = __webpack_require__("../../../../../src/app/components/peter/peter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_tours_tours_component__ = __webpack_require__("../../../../../src/app/components/tours/tours.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_booking_booking_component__ = __webpack_require__("../../../../../src/app/components/booking/booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Services_data_services__ = __webpack_require__("../../../../../src/app/Services/data.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_modal_bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap_positioning_positioning_service__ = __webpack_require__("../../../../ngx-bootstrap/positioning/positioning.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_email_email_component__ = __webpack_require__("../../../../../src/app/components/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_social_social_component__ = __webpack_require__("../../../../../src/app/components/social/social.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'band', component: __WEBPACK_IMPORTED_MODULE_9__components_band_band_component__["a" /* BandComponent */], pathMatch: 'full' },
    { path: 'video', component: __WEBPACK_IMPORTED_MODULE_11__components_video_video_component__["a" /* VideoComponent */], pathMatch: 'full' },
    { path: 'music', component: __WEBPACK_IMPORTED_MODULE_10__components_music_music_component__["a" /* MusicComponent */], pathMatch: 'full' },
    { path: 'photos', component: __WEBPACK_IMPORTED_MODULE_12__components_photos_photos_component__["a" /* PhotosComponent */], pathMatch: 'full' },
    { path: 'davy', component: __WEBPACK_IMPORTED_MODULE_13__components_davy_davy_component__["a" /* DavyComponent */], pathMatch: 'full' },
    { path: 'micky', component: __WEBPACK_IMPORTED_MODULE_14__components_micky_micky_component__["a" /* MickyComponent */], pathMatch: 'full' },
    { path: 'michael', component: __WEBPACK_IMPORTED_MODULE_15__components_michael_michael_component__["a" /* MichaelComponent */], pathMatch: 'full' },
    { path: 'peter', component: __WEBPACK_IMPORTED_MODULE_16__components_peter_peter_component__["a" /* PeterComponent */], pathMatch: 'full' },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__["a" /* ContactComponent */], pathMatch: 'full' },
    { path: 'tours', component: __WEBPACK_IMPORTED_MODULE_18__components_tours_tours_component__["a" /* ToursComponent */], pathMatch: 'full' },
    { path: 'booking', component: __WEBPACK_IMPORTED_MODULE_19__components_booking_booking_component__["a" /* BookingComponent */], pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_band_band_component__["a" /* BandComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_music_music_component__["a" /* MusicComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_video_video_component__["a" /* VideoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_photos_photos_component__["a" /* PhotosComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_davy_davy_component__["a" /* DavyComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_micky_micky_component__["a" /* MickyComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_michael_michael_component__["a" /* MichaelComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_peter_peter_component__["a" /* PeterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_tours_tours_component__["a" /* ToursComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_booking_booking_component__["a" /* BookingComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_email_email_component__["a" /* EmailComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_social_social_component__["a" /* SocialComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__["a" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_22_videogular2_core__["VgCoreModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__Services_data_services__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_modal_bs_modal_service__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */],
            __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap_positioning_positioning_service__["a" /* PositioningService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/band/band.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    font-family: \"Arial\", sans-serif;\r\n    font-weight: 700;\r\n}\r\n.margin-top {\r\n    margin-top: 5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/band/band.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n                <h1 class=\"text-danger text-center\">The Band</h1>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"row margin-top\">\r\n        <div class=\"col-3\">\r\n                <img  src=\"assets/images/band.jpg\" alt=\"Monkees Image\" style=\"width:80%\">\r\n        </div>\r\n\r\n        <div class=\"col-9\">\r\n            <p>The Monkees are an American rock and pop band originally active between 1965 and 1971, with subsequent reunion albums and tours in the decades that followed. They were formed in Los Angeles in 1965 by Bob Rafelson and Bert Schneider for the American television series The Monkees, which aired from 1966 to 1968. The musical acting quartet was composed of Americans Micky Dolenz, Michael Nesmith and Peter Tork and British stage and television actor and singer Davy Jones. The band's music was initially supervised by producer Don Kirshner, backed by the songwriting duo of Tommy Boyce and Bobby Hart.\r\n            </p>\r\n            <br>\r\n            <p>For the first few months of their initial five-year career as \"the Monkees\", the four actor-musicians were allowed only limited roles in the recording studio. This was due in part to the amount of time required to film the television series. Nonetheless, Nesmith did compose and produce some songs from the beginning, and Peter Tork contributed limited guitar work on the sessions produced by Nesmith. They eventually fought for and earned the right to collectively supervise all musical output under the band's name. The sitcom was canceled in 1968, but the band continued to record music through 1971.\r\n            </p>    \r\n            <br>\r\n            <p>A revival of interest in the television show came in 1986, which led to a series of reunion tours and new records. Until 2011, the group had reunited and toured several times, with varying degrees of success. Despite the sudden death of Davy Jones on February 29, 2012, the surviving members reunited for a tour in November–December 2012 and again in 2013 for a 24-date tour. As of December 2016, they continue to tour, with Dolenz and Tork providing the core of the band, assisted by several other professional musicians, for their 50th anniversary tour through the US, Australia, and New Zealand in 2016. Nesmith was able to free some time up to join them in the latter stages of the US tour.[9][10]\r\n            </p>    \r\n            <br> \r\n            <p>Dolenz described the Monkees as initially being \"a TV show about an imaginary band ... that wanted to be the Beatles, but that was never successful\". The actor-musicians became, ironically, one of the most successful bands of the 1960s. The Monkees have sold more than 75 million records worldwide and had international hits, including \"Last Train to Clarksville\", \"Pleasant Valley Sunday\", \"Daydream Believer\", and \"I'm a Believer\". They are reported to have outsold the Beatles and the Rolling Stones combined in 1967.\r\n            </p>    \r\n        \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row margin-top\">\r\n        <div class=\"col-3\">\r\n            <div class=\"text-center\">\r\n                <a class=\"nav-link text-danger\" href=\"#\" routerLink=\"/davy\">\r\n                    <img src=\"assets/images/DavyJones.png\" style=\"width:80%\">\r\n                    <h3>Davy Jones</h3>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n            <div class=\"text-center\">\r\n                <a class=\"nav-link text-danger\" href=\"#\" routerLink=\"/micky\">\r\n                    <img src=\"assets/images/MickyDolenz.png\" style=\"width:80%\">\r\n                    <h3>Micky Dolenz</h3>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n            <div class=\"text-center\">\r\n                <a class=\"nav-link text-danger\" href=\"#\" routerLink=\"/peter\">\r\n                    <img src=\"assets/images/PeterTork.png\" style=\"width:80%\">\r\n                    <h3>Peter Tork</h3>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n            <div class=\"text-center\">\r\n                <a class=\"nav-link text-danger\" href=\"#\" routerLink=\"/michael\">\r\n                    <img src=\"assets/images/MichaelNesmith.png\" style=\"width:80%\">\r\n                    <h3>Michael Nesmith</h3>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/band/band.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BandComponent = (function () {
    function BandComponent() {
    }
    BandComponent.prototype.ngOnInit = function () {
    };
    return BandComponent;
}());
BandComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-band',
        template: __webpack_require__("../../../../../src/app/components/band/band.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/band/band.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BandComponent);

//# sourceMappingURL=band.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/booking/booking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\r\n    font-size: 1.5em;\r\n}\r\n.jumbotron-margin-bottom {\r\n    margin-bottom: 300px;\r\n}\r\n.success {\r\n    margin: 0, 5px, 0, 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/booking/booking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h4>Book an event</h4>\r\n    <p>Have you got an event that you'd like us to attend</p>\r\n\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template); refreshBookedDates()\">Book Now</button>\r\n    \r\n   <ng-template #template>\r\n     <div class=\"modal-header\">\r\n       <h4 class=\"modal-title pull-left\">Booking</h4>\r\n       <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n         <span aria-hidden=\"true\">&times;</span>\r\n       </button>\r\n     </div>\r\n     <div class=\"jumbotron\">\r\n        <div class=\"col-lg-12 col-12 text-danger\">\r\n          <h1 class=\"text-center\">Booking Form</h1>\r\n          <hr>\r\n          <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n            <div class=\"form-group \">\r\n              <label>Name</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)] =\"booking.name\" name=\"name\" #bookingName=\"ngModel\" minlength=\"2\" required>\r\n              <div *ngIf=\"bookingName.errors?.required && bookingName.touched\" class=\"alert alert-danger\">Name is Required</div>\r\n              <div *ngIf=\"bookingName.errors?.minlength && bookingName.touched\" class=\"alert alert-danger\">Name is not valid</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Location of Event</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)] =\"booking.location\" name=\"location\" #bookingLocation=\"ngModel\" required>\r\n              <div *ngIf=\"bookingLocation.errors?.required && bookingLocation.touched\" class=\"alert alert-danger\">Location is Required</div>\r\n            </div>\r\n            \r\n            <!-- Adding new input Field -->\r\n            <div class=\"form-group\">\r\n                <label>Venue name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)] =\"booking.venue\" name=\"venue\" #bookingVenue=\"ngModel\" required>\r\n                <div *ngIf=\"bookingVenue.errors?.required && bookingVenue.touched\" class=\"alert alert-danger\">Venue is Required</div>\r\n              </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label>Email</label>\r\n              <input type=\"email\" class=\"form-control\" [(ngModel)] =\"booking.email\" name=\"email\" placeholder=\"you@example.com\" #bookingEmail=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n              <div *ngIf=\"bookingEmail.errors?.required && bookingEmail.touched\" class=\"alert alert-danger\">Email is Required</div>\r\n              <div  *ngIf=\"bookingEmail.errors && bookingEmail.errors.pattern\" class=\"alert alert-danger\">\r\n                  Please enter a valid Email Address\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Date</label>\r\n              <input type=\"date\" class=\"form-control\" [(ngModel)] =\"booking.date\" name=\"date\" #bookingDate=\"ngModel\" required>\r\n              <div *ngIf=\"bookingDate.errors?.required && bookingDate.touched\" class=\"alert alert-danger\">Date is Required</div>\r\n            </div>\r\n            <br>\r\n            <div class=\"form-group\">\r\n              <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Event Type</label>\r\n              <br>\r\n              <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" [(ngModel)] = \"booking.event\" name=\"event\" id=\"inlineFormCustomSelect\" #bookingEvent=\"ngModel\" required>\r\n                <option selected>Choose...</option>\r\n                <option value=\"Small Venue\">Small Venue 300 or less</option>\r\n                <option value=\"Medium Venue\">Medium Venue 1000 or less</option>\r\n                <option value=\"Stadium Venue\">Stadium Venue 1000 or more</option>\r\n                <option value=\"Festival\">Festival</option>\r\n                <option value=\"Wedding\">Wedding</option>\r\n              </select>\r\n              <div *ngIf=\"bookingEvent.errors?.required && bookingEvent.touched\" class=\"alert alert-danger\">Event is Required</div>\r\n            </div>\r\n            <br>\r\n            <input type=\"submit\" class=\"btn btn-success\" (click)=\"openModal2(templateNested)\" value=\"Submit\">\r\n            \r\n\r\n            <ng-template #templateNested>\r\n                <div class=\"modal-header\">\r\n                  <h4 class=\"modal-title pull-left\">Booking Information</h4>\r\n                  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef2.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <br>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <h1>{{ validation }}</h1>\r\n                  <p class=\"success\">{{ successMSG }}</p>\r\n                </div>\r\n                    <br><br>\r\n                    <div class=\"col-12 col-lg-12 text-center\" *ngIf=\"finish\">\r\n                      <a link=\"#\" routerLink=\"/contact\">\r\n                        <button *ngIf=\"modalRef\" type=\"button\" class=\"btn btn-danger\" (click)=\"closeAllModal(); clearInputs()\" >Finished</button>\r\n                      </a>\r\n                    </div>\r\n                  <br><br>\r\n              </ng-template>\r\n\r\n          </form>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    \r\n    \r\n   </ng-template>\r\n\r\n    \r\n\r\n  <br><br>"

/***/ }),

/***/ "../../../../../src/app/components/booking/booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_data_services__ = __webpack_require__("../../../../../src/app/Services/data.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingComponent = (function () {
    function BookingComponent(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.validation = '';
        this.successMSG = '';
        this.finish = true;
        this.bookingInfo = true;
        this.booking = {
            name: '',
            names: [],
            email: '',
            date: '',
            dates: [],
            event: '',
            location: '',
            locations: [],
            venue: '',
            price: '0'
        };
    }
    BookingComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    };
    BookingComponent.prototype.openModal2 = function (template) {
        this.modalRef2 = this.modalService.show(template, { class: 'second modal-lg' });
    };
    BookingComponent.prototype.closeFirstModal = function () {
        this.modalRef.hide();
    };
    BookingComponent.prototype.closeSecondModal = function () {
        this.modalRef2.hide();
        this.modalRef2 = null;
    };
    BookingComponent.prototype.closeAllModal = function () {
        this.closeSecondModal();
        this.closeFirstModal();
    };
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent.prototype.refreshBookedDates = function () {
        this.dataService.getBookedDates();
    };
    BookingComponent.prototype.clearInputs = function () {
        this.booking.date = '';
        this.booking.email = '';
        this.booking.event = '';
        this.booking.location = '';
        this.booking.name = '';
        this.booking.venue = '';
    };
    BookingComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            for (var i in this.dataService.bookedDate) {
                if (this.booking.date === this.dataService.bookedDate[i].date) {
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
                case 'Stadium Venue':
                    this.booking.price = '4000';
                    break;
                case 'Festival':
                    this.booking.price = '4500';
                    break;
                case 'Wedding':
                    this.booking.price = '1300';
                    break;
                default:
                    this.booking.price = '';
            }
            this.dataService.getBookings(this.booking.date, this.booking.location, this.booking.venue, 'Just Added');
        }
        else {
            this.validation = 'Form is not valid';
        }
    };
    return BookingComponent;
}());
BookingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-booking',
        template: __webpack_require__("../../../../../src/app/components/booking/booking.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/booking/booking.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_data_services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_data_services__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _b || Object])
], BookingComponent);

var _a, _b;
//# sourceMappingURL=booking.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1 class=\"text-center text-danger\">Contact us today...</h1>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-lg-6 text-center text-danger\">\r\n            <app-booking></app-booking>\r\n        </div>\r\n        <div class=\"col-12 col-lg-6 text-center text-danger\">\r\n            <app-email></app-email>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-lg-12 text-center text-danger\">\r\n            <app-social></app-social>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/davy/davy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    font-family: \"Arial\", sans-serif;\r\n    font-weight: 700;\r\n}\r\n.margin-top {\r\n    margin-top: 5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/davy/davy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"row margin-top\">\r\n        <div class=\"col-9\">\r\n            <p>From 1966 to 1971, Jones was a member of the Monkees, a pop-rock group formed expressly for a television show of the same name. With Screen Gems producing the series, Jones was shortlisted for auditions, as he was the only Monkee who was signed to a deal with the studio, but still had to meet producers Bob Rafelson's and Bert Schneider's standards.[14] Jones sang lead vocals on many of the Monkees' recordings, including \"I Wanna Be Free\" and \"Daydream Believer\".[14] The DVD release of the first season of the show contained commentary from the various bandmates. In Peter Tork's commentary, he stated that Jones was a good drummer and had the live performance lineups been based solely on playing ability, it should have been Tork on guitar, Mike Nesmith on bass, and Jones on drums, with Micky Dolenz taking the fronting role, rather than as it was done (with Nesmith on guitar, Tork on bass, and Dolenz on drums). Mostly playing tambourine or maracas, Jones filled in briefly for Tork on bass when he played keyboards.</p>\r\n            <br>\r\n            <p>The NBC television series the Monkees was popular, and remained in syndication. After the group disbanded in 1971, Jones reunited with Micky Dolenz as well as Monkees songwriters Tommy Boyce and Bobby Hart in 1974 as a short-lived group called Dolenz, Jones, Boyce and Hart.</p>\r\n            <br>\r\n            <p>A Monkees television show marathon (\"Pleasant Valley Sunday\") broadcast on 23 February 1986 by MTV resulted in a wave of Monkeemania not seen since the group's heyday. Jones reunited with Dolenz and Peter Tork from 1986 to 1989 to celebrate the band's renewed success and promote the 20th anniversary of the group. A new top 20 hit, \"That Was Then, This Is Now\" was released (though Jones did not perform on the song) as well as an album, Pool It!.</p>\r\n            <br>\r\n            <p>Monkees activity ceased until 1996 when Jones reunited with Dolenz, Tork and Michael Nesmith to celebrate the 30th anniversary of the band. The group released a new album entitled Justus, the first album since 1967's Headquarters that featured the band members performing all instrumental duties. It was the last time all four Monkees performed together.</p>\r\n            <br>\r\n            <p>In February 2011, Jones confirmed rumours of another Monkees reunion. \"There's even talk of putting the Monkees back together again in the next year or so for a U.S. and UK tour,\" he told Disney's Backstage Pass newsletter. \"You're always hearing all those great songs on the radio, in commercials, movies, almost everywhere.\"[15] The tour (Jones's last) came to fruition entitled, An Evening with The Monkees: The 45th Anniversary Tour.</p>\r\n            <br>\r\n            <p>Jones is the next closest member of the Monkees (to Micky Dolenz) who had worked with the band since its inception. The exceptions have been the new songs recorded in 1986 and since his untimely death</p>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n            <div class=\"text-center\">\r\n                <h1>Davy Jones</h1>\r\n                <img src=\"assets/images/DavyJones.png\" style=\"width:80%\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/davy/davy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DavyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DavyComponent = (function () {
    function DavyComponent() {
    }
    DavyComponent.prototype.ngOnInit = function () {
    };
    return DavyComponent;
}());
DavyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-davy',
        template: __webpack_require__("../../../../../src/app/components/davy/davy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/davy/davy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DavyComponent);

//# sourceMappingURL=davy.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/email/email.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4>Sign Up Today</h4>\n  <p>Stay up to date with all the latest from The Monkees</p>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Sign Up</button>\n \n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Sign Up - Form</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      <div class=\"form-group \">\n        <label>Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)] =\"booking.name\" name=\"name\" #bookingName=\"ngModel\" minlength=\"2\" required>\n        <div *ngIf=\"bookingName.errors?.required && bookingName.touched\" class=\"alert alert-danger\">Name is Required</div>\n        <div *ngIf=\"bookingName.errors?.minlength && bookingName.touched\" class=\"alert alert-danger\">Name is not valid</div>\n      </div>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"email\" class=\"form-control\" [(ngModel)] =\"booking.email\" name=\"email\" placeholder=\"you@example.com\" #bookingEmail=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n        <div *ngIf=\"bookingEmail.errors?.required && bookingEmail.touched\" class=\"alert alert-danger\">Email is Required</div>\n        <div  *ngIf=\"bookingEmail.errors && bookingEmail.errors.pattern\" class=\"alert alert-danger\">\n            Please enter a valid Email Address\n        </div>\n      </div>\n      <input type=\"submit\" class=\"btn btn-success\" (click)=\"openModal2(templateNested)\" value=\"Submit\">\n    </form>\n  </div>\n</ng-template>\n \n<ng-template #templateNested>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Sign Up - Confirmation</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef2.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <br>\n  </div>\n  <div class=\"text-center\">\n    <h1>{{ validation }}</h1>\n    <p class=\"success\">{{ successMSG }}</p>\n  </div>\n    <button *ngIf=\"modalRef\" type=\"button\" class=\"btn btn-danger\" (click)=\"closeAllModal()\">Close</button>\n</ng-template>\n "

/***/ }),

/***/ "../../../../../src/app/components/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailComponent = (function () {
    function EmailComponent(modalService) {
        this.modalService = modalService;
        this.validation = '';
        this.successMSG = '';
        this.finish = true;
        this.bookingInfo = true;
        this.booking = {
            name: '',
            names: [],
            email: ''
        };
    }
    EmailComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    EmailComponent.prototype.openModal2 = function (template) {
        this.modalRef2 = this.modalService.show(template, { class: 'second' });
    };
    EmailComponent.prototype.closeFirstModal = function () {
        this.modalRef.hide();
    };
    EmailComponent.prototype.closeSecondModal = function () {
        this.modalRef2.hide();
        this.modalRef2 = null;
    };
    EmailComponent.prototype.closeAllModal = function () {
        this.closeSecondModal();
        this.closeFirstModal();
    };
    EmailComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.validation = 'Success';
            this.successMSG = 'Thank you for siging up to our news letter, We will contact you shortly with more details';
            this.finish = true;
            this.bookingInfo = true;
        }
        else {
            this.validation = 'Something went wrong...!';
            this.successMSG = 'Please try again';
            this.finish = true;
            this.bookingInfo = true;
        }
    };
    EmailComponent.prototype.ngOnInit = function () {
    };
    return EmailComponent;
}());
EmailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-email',
        template: __webpack_require__("../../../../../src/app/components/email/email.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/email/email.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _a || Object])
], EmailComponent);

var _a;
//# sourceMappingURL=email.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-logo-shrink {\r\n    width: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-6\">\r\n        <div class=\"text-center\">\r\n            <img class=\"main-logo-shrink\" src=\"assets/images/MonkeesLogo.gif\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<br><br>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-3 col-12\">\r\n        <div class=\"text-center\">\r\n            <img src=\"assets/images/DavyJones.png\" style=\"width:80%\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-12\">\r\n            <div class=\"text-center\">\r\n                <img src=\"assets/images/MickyDolenz.png\" style=\"width:80%\">\r\n            </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-12\">\r\n            <div class=\"text-center\">\r\n                <img src=\"assets/images/PeterTork.png\" style=\"width:80%\">\r\n            </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-12\">\r\n            <div class=\"text-center\">\r\n                <img src=\"assets/images/MichaelNesmith.png\" style=\"width:80%\">\r\n            </div>\r\n    </div>\r\n    \r\n</div>\r\n<br><br>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"text-center\">\r\n         <img src=\"assets/images/bandPlaying.jpg\" style=\"width: 100%\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<br><br>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/michael/michael.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    font-family: \"Arial\", sans-serif;\r\n    font-weight: 700;\r\n}\r\n.margin-top {\r\n    margin-top: 5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/michael/michael.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"row margin-top\">\r\n        <div class=\"col-3\">\r\n            <div class=\"text-center\">\r\n                <h1>Michael Nesmith</h1>\r\n                <img src=\"assets/images/MichaelNesmith.png\" style=\"width:80%\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-9\">\r\n            <p>From 1965 to early 1970, Nesmith was a member of the television pop-rock band The Monkees, created for the television situation comedy of the same name. According to his May 2015 interview on Gilbert Gottfried's podcast, someone showed him a copy of the famous press advertisement asking for \"four insane boys\" so he applied for the job. Nesmith won his role largely by appearing blasé when he auditioned. He wore a wool hat to keep his hair out of his eyes, riding his motorcycle to the audition. Producers Bob Rafelson and Bert Schneider remembered \"Wool Hat\", and called Nesmith back.</p>\r\n            <br>\r\n            <p>Once he was cast, Screen Gems bought his songs so they could be used in the show. Many of the songs Nesmith wrote for The Monkees, such as \"The Girl I Knew Somewhere\", \"Mary, Mary\" and \"Listen to the Band\", became minor hits. One song he wrote, \"You Just May Be the One\", is in mixed meter, interspersing 5/4 bars into an otherwise 4/4 structure.</p>\r\n            <br>\r\n            <p>The Gretsch guitar company built a one-off natural finish 12-string electric guitar for Nesmith when he was performing with The Monkees (Gretsch had a promotional deal with the group).[11] He earlier played a customized Gretsch twelve-string, which had originally been a six-string model. Nesmith used this guitar for his appearances on the television series, as well as The Monkees' live appearances in 1966 and 1967. Beginning in 1968, Nesmith used a white six-string Gibson SG Custom for his live appearances with The Monkees. He would use that guitar in their motion picture Head for the live version of \"Circle Sky\", and also for the final original Monkees tour in 1969 with Davy Jones and Micky Dolenz. In a post on his Facebook page in 2011, Nesmith reported that both guitars were stolen in the early 1970s.</p>\r\n            <br>\r\n            <p>As with the other Monkees, Nesmith came to be frustrated by the manufactured image of the whole project. He was permitted to write and produce two songs per album, and his music was frequently featured in episodes of the series. Nesmith was the most publicly vocal Monkee about the band's prefabricated image.</p>\r\n            <br>\r\n            <p>The Monkees succeeded in ousting supervisor Don Kirshner (with Nesmith punching a hole in a wall to make a point with Kirshner and attorney Herb Moelis) and took control of their records and song choices, but they worked as a four-man group on only one album, 1967's Headquarters. The band never overcame the credibility problems they faced when word spread that they had not played on their first records; Nesmith instigated this when he called the band's first non-studio press conference and called More of The Monkees \"probably the worst record in the history of the world\". However, their singles and albums continued to sell well, until the disastrous release of the movie Head.</p>\r\n            <br>\r\n            <p>Nesmith's last contractual Monkees commitment was a commercial for Kool-Aid and Nerf balls, in April 1970 (fittingly, the spot ends with Nesmith frowning and saying, \"Enerf's enerf!\"). With the band's fortunes continuing to fall, Nesmith asked to be released from his contract, and had to pay a default: \"I had three years left... at $150,000 a year\", which he had to pay back. He continued to feel the financial bite for years afterward until his inheritance from his mother's Liquid Paper fortune in 1980 eased those concerns. In a 1980 interview with Playboy, he said of that time: \"I had to start telling little tales to the tax man while they were putting tags on the furniture.\" While Nesmith had continued to produce his compositions with the Monkees, he withheld many of the songs from the final Monkees albums, only to release them on his post-Monkees solo records.</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/michael/michael.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MichaelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MichaelComponent = (function () {
    function MichaelComponent() {
    }
    MichaelComponent.prototype.ngOnInit = function () {
    };
    return MichaelComponent;
}());
MichaelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-michael',
        template: __webpack_require__("../../../../../src/app/components/michael/michael.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/michael/michael.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MichaelComponent);

//# sourceMappingURL=michael.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/micky/micky.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    font-family: \"Arial\", sans-serif;\r\n    font-weight: 700;\r\n}\r\n.margin-top {\r\n    margin-top: 5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/micky/micky.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"row margin-top\">\r\n        <div class=\"col-3\">\r\n            <div class=\"text-center\">\r\n                <h1>Micky Dolenz</h1>\r\n                <img src=\"assets/images/MickyDolenz.png\" style=\"width:80%\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-9\">\r\n            <p>In 1965, Dolenz was cast in the television sitcom The Monkees and became the drummer and a lead vocalist in the band created for the show. He was not actually a drummer and needed lessons even to be able to mime credibly, but eventually was taught how to play properly. By the time The Monkees went on tour in late 1966, Dolenz was competent enough to play the drums himself.[3] (He learned to play right-handed and left-footed because of a leg disease called Perthes making his right leg weaker.)</p>\r\n            <br>\r\n            <p>Tommy Boyce and Bobby Hart, writers of many of The Monkees' songs, observed quickly that when brought into the studio together, the four actors would try to make each other laugh. Because of this, the writers would often bring in each singer individually. The antics escalated until one time Micky poured a cup of coke on Don Kirshner's head; at the time, Dolenz did not know Kirshner on sight.</p>\r\n            <br>\r\n            <p>According to Mike Nesmith, it was Dolenz's voice that made The Monkees' sound distinctive,[4] and during tension-filled times Nesmith and Peter Tork voluntarily turned over lead vocal duties to Dolenz on their own compositions.</p>\r\n            <br>\r\n            <p>Dolenz wrote a few of the band's self-penned songs, most prominent being \"Randy Scouse Git\" from the album Headquarters. He provided the lead vocals for such hits as \"Last Train to Clarksville\", \"Take a Giant Step\" and \"I'm a Believer\". Toward the end of the series' hectic two-year run, Dolenz directed and co-wrote the show's final episode</p>\r\n            <br>\r\n            <p>Dolenz purchased one of the first 25 Moog synthesizers, the third Moog synthesizer commercially sold. (The first two belonged to Wendy Carlos and Buck Owens.) His performance on The Monkees song \"Daily Nightly\" (written by Michael Nesmith) from the LP Pisces, Aquarius, Capricorn & Jones Ltd. was one of the first uses of the synthesizer on a rock recording. He eventually sold his instrument to Bobby Sherman.</p>\r\n            <br>\r\n            <p>He is the only member of The Monkees who has been with the band continuously since its inception.</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/micky/micky.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MickyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MickyComponent = (function () {
    function MickyComponent() {
    }
    MickyComponent.prototype.ngOnInit = function () {
    };
    return MickyComponent;
}());
MickyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-micky',
        template: __webpack_require__("../../../../../src/app/components/micky/micky.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/micky/micky.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MickyComponent);

//# sourceMappingURL=micky.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/music/music.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player-space {\r\n    margin-top: 60px;\r\n}\r\n.img-player-cover {\r\n    width:80%;\r\n    height:80%;\r\n}\r\n.audio-controls-size {\r\n    width:100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/music/music.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-danger\">\r\n  <h1 class=\"text-center\">Music</h1>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-sm-12 col-md-12 text-center player-space\">\r\n      <img class=\"img-player-cover\" src=\"assets/images/LastTrainToClarksville.jpg\">\r\n      <audio class=\"audio-controls-size\" controls>\r\n          <source src=\"assets/audio/Clarksville.mp3\" type=\"audio/mpeg\">\r\n        Your browser does not support the audio element.\r\n      </audio>\r\n      <h4>Clarksville</h4>\r\n    </div>\r\n    <div class=\"col-lg-6 col-sm-12 col-md-12 text-center player-space\">\r\n        <img class=\"img-player-cover\" src=\"assets/images/DayDreamBeliever.jpg\">\r\n        <audio class=\"audio-controls-size\" controls>\r\n            <source src=\"assets/audio/DaydreamBeliever.mp3\" type=\"audio/mpeg\">\r\n          Your browser does not support the audio element.\r\n        </audio>\r\n        <h4>Day Dream Believer</h4>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-sm-12 col-md-12 text-center player-space\">\r\n      <img class=\"img-player-cover\" src=\"assets/images/ImABeliever.jpg\">\r\n      <audio class=\"audio-controls-size\" controls>\r\n          <source src=\"assets/audio/ImABeliever.mp3\" type=\"audio/mpeg\">\r\n        Your browser does not support the audio element.\r\n      </audio>\r\n      <h4>Im a Believer</h4>\r\n  </div>\r\n  <div class=\"col-lg-6 col-sm-12 col-md-12 text-center player-space\">\r\n        <img class=\"img-player-cover\" src=\"assets/images/SteppingStone.jpg\">\r\n        <audio class=\"audio-controls-size\" controls>\r\n            <source src=\"assets/audio/SteppingStone.mp3\" type=\"audio/mpeg\">\r\n          Your browser does not support the audio element.\r\n        </audio>\r\n        <h4>Stepping Stone</h4>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/music/music.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicComponent = (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    return MusicComponent;
}());
MusicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-music',
        template: __webpack_require__("../../../../../src/app/components/music/music.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/music/music.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MusicComponent);

//# sourceMappingURL=music.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-text {\r\n    font-size: 1.4em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n      <div class=\"container\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/images/MonkeesLogo.gif\" style=\"width: 100px\"></a>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n          <ul data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"class=\"nav navbar-nav ml-auto nav-text \">\r\n            <li class=\"nav-item \">\r\n              <a class=\"nav-link text-danger\" href=\"#\" data-toggle=\"collapse\" routerLink=\"/\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link text-danger\" href=\"#\" routerLink=\"/band\">Band</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link text-danger\" href=\"#\" routerLink=\"/music\">Music</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link text-danger\" href=\"#\" routerLink=\"/video\">Video</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link text-danger\" href=\"#\" routerLink=\"/photos\">Photos</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link text-danger\" href=\"#\" routerLink=\"/tours\">Tours</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link text-danger\" href=\"#\" routerLink=\"/contact\">Contact</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/peter/peter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    font-family: \"Arial\", sans-serif;\r\n    font-weight: 700;\r\n}\r\n.margin-top {\r\n    margin-top: 5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/peter/peter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"row margin-top\">\r\n        <div class=\"col-9\">\r\n            <p>Stephen Stills had auditioned for the new television series about four pop-rock musicians but was turned down because the show's producers felt his hair and teeth would not photograph well on camera.[10] They asked Stills if he knew of someone with a similar \"open, Nordic look,\" and Stills suggested Tork audition for the part.[11] Tork got the job and became one of the four members of the Monkees, a fictitious pop band in the mid-1960s, created for a television sitcom written about the fictitious band. Tork was the oldest member of the group.</p>\r\n            <br>\r\n            <p>Tork was a proficient musician, and though the group was not allowed to play their own instruments on their first two albums, he was an exception, playing what he described as \"third chair guitar\" on Mike Nesmith's song, \"Papa Gene's Blues,\" from their first album. He subsequently played keyboards, bass guitar, banjo, harpsichord, and other instruments on their recordings. He also co-wrote, along with Joey Richards, the closing theme song of the second season of The Monkees, \"For Pete's Sake\". On the television show, he was relegated to playing the \"lovable dummy,\" a persona Tork had developed as a folk singer in New York's Greenwich Village.[12] The DVD release of the first season of the show contained commentary from the various bandmates. In it, Nesmith stated that Tork was better at playing guitar than bass. In Tork's commentary, he stated that Jones was a good drummer and had the live performance lineups been based solely on playing ability, it should have been Tork on guitar, Nesmith on bass, and Jones on drums, with Dolenz taking the fronting role, rather than as it was done (with Nesmith on guitar, Tork on bass, and Dolenz on drums). Jones filled in briefly for Tork on bass when he played keyboards.</p>\r\n            <br>\r\n            <p>Tork was a proficient musician, and though the group was not allowed to play their own instruments on their first two albums, he was an exception, playing what he described as \"third chair guitar\" on Mike Nesmith's song, \"Papa Gene's Blues,\" from their first album. He subsequently played keyboards, bass guitar, banjo, harpsichord, and other instruments on their recordings. He also co-wrote, along with Joey Richards, the closing theme song of the second season of The Monkees, \"For Pete's Sake\". On the television show, he was relegated to playing the \"lovable dummy,\" a persona Tork had developed as a folk singer in New York's Greenwich Village.[12] The DVD release of the first season of the show contained commentary from the various bandmates. In it, Nesmith stated that Tork was better at playing guitar than bass. In Tork's commentary, he stated that Jones was a good drummer and had the live performance lineups been based solely on playing ability, it should have been Tork on guitar, Nesmith on bass, and Jones on drums, with Dolenz taking the fronting role, rather than as it was done (with Nesmith on guitar, Tork on bass, and Dolenz on drums). Jones filled in briefly for Tork on bass when he played keyboards.</p>\r\n            <br>\r\n            <p>Recording and producing as a group was Tork's major interest, and he hoped that the four members would continue working together as a band on future recordings. However, the four did not have enough in common regarding their musical interests. In commentary for the DVD release of the second season of the show, Tork said that Dolenz was \"incapable of repeating a triumph\". Dolenz felt that once he had accomplished something and became a success at it, there was no artistic sense in repeating a formula.</p>\r\n            <br>\r\n            <p>Tork, once free from Don Kirshner's restrictions, in 1967, contributed some of the most memorable and catchy instrumental flourishes, such as the piano introduction to \"Daydream Believer\" and the banjo part on \"You Told Me\", as well as exploring occasional songwriting with the likes of \"For Pete's Sake\" and \"Lady's Baby\".</p>\r\n            <br>\r\n            <p>Tork was close to his grandmother, staying with her sometimes in his Greenwich Village days, and after he became a Monkee. \"Grams\" was one of his most ardent supporters and managed his fan club, often writing personal letters to members, and visiting music stores to make sure they carried Monkees records.</p>\r\n            <br>\r\n            <p>Six albums were produced with the original Monkees lineup, four of which went to No. 1 on the Billboard chart. This success was supplemented by two years of the TV show, a series of successful concert tours both across America and abroad, and a trippy-psychedelic movie, Head, a bit ahead of its time.[citation needed] However, tensions, both musical and personal, were increasing within the group. The band finished a Far East tour in December 1968 (where his copy of Naked Lunch was confiscated by Australian Customs[13]) and then filmed an NBC television special, 33⅓ Revolutions Per Monkee, which rehashed many of the ideas from Head, only with the Monkees playing a strangely[citation needed] second-string role.</p>\r\n            <br>\r\n            <p>No longer getting the group dynamic he wanted, and pleading \"exhaustion\" from the grueling schedule, Tork bought out the remaining four years of his contract after filming was complete on December 20, 1968, at a default of $150,000/year.[citation needed] In the DVD commentary for the 33⅓ Revolutions Per Monkee TV special—originally broadcast April 14, 1969 – Dolenz noted that Nesmith gave Tork a gold watch as a going-away present, engraved \"From the guys down at work\". Tork kept the back, but replaced the watch several times in later years.</p>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n            <div class=\"text-center\">\r\n                <h1>Peter Tork</h1>\r\n                <img src=\"assets/images/PeterTork.png\" style=\"width:80%\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/peter/peter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeterComponent = (function () {
    function PeterComponent() {
    }
    PeterComponent.prototype.ngOnInit = function () {
    };
    return PeterComponent;
}());
PeterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-peter',
        template: __webpack_require__("../../../../../src/app/components/peter/peter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/peter/peter.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PeterComponent);

//# sourceMappingURL=peter.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/photos/photos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nh1 {\r\n    color: rgba(255, 255, 255, 0.75);\r\n}\r\n.jumbotron-margin-bottom {\r\n    margin-bottom: 300px;\r\n}\r\n.jumbotron-padding-bottom {\r\n    padding-bottom: 150px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/photos/photos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-margin-bottom jumbotron-padding-bottom \">\r\n  <h1 class=\"text-center text-danger\">Photos</h1>\r\n  <hr>\r\n  <carousel class=\"text-center\">\r\n    <slide>\r\n      <img class=\"main-image-carosel\" src=\"assets/images/album.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n    <slide>\r\n      <img class=\"main-image-carosel\" src=\"assets/images/album2.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n    <slide>\r\n      <img class=\"main-image-carosel\" src=\"assets/images/band.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n    <slide>\r\n        <img class=\"main-image-carosel\" src=\"assets/images/cover.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n     <slide>\r\n      <img class=\"main-image-carosel\" src=\"assets/images/cover1.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n    <slide>\r\n      <img class=\"main-image-carosel\" src=\"assets/images/cover4.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n    <slide>\r\n      <img class=\"main-image-carosel\" src=\"assets/images/monkees.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n    <slide>\r\n      <img class=\"main-image-carosel\" src=\"assets/images/monkees-chairs.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n    <slide>\r\n      <img class=\"main-image-carosel\" src=\"assets/images/themonkees-bandW.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\r\n    </slide>\r\n  </carousel>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/photos/photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotosComponent = (function () {
    function PhotosComponent() {
    }
    PhotosComponent.prototype.ngOnInit = function () {
    };
    return PhotosComponent;
}());
PhotosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-photos',
        template: __webpack_require__("../../../../../src/app/components/photos/photos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/photos/photos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PhotosComponent);

//# sourceMappingURL=photos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/social/social.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".social {\r\n    font-size: 5rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/social/social.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-3 col-md-3 col-sm-2 social\">\n        <a href=\"https://www.facebook.com/TheMonkees/\">\n          <i class=\"fa fa-facebook-square\" aria-hidden=\"true\" ></i>\n        </a>\n  </div>\n  <div class=\"col-lg-3 col-md-3 col-sm-2 social\">\n    <a href=\"https://twitter.com/themonkees\">\n      <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n    </a>\n    </div>\n  <div class=\"col-lg-3 col-md-3 col-sm-2 social\">\n    <a href=\"https://www.youtube.com/user/themonkees\">\n      <i class=\"fa fa-youtube\" aria-hidden=\"true\"></i>\n    </a>\n    </div>\n  <div class=\"col-lg-3 col-md-3 col-sm-2 social\">\n    <a href=\"https://open.spotify.com/artist/320EPCSEezHt1rtbfwH6Ck\">\n      <i class=\"fa fa-spotify\" aria-hidden=\"true\"></i>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/social/social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialComponent = (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    return SocialComponent;
}());
SocialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-social',
        template: __webpack_require__("../../../../../src/app/components/social/social.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/social/social.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SocialComponent);

//# sourceMappingURL=social.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tours/tours.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n    width: 100%;\r\n}\r\nth {\r\n    font-size: 1.5rem;\r\n}\r\ntd {\r\n    font-size: 1.2rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tours/tours.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n    <div class=\"jumbotron text-center\">\r\n      <h1 class=\"text-danger\">Upcoming Gigs</h1>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Date</th>\r\n              <th>location</th>\r\n              <th>Venue</th>\r\n              <th>Availability</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let i of this.dataService.bookedDate\">\r\n                <td>{{ i.date }}</td>\r\n                <td>{{ i.location }}</td>\r\n                <td>{{ i.venue }}</td>\r\n                <td>{{ i.availability }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>  \r\n  </div>  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/tours/tours.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToursComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_data_services__ = __webpack_require__("../../../../../src/app/Services/data.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToursComponent = (function () {
    function ToursComponent(dataService) {
        this.dataService = dataService;
        this.bookedDate = this.dataService.bookedDate;
        this.date = this.bookedDate[0].date;
    }
    ToursComponent.prototype.ngOnInit = function () {
    };
    return ToursComponent;
}());
ToursComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tours',
        template: __webpack_require__("../../../../../src/app/components/tours/tours.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tours/tours.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_data_services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_data_services__["a" /* DataService */]) === "function" && _a || Object])
], ToursComponent);

var _a;
//# sourceMappingURL=tours.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/video/video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron-margin-bottom {\r\n    margin-bottom: 400px;\r\n}\r\n\r\n.jumbotron-padding-bottom {\r\n    padding-bottom: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/video/video.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-margin-bottom jumbotron-padding-bottom\">\r\n  <h1 class=\"text-center text-danger\">Video Player</h1>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-sm-12 col-md-12\">\r\n        <h3 class=\"text-center text-danger\">Daydreamer Believer</h3>\r\n        <video width=\"100%\" controls>\r\n            <source src=\"assets/video/TheMonkees.mp4\" type=\"video/mp4\">\r\n            Your browser does not support HTML5 video.\r\n          </video>\r\n    </div>\r\n  </div>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/components/video/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-video',
        template: __webpack_require__("../../../../../src/app/components/video/video.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/video/video.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VideoComponent);

//# sourceMappingURL=video.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map