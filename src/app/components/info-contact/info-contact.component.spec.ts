import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContactComponent } from './info-contact.component';

describe('InfoContactComponent', () => {
  let component: InfoContactComponent;
  let fixture: ComponentFixture<InfoContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
