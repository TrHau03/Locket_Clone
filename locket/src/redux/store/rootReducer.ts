import { combineReducers } from '@reduxjs/toolkit'
import appReducer from '../appReducer'

export const rootReducer = combineReducers({
    appReducer: appReducer,
})
export type RootState = ReturnType<typeof rootReducer>
