import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCustomComponentComponent } from './alert-custom-component.component';

describe('AlertCustomComponentComponent', () => {
  let component: AlertCustomComponentComponent;
  let fixture: ComponentFixture<AlertCustomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertCustomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
