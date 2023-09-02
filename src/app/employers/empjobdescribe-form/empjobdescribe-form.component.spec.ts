import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpjobdescribeFormComponent } from './empjobdescribe-form.component';

describe('EmpjobdescribeFormComponent', () => {
  let component: EmpjobdescribeFormComponent;
  let fixture: ComponentFixture<EmpjobdescribeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpjobdescribeFormComponent]
    });
    fixture = TestBed.createComponent(EmpjobdescribeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
