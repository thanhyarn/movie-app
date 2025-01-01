import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/collection`, {
        params: {
          query: location?.search?.slice(3),
          page: 1
        }
      })
      setData((preve) => {
        return [
          ...preve, 
          ...response.data.results
        ]
      })
    
    } catch (error) {
      console.log("error: " , error);
      
    }
  }

  useEffect(() => {
    fetchData()
  }, [location?.search])
  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Search Results
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6">
          {
            data.map((searchData,  index) => {
              return(
                <Card data={searchData} key={searchData.id+"search"} media_type={searchData.media_type} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
