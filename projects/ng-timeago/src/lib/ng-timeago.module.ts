import { NgModule } from '@angular/core';
import { NgTimeagoComponent } from './ng-timeago.component';
import { NgTimeagoPipe } from './ng-timeago.pipe';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgTimeagoComponent, NgTimeagoPipe],
  imports: [
    CommonModule
  ],
  exports: [NgTimeagoComponent, NgTimeagoPipe]
})
export class NgTimeagoModule { }
