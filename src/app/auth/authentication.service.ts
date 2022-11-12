import { Injectable, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponse } from '../models/GenericResponse.interface';
import { LoginFormModel } from '../models/user.interface';
import { HttpService } from '../shared';
import { EncryptionService } from '../shared/encryption.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
      private httpService:HttpService,
  ) { }


  login(user: LoginFormModel){

      return this.httpService.postOne<GenericResponse<string>>('/auth/login',user);
  }
}
