import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom-pipe';
@Component({
  selector: 'app-built-in-pipes',
  // imports all pipes
  imports: [CommonModule, CustomPipe],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.scss',
})
export class BuiltInPipes {
  angularPipes: string =
    'Use angular pipes to transform data in templates. Pipes are simple functions that accept an input value and return a transformed value. They can be used to format dates, numbers, strings, and more. Angular provides several built-in pipes, such as DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, and more. You can also create custom pipes to suit your specific needs.';
  personData = {
    name: 'John',
    age: 30,
    city: 'Mumbai',
  };
  mobileNumber: any = null;
  currentDate: Date = new Date();

  items = of(['Apple', 'Banana', 'Mango']);
}
