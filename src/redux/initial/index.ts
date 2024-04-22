import { createSlice } from '@reduxjs/toolkit'
import { data } from 'dataTemp'

const initialState = {
    //  data: data
}

export const appSlice = createSlice({
    name: 'init',
    initialState: initialState,
    reducers: {},
})

export const {} = appSlice.actions

export default appSlice.reducer
