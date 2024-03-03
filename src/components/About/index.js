import React from "react";
import Poster from "../images/poster4.jpg";
import "./style.css";

const About = () => {
  return (
    <section className="about">
      <div className="main-img">
        <img src={Poster} />
      </div>
      <div className="text">
        <h4>About</h4>
        <h1>The Movie App - Unlimited Films</h1>
        <hr />
        <p>
          Discover a world of cinematic treasures with The Movie App - Unlimited
          Films. Stream timeless classics to the latest blockbusters in HD
          quality on any device. Personalized recommendations, community
          reviews, and seamless navigation await. Start your cinematic adventure
          today!
        </p>

        <div className="last-text">
          <div className="text1">
            <h3>10k+</h3>
            <h5>Movies</h5>
          </div>
          <div className="text2">
            <h3>120M+</h3>
            <h5>Views</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
