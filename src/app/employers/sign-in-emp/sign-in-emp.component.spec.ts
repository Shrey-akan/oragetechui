import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInEmpComponent } from './sign-in-emp.component';

describe('SignInEmpComponent', () => {
  let component: SignInEmpComponent;
  let fixture: ComponentFixture<SignInEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInEmpComponent]
    });
    fixture = TestBed.createComponent(SignInEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
