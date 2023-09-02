import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryseekerComponent } from './salaryseeker.component';

describe('SalaryseekerComponent', () => {
  let component: SalaryseekerComponent;
  let fixture: ComponentFixture<SalaryseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryseekerComponent]
    });
    fixture = TestBed.createComponent(SalaryseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
