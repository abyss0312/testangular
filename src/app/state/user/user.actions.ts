import { createAction, props } from "@ngrx/store";


export const addUser = createAction(
    '[loginpage] user add',
    props<{id:number,username:string,token:string}>()
);

export const removeUser = createAction('[component sidebar log out',);