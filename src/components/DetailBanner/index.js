import React from "react";
import PosterFallback from "../../assets/no-poster.png";
import dayjs from "dayjs";
import "./style.css";
import { CiPlay1 } from "react-icons/ci";

const DetailBanner = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <figure className="movie-detail-banner">
        <img src="./assets/images/movie-4.png" alt="Free guy movie poster" />
        <button className="play-btn">
          <ion-icon name="play-circle-outline" />
        </button>
      </figure>
      <div className="movie-detail-content">
        <p className="detail-subtitle">New Episodes</p>
        <h1 className="h1 detail-title">
          Free <strong>Guy</strong>
        </h1>
        <div className="meta-wrapper">
          <div className="badge-wrapper">
            <div className="badge badge-fill">PG 13</div>
            <div className="badge badge-outline">HD</div>
          </div>
          <div className="ganre-wrapper">
            <a href="#">Comedy,</a>
            <a href="#">Action,</a>
            <a href="#">Adventure,</a>
            <a href="#">Science Fiction</a>
          </div>
          <div className="date-time">
            <div>
              <ion-icon name="calendar-outline" />
              <time dateTime={2021}>2021</time>
            </div>
            <div>
              <ion-icon name="time-outline" />
              <time dateTime="PT115M">115 min</time>
            </div>
          </div>
        </div>
        <p className="storyline">
          A bank teller called Guy realizes he is a background character in an
          open world video game called Free City that will soon go offline.
        </p>
        <div className="details-actions">
          <button className="share">
            <ion-icon name="share-social" />
            <span>Share</span>
          </button>
          <div className="title-wrapper">
            <p className="title">Prime Video</p>
            <p className="text">Streaming Channels</p>
          </div>
          <button className="btn btn-primary">
            <ion-icon name="play" />
            <span>Watch Now</span>
          </button>
        </div>
        <a
          href="./assets/images/movie-4.png"
          download=""
          className="download-btn"
        >
          <span>Download</span>
          <ion-icon name="download-outline" />
        </a>
      </div>
    </>
  );
};

export default DetailBanner;
