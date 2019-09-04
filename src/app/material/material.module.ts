import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

const modules = [
  MatChipsModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: modules,
})
export class MaterialModule { }
