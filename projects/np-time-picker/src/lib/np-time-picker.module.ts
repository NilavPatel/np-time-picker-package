import { NgModule } from '@angular/core';
import { NpTimePickerComponent } from './np-time-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NpTimePickerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NpTimePickerComponent]
})
export class NpTimePickerModule { }
