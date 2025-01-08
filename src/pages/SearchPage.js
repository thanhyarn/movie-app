import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { FaPager } from "react-icons/fa";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`search//multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPage(1);
    setData([]);
    fetchData();
  }, [location?.search]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className="pt-16">
      <div className="lg:hidden my-2 mx-1 sticky top-[70px] z-50 bg-white p-2 rounded-full">
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => navigate(`search?q=${e.target.value}`)}
          className="px-4 py-1text-lg  w-full bg-white rounded-full"
        />
      </div>

      <div className=" containeer mx-auto pt-4">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3"></h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-5 gap-6">
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "search"}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
