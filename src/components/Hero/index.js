import React, { useEffect, useState } from "react";
import { getNowPlayingMovies, resetState } from "../../redux/movies";
import { useDispatch, useSelector } from "react-redux";

import "./Hero.css";

import Poster1 from "../../slideImg/poster1.jpg";
import Poster2 from "../../slideImg/poster2.jpg";
import Poster3 from "../../slideImg/poster3.jpg";

const listContent = [
  {
    content:
      "Seek the magic in every moment with thousands of diverse and rich films. Explore and enjoy your passion for cinema with us",
    image: Poster1,
  },
  {
    content:
      "Discover outstanding film collections and easily find your favorite movies. Experience cinema at home with high quality",
    image: Poster2,
  },
  {
    content:
      "Pause and savor the special moments of life through the lens of cinema. Join us on this journey and discover the marvelous stories that the world of film brings",
    image: Poster3,
  },
];

const Hero = () => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Tăng index lên 1
      setIndex((prevIndex) => (prevIndex + 1) % 3); // Modulo 3 để reset về 0 nếu vượt quá 2
    }, 3000); // 3 giây
    // Xóa interval khi component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2>The Movie App - React - Redux</h2>

        <p>{listContent[index].content}</p>
      </div>

      <div className="hero-img">
        <img src={listContent[index].image} />
      </div>
    </div>
  );
};

export default Hero;
