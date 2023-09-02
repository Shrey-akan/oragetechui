import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderemployerComponent } from './headeremployer.component';

describe('HeaderemployerComponent', () => {
  let component: HeaderemployerComponent;
  let fixture: ComponentFixture<HeaderemployerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderemployerComponent]
    });
    fixture = TestBed.createComponent(HeaderemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
