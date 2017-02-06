import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { CleaveDirective } from './../src/cleave.directive';
import { Ng2CleaveModule } from '../src';

describe('ng2-hello-world component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [Ng2CleaveModule.forRoot()]});
  });

});
