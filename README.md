# The Monkees App

The Monkees App is a website based on the very popular band from the 1960's/70's. It has been designed in such a way using images and font types that would be consistant with this era but still have a very modern layout.

## The App

The app is built using the Angular 4 framework built on Node.js
It is a single page aplication using a total of 16 individual components to make up the entire website, each listed below:
* App 
* Nav Bar 
* Home
* Band
* Music
* Video
* Photos
* Tours
* Contact
* Booking
* Email
* Social
* Davy
* Micky
* Peter
* Michael

### Other Frameworks and Modules
To struture the app
```
Bootstrap and Jquery along with some vanilla css
```

Contacts component
```
FormsModule, Validators, ModalModule, DataService, AlertModule, BsModalService, ComponentLoaderFactory, PositioningService
```

The Photos component
```
CarouselComponent, CarouselModule
```

The Music component
```
HTML5
```

The Video component
```
HTML5
```


### How to navigate through the App

#### NavBar

Navbar is taken from the bootstrap examples layout with a few modifications to allow the menu buttons float to the right of the screen and keep the logo to the left of the screen.
The menu buttons use the google font family Ranchers this is in keeping with the 60s/70s theme.

#### The Home page

Welcomes you to the site by displaying a large Monkees logo along with band photos, assuring you that you have infact reached the correct page for the band and not a wiki page about monkeys in the wild.

#### The Band Page

Band page is simple but informitave, showing a band photo in which the band members are confused as to which camera they should be looking at and a detailed description of the band taken from wikipedia. Below this is again the individual band member photos and names which then link to specific information about each band member when clicked on.

#### Band Members

Band member page shows the band member photo and name in the top left of the display followed by specific information (also taken from wikipedia) about each band member.

###The Music Page

This page consists of 4 album covers associated with each of the songs. It allows the visitor to visually see what the song is and using the HTML5 audio tag and the bootstrap class of "audio-controls-size" displays a simple play button, Mute and the ability to download the song.

#### The Video Page

A simple page alowing the visitor to view the official and badly mimed video of Daydream Believer an iconic song released in 1968 by The Monkees.
This page allows easy access to video controls for the Video using the standard HTML5 video tag.

#### The Photos page

Photos takes use of the ngx-bootstrap module installed and allows a collection of images to be shown in a carousel format on screen. As standard it automatically cycles throught the photos but it also allows the viewer to skip to the next image, go back to the previous image or by selecting the slide from the image strip.

#### The Tours Page

Using a simple table and wrapping it in bootstrap I have displayed the next Upcoming gigs shown by date location venue and the availiblilty of tickets. The inforation is retireved from the data.service and shows the information stored in an array. By Linking this table to a data.service I was able to add any information stored in the array from the booking component and display it in the tours table. Making use of the single page app which allows me to temporarily display the newly booked gig within in the table. Of course once the page is relaoded it is no longer shown.

#### The Contact Page.

This page consists of three seperate components the booking component, the email component and the social component.

#### Booking Component

Perhaps the most complicated and most fun to create and contrary to advice giving from my mentor I started this component very early on in the project build. 
It uses bootstrap modal windows and Angualar forms module, Angualar Form/ email validators and DataService.
##### To Use:
* When on the contact page select the Book Now button
* A modal window will pop infront of the page and allow you to enter your information and the gig information
* The Form/Email Validators ensure the correct format for name, location, venue, email, date, and event type are selected and show a message if these are incorrect formats. 
* When all the correct information has been put into each field click the submit field.
* The 

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc



Old Stuff
# TheMonkeesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Design

The Main design was done in Balsamiq Mockups. I used a simple yet elegant framework for my project, bootstrap. This is a great tool for pre-configured css layouts. This allows me to configure the app as I did in my Mockup Templates.

## Additions to Angular CLI

To allow bootstrap to be available within the Angular app I NPM installed bootstrap 4, jquery and tether to allow me to use that framework. 
`npm install bootstrap@4.0.0alpha.6 jquery tether --save`

## More here......

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor]
(http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
