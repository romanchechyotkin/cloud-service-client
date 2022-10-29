import { getUser } from "./model/selectors/getUser/getUser";
import { getUserIsAuth } from "./model/selectors/getUserIsAuth/getUserIsAuth";
import {userActions, userReducer, userSlice} from "./model/slice/userSlice";
import {UserSchema} from "./model/types/UserSchema";

export {
    userSlice,
    userActions,
    userReducer,
    getUser,
    getUserIsAuth
};

export type {UserSchema};
