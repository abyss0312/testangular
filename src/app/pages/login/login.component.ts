import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginFormModel, UserStore } from 'src/app/models/user.interface';
import { EncryptionService } from 'src/app/shared/encryption.service';
import { loginUser } from 'src/app/state';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


   

  constructor(
    private formBuilder:FormBuilder,
   private readonly store: Store<{user: UserStore}>,
   private encryptService:EncryptionService
  
  ) { }

  loginForm = this.formBuilder.group({
    username:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  

  async ngOnInit(): Promise<void> {

  }

   async onSubmit():Promise<void>{

   
    const pass = await this.encryptService.encryptText(this.loginForm.value.password!);
    
    const user:LoginFormModel = {
      username:this.loginForm.value.username!,
      password:pass
    }

    this.store.dispatch(loginUser({user}))
  }

}
