import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlLiDoneComponent } from './ul-li-done.component';

describe('UlLiDoneComponent', () => {
  let component: UlLiDoneComponent;
  let fixture: ComponentFixture<UlLiDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlLiDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlLiDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
