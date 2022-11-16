import type {AlertSchema} from "./model/types/alertSchema";
import {alertSlice, alertActions, alertReducer} from "./model/slice/alertSlice";
import {getAlert} from "./model/selectors/getAlert/getAlert";

export {
    AlertSchema,
    alertSlice,
    alertActions,
    alertReducer,
    getAlert
}
