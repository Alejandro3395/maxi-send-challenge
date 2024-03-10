import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPage, setHasErrorState } from "./store/appStateSlice";

function App() {
  const selectedPage = useSelector((state) => state.appState.selectedPage);
  const isLoading = useSelector((state) => state.appState.isLoading);
  const hasError = useSelector((state) => state.appState.hasError);
  const dispatch = useDispatch()

  function onPageSelected(pageName) {
    dispatch(setSelectedPage(pageName));
  }

  function onHasErrorState(hasError) {
    dispatch(setHasErrorState(hasError))
  }

  return (
    <div className={styles.app}>
      <Header selectedPage={selectedPage} setSelectdPageHandler={onPageSelected} setHasErrorStateHandler={onHasErrorState}></Header>
      <div className={styles.appContent}>
        {isLoading ? (
          <div>Loading content...</div>
        ) : hasError ? (
          <div>Oops, something went wrong...</div>
        ) : (
          <Content pageSelected={selectedPage} setSelectedPageHandler={onPageSelected}></Content>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
