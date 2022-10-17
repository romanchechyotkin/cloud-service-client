import {createDomain} from "effector";


const auth = createDomain()

export const setAuth = auth.createEvent<boolean>()

export const $auth = auth.createStore<boolean>(false)
    .on(setAuth, (_, value) => value)
