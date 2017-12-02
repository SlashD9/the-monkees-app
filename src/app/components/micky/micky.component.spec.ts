import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MickyComponent } from './micky.component';

describe('MickyComponent', () => {
  let component: MickyComponent;
  let fixture: ComponentFixture<MickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
