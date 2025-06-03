import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-ngif-vs-if.html',
  styleUrl: './structural-directive-ngif-vs-if.scss',
})
export class StructuralDirectiveNgifVsIf {
  isChecked: boolean = false;
  onClick() {
    this.isChecked = !this.isChecked;
  }
  isInputBox: boolean = true;
  showField() {
    this.isInputBox = true;
  }
  hideField() {
    this.isInputBox = false;
  }
  input1: string = '';
  input2: string = '';
}
