import { createSlice } from '@reduxjs/toolkit'

export const seriesSlice = createSlice({
  name: 'series',
  initialState: {
    value: undefined,
  },
  reducers: {
    addSeries: (state, action) => {
        if (state.value) {
          state.value = action.payload
        } else {
          state.value = action.payload
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addSeries } = seriesSlice.actions

export default seriesSlice.reducer