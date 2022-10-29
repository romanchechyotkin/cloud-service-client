import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from "./StateSchema";
import {userReducer} from "entity/User/model/slice/userSlice";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer
    }

    return configureStore({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState
    })
}
