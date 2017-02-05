import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleaveDirective } from './cleave.directive';

@NgModule({
  declarations: [
    CleaveDirective
  ],
  imports: [CommonModule],
  exports: [
    CleaveDirective
  ]
})
export class Ng2CleaveModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2CleaveModule
    };
  }

}
