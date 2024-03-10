import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
    name: 'appState',
    initialState: {
        selectedPage: 'titles',
        isLoading: false,
        hasError: false
    },
    reducers: {
        setSelectedPage: (state, action) => {
            const validValues = ['titles','series', 'movies'];
            if (validValues.includes(action.payload)) {
                state.selectedPage = action.payload;
            }
        },
        setLoadingState: (state, action) => {
            if (typeof action.payload === 'boolean') {
                state.isLoading = action.payload;
            }
        },
        setHasErrorState: (state, action) => {
            if (typeof action.payload === 'boolean') {
                state.hasError = action.payload;
            }
        }
    }
})

export const { setSelectedPage, setLoadingState, setHasErrorState } = appStateSlice.actions;

export default appStateSlice.reducer;