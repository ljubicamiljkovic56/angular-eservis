import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamPeriodComponent } from './create-exam-period.component';

describe('CreateExamPeriodComponent', () => {
  let component: CreateExamPeriodComponent;
  let fixture: ComponentFixture<CreateExamPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
