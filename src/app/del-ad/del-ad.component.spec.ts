import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelAdComponent } from './del-ad.component';

describe('DelAdComponent', () => {
  let component: DelAdComponent;
  let fixture: ComponentFixture<DelAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
