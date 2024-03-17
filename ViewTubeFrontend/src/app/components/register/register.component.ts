import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService) { }

  register(user: any) {
    this.authService.register(user).subscribe({
      next: (res) => {
        console.log('Registration successful', res);
        // Navigate to login or other page as needed
      },
      error: (err) => console.error('Error registering', err)
    });
  }
}
