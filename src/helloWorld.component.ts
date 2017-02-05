import { Component } from '@angular/core';

@Component({
  selector: 'ng2-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'Angular CleaveJS Directive';
}
