import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbaComponent } from './abba.component';

describe('AbbaComponent', () => {
  let component: AbbaComponent;
  let fixture: ComponentFixture<AbbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
