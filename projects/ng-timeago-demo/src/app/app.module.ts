import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgTimeagoModule } from '../../../ng-timeago/src/lib/ng-timeago.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgTimeagoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
