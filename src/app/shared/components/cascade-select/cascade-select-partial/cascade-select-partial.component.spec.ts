import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeSelectPartialComponent } from './cascade-select-partial.component';

describe('CascadeSelectPartialComponent', () => {
  let component: CascadeSelectPartialComponent;
  let fixture: ComponentFixture<CascadeSelectPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadeSelectPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeSelectPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
