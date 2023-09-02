import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInConfirmComponent } from './sign-in-confirm.component';

describe('SignInConfirmComponent', () => {
  let component: SignInConfirmComponent;
  let fixture: ComponentFixture<SignInConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInConfirmComponent]
    });
    fixture = TestBed.createComponent(SignInConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
