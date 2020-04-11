import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTelComponent } from './my-tel.component';

describe('MyTelComponent', () => {
  let component: MyTelComponent;
  let fixture: ComponentFixture<MyTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
