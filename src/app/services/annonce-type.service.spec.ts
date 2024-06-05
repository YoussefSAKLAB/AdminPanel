import { TestBed } from '@angular/core/testing';

import { AnnonceTypeService } from './annonce-type.service';

describe('AnnonceTypeService', () => {
  let service: AnnonceTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnonceTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
