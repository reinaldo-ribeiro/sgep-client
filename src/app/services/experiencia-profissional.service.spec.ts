import { TestBed } from '@angular/core/testing';

import { ExperienciaProfissionalService } from './experiencia-profissional.service';

describe('ExperienciaProfissionalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExperienciaProfissionalService = TestBed.get(ExperienciaProfissionalService);
    expect(service).toBeTruthy();
  });
});
