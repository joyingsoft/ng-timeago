import { NgTimeagoPipe } from './ng-timeago.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgTimeagoComponent } from './ng-timeago.component';

describe('NgTimeagoComponent', () => {
  let component: NgTimeagoComponent;
  let fixture: ComponentFixture<NgTimeagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgTimeagoComponent, NgTimeagoPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimeagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
