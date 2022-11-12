import { createReducer, on } from "@ngrx/store"
import { UserStore } from "src/app/models"
import { addUser, removeUser } from "./user.actions"






 const initialState: UserStore = {
    id:0,
    username:"",
    token:"",
    isActive:false
 }

 export const userReducer = createReducer(
    initialState,

    on(addUser, (state,{id,username,token}) => ({
        id:id,
        username:username,
        token:token,
        isActive:true
    })),
    
    on(removeUser, state => ({ id: 0, username: "", token:"" ,isActive:false})),
 )