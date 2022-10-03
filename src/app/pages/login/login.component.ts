import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder
  ) { }

  loginForm = this.formBuilder.group({
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log(this.loginForm.get('email'));
    //this.loginForm.clearValidators();
  }

}
