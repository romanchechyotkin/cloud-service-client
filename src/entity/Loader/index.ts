import { getLoader } from './model/selectors/getLoader/getLoader'
import { loaderActions, loaderSlice } from './model/slice/loaderSlice'
import { loaderReducer } from './model/slice/loaderSlice'
import type {LoaderSchema} from './model/types/loaderSchema'

export {
    LoaderSchema,
    loaderSlice,
    loaderActions,
    loaderReducer,
    getLoader
}
