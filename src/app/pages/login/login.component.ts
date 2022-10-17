import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, selectedUser, UserState } from 'src/app/state';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  testResult$: Observable<number> = new Observable()

   

  constructor(
    private formBuilder:FormBuilder,
    private readonly store: Store<{user: UserState}>
  ) { }

  loginForm = this.formBuilder.group({
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  

  ngOnInit(): void {
    this.testResult$ = this.store.select(selectedUser);
    console.log('test')
  }

  onSubmit():void{
    console.log(this.loginForm.get('email'));
    this.store.dispatch(addUser({
      id:1,
      username:'test',
      token:"jejaj"
    }))
  }

}
