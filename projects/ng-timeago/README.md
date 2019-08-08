# NgTimeago

Angular 8 Date, DateTime, and timeago

Currently only support Chinese language.

## Usage

### [demo](https://joyingsoft.github.io/ng-timeago/)

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

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.
