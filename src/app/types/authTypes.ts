export enum Auth {
    REGISTRATION='registration',
    LOGIN='login'
}

export interface AuthFormProps {
    type: Auth.LOGIN | Auth.REGISTRATION
}
