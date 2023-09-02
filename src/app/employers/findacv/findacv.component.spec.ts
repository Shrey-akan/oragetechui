import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindacvComponent } from './findacv.component';

describe('FindacvComponent', () => {
  let component: FindacvComponent;
  let fixture: ComponentFixture<FindacvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindacvComponent]
    });
    fixture = TestBed.createComponent(FindacvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
