import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgTimeagoComponent } from '../../../ng-timeago/src/lib/ng-timeago.component';
import { NgTimeagoPipe } from '../../../ng-timeago/src/lib/ng-timeago.pipe';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgTimeagoPipe,
        NgTimeagoComponent,
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('ng timeago');
  });
});
