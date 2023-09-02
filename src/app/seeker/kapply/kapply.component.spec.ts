import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapplyComponent } from './kapply.component';

describe('KapplyComponent', () => {
  let component: KapplyComponent;
  let fixture: ComponentFixture<KapplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KapplyComponent]
    });
    fixture = TestBed.createComponent(KapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
