# NgTimeago

Angular 8 Date, DateTime, and timeago

Currently only support Chinese language.

## Usage

[demo](https://joyingsoft.github.io/ng-timeago/)

### Install

`npm i ng-timeago`

### Import

```angular
import { NgTimeagoModule } from 'ng-timeago';
@NgModule({
      imports: [..., NgTimeagoModule]
      ...})
```

### use

```angular
      .color-b {color:green;}
      ...
      <ng-timeago [date]="dt"
                  [styles]="'color-b'"></ng-timeago>
      <ng-timeago [date]="dt"
                  [show]="'date'"></ng-timeago>
      <ng-timeago [date]="dt"
                  [show]="'dateTime'"></ng-timeago>
      <ng-timeago [date]="dt"
                  [show]="'timeago'"></ng-timeago>
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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


## Create Angular library with Angular CLI

create an empty workspace `ng new ng-timeago --create-application=false`

> --createApplication=true|false
> When true (the default), creates a new initial app project in the src folder of the new workspace.
> When false, creates an empty workspace with no initial app.
> You can then use the generate application command so that all apps are created in the projects folder.
> Default: true [doc](https://angular.io/cli/new)

Add library project `ng generate library ng-timeago -p=ng`

Add demo `ng generate application ng-timeago-demo`

Build library `ng build ng-timeago`

Run demo: `ng serve ng-timeago-demo`

Build Demo: `ng build ng-timeago-demo --prod --base-href "/ng-timeago/"`
