import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DASHBOARDFORMHEADERComponent } from './dashboardformheader.component';

describe('DASHBOARDFORMHEADERComponent', () => {
  let component: DASHBOARDFORMHEADERComponent;
  let fixture: ComponentFixture<DASHBOARDFORMHEADERComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DASHBOARDFORMHEADERComponent]
    });
    fixture = TestBed.createComponent(DASHBOARDFORMHEADERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
