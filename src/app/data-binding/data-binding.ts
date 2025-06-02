import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {
  name: string = 'Armin';
  topic: string = 'Learning Angular 20';
  image: string =
    'https://cdn.bqwatches.com/images/cc78a997-1b33-4c97-93e3-bc4ff3b16b8d.jpg';
  onSave() {
    alert('Data Saved');
  }
  countries: string[] = ['Germany', 'France', 'Italy', 'Spain', 'Norway'];
  selectedCountry: string = '';
  onCountrySelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCountry = selectElement.value;
  }
  random: any = '';
}
