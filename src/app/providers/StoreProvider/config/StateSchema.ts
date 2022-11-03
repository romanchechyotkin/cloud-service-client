import {UserSchema} from "entity/User";
import {FileSchema} from "entity/File";

export interface StateSchema {
    user: UserSchema,
    file: FileSchema,
}
