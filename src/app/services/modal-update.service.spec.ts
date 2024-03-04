import { TestBed } from '@angular/core/testing';

import { ModalUpdateService } from './modal-update.service';

describe('ModalUpdateService', () => {
  let service: ModalUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
