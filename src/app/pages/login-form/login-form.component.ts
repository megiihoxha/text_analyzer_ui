import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  username?: string;
  password?: string;
  hide = true;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe(
        response => {
          console.log('Login successful', response);
          this.router.navigate(['/analyze']);
        },
        error => {
          console.error('Login failed', error);
          // Handle sign up error, e.g., display an error message
        }
      );
    }
  }
}
