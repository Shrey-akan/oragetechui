import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdetailsPageComponent } from './empdetails-page.component';

describe('EmpdetailsPageComponent', () => {
  let component: EmpdetailsPageComponent;
  let fixture: ComponentFixture<EmpdetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpdetailsPageComponent]
    });
    fixture = TestBed.createComponent(EmpdetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
