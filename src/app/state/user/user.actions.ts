import { createAction, props } from "@ngrx/store";
import { LoginFormModel,Signup } from "src/app/models";


export const addUser = createAction(
    '[loginpage] user add',
    props<{id:number,username:string,token:string}>()
);

export const loginUser = createAction(
    '[loginpage] login user',
    props<{user:LoginFormModel}>()
);

export const signupUser = createAction(
    '[signupPage] sign user',
    props<{user:Signup}>()
);


export const removeUser = createAction('[component sidebar] log out',);