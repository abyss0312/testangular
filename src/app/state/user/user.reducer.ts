import { createReducer, on } from "@ngrx/store"
import { addUser, removeUser } from "./user.actions"




export interface UserState  {
    id: number,
    username:string,
    token:string
}

 const initialState: UserState = {
    id:0,
    username:"",
    token:""
 }

 export const userReducer = createReducer(
    initialState,

    on(addUser, (state,{id,username,token}) => ({
        id:id,
        username:username,
        token:token
    })),
    
    on(removeUser, state => ({ id: 0, username: "", token:"" })),
 )