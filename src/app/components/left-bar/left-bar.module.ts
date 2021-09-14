import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LeftBarComponent } from './left-bar.component';

@NgModule({
  declarations: [LeftBarComponent],
  imports: [CommonModule, FormsModule, BrowserModule, FormsModule],
  exports: [LeftBarComponent],
})
export class LeftBarModule {}
