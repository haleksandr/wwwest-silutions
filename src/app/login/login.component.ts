import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { User } from '../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // public form!: FormGroup;
  public form!: any;
  public isSubmited: boolean = false;
  public errorMessage: string = '';
  public guardMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginWarn']) {
        this.guardMessage =
          'You cannot get to the profile page until you log in';
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });

    this.authService.error$.subscribe((response: any) => {
      this.errorMessage = response;
    });
  }

  public submit() {
    if (this.form.invalid) {
      return;
    }
    this.isSubmited = true;
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.authService.login(user).subscribe(
      () => {
        this.form.reset();
        this.router.navigate(['/profile']);
        this.isSubmited = false;
      },
      () => {
        this.isSubmited = false;
      }
    );
  }
}
