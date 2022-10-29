import {createSelector} from "@reduxjs/toolkit";
import {getUser} from "../getUser/getUser";
import {UserSchema} from "../../types/UserSchema";

export const getUserIsAuth = createSelector(
    getUser,
    (user: UserSchema) => user.isAuth
);
