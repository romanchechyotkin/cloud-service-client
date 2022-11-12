import {UserSchema} from "entity/User";
import {FileSchema} from "entity/File";
import {UploaderSchema} from "entity/Uploader";

export interface StateSchema {
    user: UserSchema,
    file: FileSchema,
    uploader: UploaderSchema
}
