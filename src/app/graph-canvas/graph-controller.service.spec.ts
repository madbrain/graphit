import { TestBed } from '@angular/core/testing';

import { GraphControllerService } from './graph-controller.service';

describe('GraphControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphControllerService = TestBed.get(GraphControllerService);
    expect(service).toBeTruthy();
  });
});
