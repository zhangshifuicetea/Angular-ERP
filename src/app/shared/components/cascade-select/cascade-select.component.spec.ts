import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeSelectComponent } from './cascade-select.component';

describe('CascadeSelectComponent', () => {
  let component: CascadeSelectComponent;
  let fixture: ComponentFixture<CascadeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
