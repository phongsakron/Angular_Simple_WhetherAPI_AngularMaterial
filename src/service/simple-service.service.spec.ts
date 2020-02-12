/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimpleServiceService } from './simple-service.service';

describe('Service: SimpleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleServiceService]
    });
  });

  it('should ...', inject([SimpleServiceService], (service: SimpleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
