import { TestBed, inject } from '@angular/core/testing';

import { GestionFilmService } from './gestion-film.service';

describe('GestionFilmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionFilmService]
    });
  });

  it('should be created', inject([GestionFilmService], (service: GestionFilmService) => {
    expect(service).toBeTruthy();
  }));
});
