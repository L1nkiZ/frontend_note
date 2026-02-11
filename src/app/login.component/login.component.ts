import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private auth = inject(AuthService);
  private router = inject(Router);

  model = {
    username: '',
    password: ''
  };

  submit() {
    this.auth.login(this.model)
    .subscribe({
      next: (response) => {
        let token = response.token;
        console.info("token", token);
        localStorage.setItem("token", token);
        this.router.navigate(['/notes']);
      },
      error: (err) => {
        console.error('call api error : ', err);
      }
    });
  }

}
