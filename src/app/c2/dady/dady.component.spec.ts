import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadyComponent } from './dady.component';

describe('DadyComponent', () => {
  let component: DadyComponent;
  let fixture: ComponentFixture<DadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
