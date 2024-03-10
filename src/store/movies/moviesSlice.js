import { createSlice } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    value: undefined,
  },
  reducers: {
    addMovies: (state, action) => {
        if (state.value) {
          state.value = action.payload
        } else {
          state.value = action.payload
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMovies } = moviesSlice.actions

export default moviesSlice.reducer