import { Component, signal, computed, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-linked-signals',
  imports: [],
  templateUrl: './linked-signals.html',
  styleUrl: './linked-signals.scss',
})
export class LinkedSignals {
  price: number = 100;
  quantitySignal = signal(1);
  // totalSignal = linkedSignal(() => this.price * this.quantitySignal());
  // calculate() {
  //   this.quantitySignal.set(2);
  // }
  totalSignal = linkedSignal({
    source: () => this.quantitySignal(),
    computation: (quantity) => quantity * this.price,
  });

  calculate() {
    this.quantitySignal.set(2);
  }
}
