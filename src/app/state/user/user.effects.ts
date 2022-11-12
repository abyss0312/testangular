import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, tap } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/auth';
import { LoginFormModel } from 'src/app/models/user.interface';
import { addUser, loginUser } from './user.actions';

 
@Injectable()
export class UserEffects {
 
    loginUser$ = createEffect(() =>
    this.actions$.pipe(
        ofType(loginUser),
        mergeMap(({user}) => {
            return  this.authService.login(user).pipe(
                map(res => addUser({id:1,username:"test",token:res.data})),
            )
        })
    ));
 
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}
}