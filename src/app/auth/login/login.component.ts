import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',

  imports: [FormsModule], // ✅ Add this
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      () => {
        alert('Login successful!');
        this.router.navigate(['/']);
      },
      () => {
        alert('Login failed. Check credentials.');
      }
    );
  }
}
