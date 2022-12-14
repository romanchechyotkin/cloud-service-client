import {UserSchema} from "entity/User";
import {FileSchema} from "entity/File";
import {UploaderSchema} from "entity/Uploader";
import {LoaderSchema} from "entity/Loader";
import {AlertSchema} from "entity/Alert";

export interface StateSchema {
    user: UserSchema,
    file: FileSchema,
    uploader: UploaderSchema,
    loader: LoaderSchema,
    alert: AlertSchema
}
