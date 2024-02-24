import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingMovies, resetState } from "../redux/movies";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import { Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const Upcoming = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getUpcomingMovies());

    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const loadMore = () => {
    if (movies.hasMore) {
      dispatch(getUpcomingMovies(movies.page + 1));
    }
  };

  return movies.page === 0 && movies.isFetching ? (
    <Loader />
  ) : (
    <>
      <Typography component="h2" variant="h3" gutterBottom={true}>
        Upcoming Movies
      </Typography>
      <InfiniteScroll
        dataLength={movies.totalResults}
        next={loadMore}
        hasMore={movies.hasMore}
        loader={<Loader />}
        style={{ overflow: "hidden" }}
        endMessage={<p>Yay! You have seen it all!</p>}
      >
        <Movies movies={movies} genres={genres} />
      </InfiniteScroll>
    </>
  );
};

export default Upcoming;
