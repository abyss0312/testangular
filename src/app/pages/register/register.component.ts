import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(
    private formBuilder:FormBuilder
  ) { }

  signupForm = this.formBuilder.group({
    firstname:new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    birth: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required]),
    pass: new FormControl('',[Validators.required,Validators.minLength(6)]),
    confPass: new FormControl('',[Validators.required])
  },
  { validator: this.matchPassword('pass', 'confPass') });



  ngOnInit(): void {
  }

  onSubmit(): void{

    console.log(this.signupForm);
  }

  
  matchPassword(firstControl:any, secondControl:any): ValidatorFn {
 
    return (control: AbstractControl): ValidationErrors | null => {
 
      const password = control.get(firstControl)?.value;
      const confirm = control.get(secondControl)?.value;
 
      if (password != confirm) { return { 'noMatch': true } }
 
      return null
 
    }
  }

}
