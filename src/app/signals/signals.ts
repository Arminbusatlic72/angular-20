import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
  WritableSignal,
  computed,
  Signal,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Signals {
  normalCounter: number = 0;
  counter: WritableSignal<number> = signal(0);
  doubleCounter: Signal<number> = computed(() => this.counter() * 2);
  constructor() {
    this.counter.set(6);

    effect(() => {
      console.log('Counter changed:', this.counter());
    });
  }
  onDecrement() {
    this.counter.update((initial) => initial - 1);
  }
  onIncrement() {
    this.counter.update((initial) => initial + 1);
  }
}
