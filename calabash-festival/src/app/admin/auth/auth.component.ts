import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from 'src/app/providers/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AlertService} from "ngx-alerts";
import {AdminAuthService} from "../../providers/admin-auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private title: Title, private http: HttpService, private alertService: AlertService, private authService: AdminAuthService) { }

  ngOnInit() {
    this.title.setTitle('Login - Calabash(Admin)');
  }
  get username_control() {
    return this.authForm.get('username');
  }
  get password_control() {
    return this.authForm.get('password');
  }

  loginUser() {
    //
    if (this.username_control.invalid || this.password_control.invalid) {
      this.alertService.info('Please fill form');
      return;
    }
    // authenticate user...
    this.http.authenticateUser(this.username_control.value, this.password_control.value)
      .subscribe((user) => {
        if (!user) {
          this.alertService.danger('Wrong username or password');
        } else {
          this.authService.authenticate(user);
        }
      });
  }
}
