import {createDomain} from "effector";

const auth = createDomain()

export const setAuth = auth.createEvent<boolean>()
export const setAuthEmail = auth.createEvent<string>()

export const $auth = auth.createStore<boolean>(false)
    .on(setAuth, (_, value) => value)

export const $authEmail = auth.createStore<string>('')
    .on(setAuthEmail, (_, value) => value)
