import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
// import { searchMovies, resetState } from "../redux/search";
import Loader from "../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography } from "@mui/material";
import Movies from "../components/Movies";
import { getSearchMovies, resetState } from "../redux/movies";

const SearchResults = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");

  console.log(123);
  console.log(searchTerm);
  const { movies } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getSearchMovies(searchTerm));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const loadMore = () => {
    if (movies.hasMore) {
      dispatch(getSearchMovies(searchTerm, movies.page + 1)); // Truyền searchTerm vào searchMovies
    }
  };

  return movies.page === 0 && movies.isFetching ? (
    <Loader />
  ) : (
    <>
      <Typography component="h2" variant="h3" gutterBottom={true}>
        Top Rated Movies
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

export default SearchResults;
