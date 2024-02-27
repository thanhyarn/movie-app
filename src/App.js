import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./containers/MovieDetails";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";

import Home from "./containers/Home.js";
import PopularMovies from "./containers/PopularMovies";
import NowPlaying from "./containers/NowPlaying";
import TopRated from "./containers/TopRated";
import Upcoming from "./containers/Upcoming";
import SearchResults from "./containers/SearchResults.js";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Layout theme={theme} setTheme={setTheme}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/popular" element={<PopularMovies />}></Route>
          <Route path="/now-playing" element={<NowPlaying />}></Route>
          <Route path="/top-rated" element={<TopRated />}></Route>
          <Route path="/upcoming" element={<Upcoming />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
