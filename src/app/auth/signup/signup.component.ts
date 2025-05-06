import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [FormsModule], // ✅ Add this
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}


goToLogin() {
  this.router.navigate(['/login']);
}


  signup() {
    this.authService.signup(this.name, this.email, this.password).subscribe(
      () => {
        alert('Signup successful!');
        this.router.navigate(['/login']);
      },
      () => {
        alert('Signup failed. Try again.');
      }
    );
  }
}
