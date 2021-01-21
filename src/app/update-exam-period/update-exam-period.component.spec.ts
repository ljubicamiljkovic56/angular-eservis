import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExamPeriodComponent } from './update-exam-period.component';

describe('UpdateExamPeriodComponent', () => {
  let component: UpdateExamPeriodComponent;
  let fixture: ComponentFixture<UpdateExamPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExamPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExamPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
