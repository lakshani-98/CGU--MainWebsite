import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userRole = String;
  logInForm: FormGroup = new FormGroup({});
  form: any = {
    email: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  hide = true;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.logInForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      undergradPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit(): void {

    console.log('onSubmit');
    this.authService.login(this.logInForm.value).subscribe(
      (data) => {
        console.log(data)
        this.tokenStorage.saveToken(data.accessToken);
        localStorage.setItem('token', data.accessToken);
        if(localStorage.getItem('token') != null)
        {
           alert("login successful");
        }else{
          alert("login unsuccessful");
        }

        this.userRole = this.authService.getRole();
        console.log(this.userRole);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();

      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    console.log('reload');
    this.router.navigateByUrl('/home');
    // window.location.reload();
  }
}
