export interface UserSchema {
    isAuth: boolean;
    email: string;
    currentUser: User | null;
}

export interface User {
    _id: string;
    email: string;
    password: string;
    avatar: string;
    diskSpace: number;
    usedSpace: number;
}
