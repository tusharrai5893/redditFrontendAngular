import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSignIn(event: Event): void {
    event.preventDefault();
    console.log(event);
  }

  onCreateAccount(): void {
    const createAccountBtn = document.getElementsByClassName('auth');

    const formIsHidden = createAccountBtn[0].children;

    if (formIsHidden[0].id == 'signIn') {
      console.log('in signin');

      formIsHidden[1].classList.remove('form-hidden');
      formIsHidden[0].classList.add('form-hidden');
      formIsHidden[0].remove();
    } else if (formIsHidden[1].id == 'signUp') {
      console.log('in signUP');
      formIsHidden[0].classList.remove('form-hidden');
      formIsHidden[1].classList.add('form-hidden');
    }
  }
}
