# The Monkees App

The Monkees App is a website based on the very popular band from the 1960's/70's.

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

To build the contacts component
```
FormsModule, Validators, ModalModule, DataService, AlertModule, BsModalService, ComponentLoaderFactory, PositioningService
```

The Photos component
```
CarouselComponent, CarouselModule
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

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
