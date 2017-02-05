import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2CleaveModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, Ng2CleaveModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}