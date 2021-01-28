import { TestBed } from '@angular/core/testing';

import { DatatableLibService } from './datatable-lib.service';

describe('DatatableLibService', () => {
  let service: DatatableLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatableLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
