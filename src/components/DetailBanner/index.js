import React from "react";
import PosterFallback from "../../assets/no-poster.png";
import dayjs from "dayjs";
import "./style.css";

const DetailBanner = ({ movie }) => {
  return (
    <div className="detailsBanner">
      {/* <div className="backdrop-img">
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
      </div> */}

      <div className="opacity-layer">
        <div className="content">
          <div className="left">
            {movie.poster_path ? (
              <img
                className="posterImg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ) : (
              <img className="posterImg" src={PosterFallback} />
            )}
          </div>
          <div className="right">
            <div className="title">
              {`${movie.name || movie.title} (${dayjs(
                movie?.release_date
              ).format("YYYY")})`}
            </div>
            <div className="subtitle">{movie.tagline}</div>

            {/* <Genres data={_genres} /> */}

            <div className="overview">
              <div className="heading">Overview</div>
              <div className="description">{movie.overview}</div>
            </div>

            <div className="info">
              {movie.status && (
                <div className="infoItem">
                  <span className="text bold">Status: </span>
                  <span className="text">{movie.status}</span>
                </div>
              )}
              {movie.release_date && (
                <div className="infoItem">
                  <span className="text bold">Release Date: </span>
                  <span className="text">
                    {dayjs(movie.release_date).format("MMM D, YYYY")}
                  </span>
                </div>
              )}
              {movie.runtime && (
                <div className="infoItem">
                  <span className="text bold">Runtime: </span>
                  <span className="text">
                    {/* {toHoursAndMinutes(movie.runtime)} */}
                    {movie.runtime}
                  </span>
                </div>
              )}
            </div>

            {/* {director?.length > 0 && (
              <div className="info">
                <span className="text bold">Director: </span>
                <span className="text">
                  {director?.map((d, i) => (
                    <span key={i}>
                      {d.name}
                      {director.length - 1 !== i && ", "}
                    </span>
                  ))}
                </span>
              </div>
            )} */}

            {/* {writer?.length > 0 && (
              <div className="info">
                <span className="text bold">Writer: </span>
                <span className="text">
                  {writer?.map((d, i) => (
                    <span key={i}>
                      {d.name}
                      {writer.length - 1 !== i && ", "}
                    </span>
                  ))}
                </span>
              </div>
            )} */}

            {movie?.created_by?.length > 0 && (
              <div className="info">
                <span className="text bold">Creator: </span>
                <span className="text">
                  {movie?.created_by?.map((d, i) => (
                    <span key={i}>
                      {d.name}
                      {movie?.created_by.length - 1 !== i && ", "}
                    </span>
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
