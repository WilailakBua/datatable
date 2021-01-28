import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableLibComponent } from './datatable-lib.component';

describe('DatatableLibComponent', () => {
  let component: DatatableLibComponent;
  let fixture: ComponentFixture<DatatableLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
