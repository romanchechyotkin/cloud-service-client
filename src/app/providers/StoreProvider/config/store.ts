import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from "./StateSchema";
import {userReducer} from "entity/User";
import {fileReducer} from "entity/File";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        file: fileReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState
    })
}
