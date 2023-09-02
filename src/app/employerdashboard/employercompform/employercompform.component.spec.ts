import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployercompformComponent } from './employercompform.component';

describe('EmployercompformComponent', () => {
  let component: EmployercompformComponent;
  let fixture: ComponentFixture<EmployercompformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployercompformComponent]
    });
    fixture = TestBed.createComponent(EmployercompformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
