import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      console.log("Not valid email")
      return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if ((data as any).success) {
        console.log("Register success");
        this.router.navigate(["/login"]);
      } else {
        console.log("Register failed");
        this.router.navigate(["/register"]);
      }
    });
  }
}