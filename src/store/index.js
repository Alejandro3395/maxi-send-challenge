import { configureStore } from "@reduxjs/toolkit";
import seriesSlice from './series/seriesSlice'
import moviesSlice from "./movies/moviesSlice";
import appStateSlice from "./appStateSlice";

export default configureStore({
    reducer: {
        series: seriesSlice,
        movies: moviesSlice,
        appState: appStateSlice
    }
})