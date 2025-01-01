import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header"; // Correct import for Header
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/MovieSlice";

function App() {
  const dispatch = useDispatch()
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");

      dispatch(setBannerData(response.data.results));

      console.log("response", );
    } catch (error) {
      console.log("error ", error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const reponse = await axios.get("/configuration")
      
      dispatch(setImageURL(reponse.data.images.secure_base_url+"original"))
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchTrendingData()
    fetchConfiguration()
  },[])
  return (
    <main className="pb-14 lg:pb-0 ">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
