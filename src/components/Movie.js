import React from "react";
import { Grid, Typography } from "@mui/material";
import { IMAGES_PATH, COVER_PLACEHOLDER } from "../config";
import { styled } from "@mui/system";
import Movies from "./Movies";
import DetailBanner from "../components/DetailBanner";

const Movie = ({ movie, genres }) => {
  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60) + "h";
    const minutes = (runtime % 60) + "m";

    return `${hours} ${minutes}`;
  };

  console.log(movie);

  return (
    <>
      {movie.recommendations && (
        <>
          <DetailBanner movie={movie} />
          {/* <Typography component="h2" variant="h4" gutterBottom={true}>
            Recommended
          </Typography> */}
          {/* <Movies movies={movie.recommendations} genres={genres} /> */}
        </>
      )}
    </>
  );
};

export default Movie;
