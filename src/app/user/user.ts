import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  constructor(private router: Router) {}
  loginData() {
    // user verification logic completed
    // this.router.navigate(['/data-binding']);
    this.router.navigateByUrl('/data-binding'); // Navigate to data-binding component
  }
}
