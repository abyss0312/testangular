import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Signup, UserStore } from 'src/app/models';
import { AlertService, EncryptionService } from 'src/app/shared';
import { signupUser } from 'src/app/state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(
    private readonly store: Store<{user: UserStore}>,
    private encryptService:EncryptionService,
    private alertService:AlertService
  ) { }

  signupForm = new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    birth: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required]),
    pass: new FormControl('',[Validators.required,Validators.minLength(6)]),
    confPass: new FormControl('',[Validators.required])
  },this.matchPassword('confPass','pass'));



  ngOnInit(): void {
  }

  async onSubmit(): Promise<void>{

    const pass = await this.encryptService.encryptText(this.signupForm.value.pass!);

    const user:Signup = {
      firstname: this.signupForm.value.firstname!,
      lastname: this.signupForm.value.lastname!,
      birthdate: this.signupForm.value.birth!,
      username: this.signupForm.value.username!,
      password: pass
    }
    this.store.dispatch(signupUser({user}))
   //if(this.signupForm.status == "VALID") t
  }

  
  matchPassword(firstControl:any, secondControl:any): ValidatorFn {
 
    return (control: AbstractControl): ValidationErrors | null => {
 
      const password = control.get(firstControl)?.value;
      const confirm = control.get(secondControl)?.value;
      const touched = control.get(secondControl)?.touched;
 
      if (password != confirm && touched == true) { return { 'noMatch': true } }
 
      return null
 
    }
  }

}
