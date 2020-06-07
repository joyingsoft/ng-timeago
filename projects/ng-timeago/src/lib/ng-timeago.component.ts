import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ng-timeago',
  templateUrl: './ng-timeago.component.html',
  styles: [`.cursor-pointer {cursor: pointer;}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
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
