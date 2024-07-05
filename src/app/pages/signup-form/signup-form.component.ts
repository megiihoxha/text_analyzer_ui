import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  username?: string;
  password?: string;
  hide = true;

  constructor(private authService: AuthService, private router: Router) {}

  onSignUp() {
    if (this.username && this.password) {
      this.authService.signup(this.username, this.password).subscribe(
        response => {
          console.log('Sign up successful', response);
          this.router.navigate(['/login']);

        },
        error => {
          console.error('Sign up failed', error);
          // Handle sign up error, e.g., display an error message
        }
      );
    }
  }
}
