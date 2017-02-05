import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { HelloWorldComponent } from './../src/helloWorld.component';
import { Ng2CleaveModule } from '../src';

describe('ng2-hello-world component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [Ng2CleaveModule.forRoot()]});
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<HelloWorldComponent> = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the Angular CleaveJS Directive module!');
  });

});
