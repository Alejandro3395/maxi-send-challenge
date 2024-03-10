import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoadingState, setHasErrorState } from "../../store/appStateSlice";
import { addSeries } from "../../store/series/seriesSlice";
import styles from "./SeriesPage.module.css";
import Card from "../../components/Card";

function SeriesPage() {
  const seriesData = useSelector((state) => state.series.value);
  const dispatch = useDispatch();
  const [seriesList, setSeriesList] = useState([]);

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
      dispatch(setLoadingState(true));
      let filteredData;

      try {
        const data = (await import("../../assets/sample.json")).entries;
        filteredData = data
          .filter(
            (item) => item.programType === "series" && item.releaseYear >= 2010
          )
          .sort(sortByTitle);
          dispatch(addSeries(filteredData));
      } catch (error) {
        dispatch(setHasErrorState(true));
      }
      
      setTimeout(() => {
        dispatch(setLoadingState(false));
      }, 1000);
    }

    // If data has been lodaded then don't fetch again.
    if (!seriesData) {
      fetchData();
    }
  });

  useEffect(() => {
    if (seriesData) {
      buildSeriesList();
    }
  }, [seriesData]);

  const buildSeriesList = () => {
    setSeriesList(
      seriesData.slice(0, 20).map((serie, index) => <Card key={index} programData={serie}></Card>)
    );
  };

  return <div className={styles.seriesListContainer}>{seriesList}</div>;
}

export default SeriesPage;
