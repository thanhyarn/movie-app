import React, { useEffect, useState } from "react";
import { getNowPlayingMovies, resetState } from "../../redux/movies";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import SwiperCore, { AutoPlay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Slide = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((store) => store);

  const [randomMovies, setRandomMovies] = useState([]);

  useEffect(() => {
    dispatch(getNowPlayingMovies());

    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  useEffect(() => {
    // Lấy ra 4 phần tử ngẫu nhiên từ mảng movies
    const getRandomMovies = async () => {
      if (movies.length > 0) {
        const shuffledMovies = movies.sort(() => 0.5 - Math.random());
        const selectedMovies = shuffledMovies.slice(0, 4);
        await setRandomMovies(selectedMovies);
        console.log(randomMovies);
      }
    };

    getRandomMovies();
  }, [movies]);

  return (
    <div>
      <h2>Random Movies</h2>
      <ul>
        {randomMovies.map((movie, index) => (
          <li key={index}>
            <p>Title: {movie.title}</p>
            <p>Release Date: {movie.releaseDate}</p>
            {/* Thêm các thông tin khác cần thiết */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slide;
