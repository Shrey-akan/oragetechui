import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptioneditorComponent } from './descriptioneditor.component';

describe('DescriptioneditorComponent', () => {
  let component: DescriptioneditorComponent;
  let fixture: ComponentFixture<DescriptioneditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptioneditorComponent]
    });
    fixture = TestBed.createComponent(DescriptioneditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
