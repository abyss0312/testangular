import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/auth';
import { GenericResponse } from 'src/app/models/GenericResponse.interface';
import { LoginFormModel } from 'src/app/models/user.interface';
import { HttpService } from 'src/app/shared';
import { addUser, selectedUser, UserState } from 'src/app/state';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  testResult$: Observable<UserState> = new Observable()

   

  constructor(
    private formBuilder:FormBuilder,
   // private readonly store: Store<{user: UserState}>,
    private authService: AuthenticationService,
    private httpService:HttpService
  ) { }

  loginForm = this.formBuilder.group({
    username:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  

  ngOnInit(): void {

    const user:LoginFormModel = {
      username:this.loginForm.value.username!,
      password:this.loginForm.value.password!
    }
    this.httpService.postOne<GenericResponse<string>>('/auth/login',user);
    //this.testResult$ = this.store.select(selectedUser);
    console.log(this.loginForm.get('email'));
    console.log('test')
  }

  onSubmit():void{

   
    console.log(this.loginForm.value);


    //const result = this.authService.Login(user);
    //this.httpService.postOne<GenericResponse<string>>('/auth/login',user);

   // this.store.dispatch(addUser(user))
  }

}
