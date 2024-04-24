import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    mode: 'light',
    language: 'en',
}

export const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setMode: (state, action) => {
            state.mode = action.payload
        },
    },
})

export const { setLoading, setLanguage, setMode } = appSlice.actions

export default appSlice.reducer
