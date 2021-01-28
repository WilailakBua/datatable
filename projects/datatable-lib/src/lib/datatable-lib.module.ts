import { NgModule } from '@angular/core';
import { DatatableLibComponent } from './datatable-lib.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material";

@NgModule({
  declarations: [DatatableLibComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [DatatableLibComponent]
})
export class DatatableLibModule { }
