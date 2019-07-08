import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YelledComponent } from './yelled.component';

describe('YelledComponent', () => {
  let component: YelledComponent;
  let fixture: ComponentFixture<YelledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
