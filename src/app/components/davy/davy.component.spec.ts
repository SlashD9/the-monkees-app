import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavyComponent } from './davy.component';

describe('DavyComponent', () => {
  let component: DavyComponent;
  let fixture: ComponentFixture<DavyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
