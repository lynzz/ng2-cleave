import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2CleaveModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, FormsModule, Ng2CleaveModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
