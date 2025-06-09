import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  topic: string;
  constructor(private router: Router) {
    this.topic = 'Angular 19';
    console.log('Constructor of User component called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // use for component input property changes
    console.log('1. ngOnChanges called with changes:', changes);
  }
  ngOnInit(): void {
    // use this hook for API call
    console.log('2. ngOnInit called');
  }
  ngDoCheck(): void {
    // use this hook for custom change detection
    console.log('3. ngDoCheck called');
  }
  ngAfterContentInit(): void {
    // use this hook for content projection
    console.log('4. ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    // use this hook for content projection
    console.log('5. ngAfterContentChecked called');
  }
  ngAfterViewInit(): void {
    // use this hook for view initialization
    console.log('6. ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    // use this hook for view changes
    console.log('7. ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    // use this hook for cleanup
    console.log('8. ngOnDestroy called');
  }
  loginData() {
    // user verification logic completed
    // this.router.navigate(['/data-binding']);
    this.router.navigateByUrl('/data-binding'); // Navigate to data-binding component
  }
}
