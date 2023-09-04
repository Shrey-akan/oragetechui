import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForhiddenComponent } from './forhidden.component';

describe('ForhiddenComponent', () => {
  let component: ForhiddenComponent;
  let fixture: ComponentFixture<ForhiddenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForhiddenComponent]
    });
    fixture = TestBed.createComponent(ForhiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
