import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerformComponent } from './employerform.component';

describe('EmployerformComponent', () => {
  let component: EmployerformComponent;
  let fixture: ComponentFixture<EmployerformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerformComponent]
    });
    fixture = TestBed.createComponent(EmployerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
