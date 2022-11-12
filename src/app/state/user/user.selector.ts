import { createSelector } from "@ngrx/store";
import { UserStore } from "src/app/models";
import { AppState } from "../app.state";






const selectUser = (state:AppState) => state.user;
export const selectedUser = createSelector(
    selectUser,
    (state:UserStore) => state
)
export const userValidate = createSelector(
    selectUser,
    (state:UserStore) => state.isActive
)