import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ng-timeago',
  template: `
  <span
  [ngClass]="{ 'cursor-pointer': show === 'both' }"
  class="{{ styles ? styles : show === 'both' ? 'color-primary' : '' }}"
  (click)="onClick($event)">
  <ng-container *ngIf="showDate; else showTimeagoTemp">
    <ng-container *ngIf="show === 'date'; else isNoShowDateTemp">
      {{ date | date: DATE_FORMAT_ZH }}
    </ng-container>
    <ng-template #isNoShowDateTemp>
      {{ date | date: DATE_TIME_FORMAT_ZH }}
    </ng-template>
  </ng-container>
  <ng-template #showTimeagoTemp> {{ date | ngTimeago }} </ng-template>
</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
}
)
export class NgTimeagoComponent implements OnInit {
  @Input() date: Date;

  @Input() styles: string;

  @Input() show: 'date' | 'dateTime' | 'timeago' | 'both' = 'both';

  readonly DATE_TIME_FORMAT_ZH: string;
  readonly DATE_FORMAT_ZH: string;
  showDate = false;
  constructor(private cdr: ChangeDetectorRef) {
    this.DATE_TIME_FORMAT_ZH = 'yyyy/MM/dd hh:mm';
    this.DATE_FORMAT_ZH = 'yyyy/MM/dd';
  }
  ngOnInit() {
    this.showDate =
      this.show === 'dateTime' || this.show === 'date' ? true : false;
  }
  onClick(event: any) {
    if (this.show === 'both') {
      event.stopPropagation();
      this.showDate = !this.showDate;
      this.cdr.markForCheck();
    }
  }
}
