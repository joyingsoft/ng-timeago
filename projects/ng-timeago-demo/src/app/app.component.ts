import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  dt: Date;

  constructor(private cdr: ChangeDetectorRef) {
    this.dt = new Date();
  }

  onClick() {
    this.dt = new Date();
    this.dt.setSeconds(this.getRandomNumber(1, 60));
    this.dt.setMinutes(this.getRandomNumber(1, 60));
    this.dt.setHours(this.getRandomNumber(0, 23));
    this.dt.setDate(this.getRandomNumber(1, 27));
    this.dt.setMonth(this.getRandomNumber(1, 12));
    this.dt.setFullYear(this.getRandomNumber(2000, 2030));
    this.cdr.markForCheck();
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
