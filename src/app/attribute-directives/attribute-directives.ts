import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.scss',
})
export class AttributeDirectives {
  textColor: string = 'text-success';
  changeColor(color: string) {
    this.textColor = color;
  }
  isTextGreen: boolean = false;
  isTextOrange: boolean = false;
  styleColor: string = 'orange';
  updateColor(ngStyleColor: string) {
    this.styleColor = ngStyleColor;
  }
  userClass: string = '';
  customClass: any = {
    color: 'yellow',
    height: '150px',
    width: '400px',
    border: '1px solid black',
  };
}
