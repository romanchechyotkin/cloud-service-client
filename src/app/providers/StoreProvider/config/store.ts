import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from "./StateSchema";
import {userReducer} from "entity/User";
import {fileReducer} from "entity/File";
import {uploaderReducer} from "entity/Uploader";
import {loaderReducer} from "entity/Loader";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        file: fileReducer,
        uploader: uploaderReducer,
        loader: loaderReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState
    })
}
