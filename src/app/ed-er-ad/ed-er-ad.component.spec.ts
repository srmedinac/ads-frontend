import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdErAdComponent } from './ed-er-ad.component';

describe('EdErAdComponent', () => {
  let component: EdErAdComponent;
  let fixture: ComponentFixture<EdErAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdErAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdErAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
