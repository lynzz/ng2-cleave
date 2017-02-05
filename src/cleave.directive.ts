import { Directive, ElementRef, Input } from '@angular/core';

declare var Cleave: any;

@Directive({
  selector: '[ng2Cleave]'
})
export class CleaveDirective {

  @Input() cleaveOptions: any = {};

  cleaveInstance: any;

  constructor(private elementRef: ElementRef) { }

  @Input() set ng2Cleave(options: any){

    if (options)
      this.cleaveOptions = options;

    console.log(options);

    this.init();
  }

  init = () => {
    console.log('init');

    // this.cleaveInstance = new Cleave(this.elementRef.nativeElement, this.cleaveOptions);
  }
}
