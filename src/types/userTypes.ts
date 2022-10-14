export interface UserState {
    currentUser: User | {}
    isAuth: boolean
}

export enum UserActionsTypes {
    SET_USER='SET_USER',
}

export interface SET_USER {
    type: UserActionsTypes.SET_USER;
    payload?: any;
}

export type UserAction = SET_USER

export interface User {
    email: string;
    password: string;
    diskSpace: number;
    usedSpace: number;
    _id: string
}
