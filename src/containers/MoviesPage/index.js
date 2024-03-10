import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovies } from "../../store/movies/moviesSlice";
import { setLoadingState, setHasErrorState } from "../../store/appStateSlice";
import styles from "./MoviesPage.module.css";
import Card from "../../components/Card";

function MoviesPage() {
  const moviesData = useSelector((state) => state.movies.value);
  const dispatch = useDispatch();
  const [moviesList, setMoviesList] = useState([]);

  function sortByTitle(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    async function fetchData() {
      let filteredData;
      dispatch(setLoadingState(true));
      try {
        const data = (await import("../../assets/sample.json")).entries;
        filteredData = data
        .filter(
          (item) => item.programType === "movie" && item.releaseYear >= 2010
        )
        .sort(sortByTitle);
        dispatch(addMovies(filteredData));

      } catch(error) {
        console.log(error)
        dispatch(setHasErrorState(true));
      } 
      
      // To give some time to displayed the loading message
      setTimeout(() => {
        dispatch(setLoadingState(false));
      }, 1000)
    }

    // If data has been lodaded then don't fetch again.
    if (!moviesData) {
      fetchData();
    }
  });

  useEffect(() => {
    if (moviesData) {
      buildMoviesList();
    }
  }, [moviesData]);

  const buildMoviesList = () => {
    setMoviesList(
      moviesData.slice(0, 20).map((movie, index) => <Card key={index} programData={movie}></Card>)
    );
  };

  return <div className={styles.seriesListContainer}>{moviesList}</div>;
}

export default MoviesPage;
