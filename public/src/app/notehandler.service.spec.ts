import { TestBed, inject } from '@angular/core/testing';

import { NotehandlerService } from './notehandler.service';

describe('NotehandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotehandlerService]
    });
  });

  it('should be created', inject([NotehandlerService], (service: NotehandlerService) => {
    expect(service).toBeTruthy();
  }));
});
