import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserState } from "./user.reducer";





const selectUser = (state:AppState) => state.user;
export const selectedUser = createSelector(
    selectUser,
    (state:UserState) => state
)
export const userValidate = createSelector(
    selectUser,
    (state:UserState) => state.isValidate
)