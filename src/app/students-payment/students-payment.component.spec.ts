import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPaymentComponent } from './students-payment.component';

describe('StudentsPaymentComponent', () => {
  let component: StudentsPaymentComponent;
  let fixture: ComponentFixture<StudentsPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
