# NgTestTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## JSON Server

Install JSON Server: `npm i -g json-server`.  
Run `npm run server` to start a json server. Navigate to `http://localhost:3000/`.  
The db-file: `./json-server-db.json`.  
curl example: 
`curl -d  '{"id": 12, "userName": "Petro Petrov", "email": "petrov.p@email.com", "phoneNumber": "0509988844", "birthday": "20.02.1952"}' -H "Content-Type: application/json" -X POST http://localhost:3000/posts`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
