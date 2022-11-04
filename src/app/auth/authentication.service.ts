import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponse } from '../models/GenericResponse.interface';
import { LoginFormModel } from '../models/user.interface';
import { HttpService } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpService:HttpService
  ) { }


  login(user: LoginFormModel){

    user.password = `test123${user.password}`;
    console.log('ada');

      this.httpService.postOne<GenericResponse<string>>('/auth/login',user);
  }
}
