import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularMovies from "./containers/PopularMovies";
import MovieDetails from "./containers/MovieDetails";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";

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
          <Route path="/" element={<PopularMovies />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
