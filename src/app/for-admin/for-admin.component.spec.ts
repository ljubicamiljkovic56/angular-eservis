import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAdminComponent } from './for-admin.component';

describe('ForAdminComponent', () => {
  let component: ForAdminComponent;
  let fixture: ComponentFixture<ForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
