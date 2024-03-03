import React from "react";
import "./style.css";

const Services = () => {
  const styleOb1 = {
    "--clr": "#89ec5b", // định nghĩa thuộc tính clr với giá trị #89ec5s
  };
  const styleOb2 = {
    "--clr": "#eb5ae5", // định nghĩa thuộc tính clr với giá trị #89ec5s
  };
  const styleOb3 = {
    "--clr": "#5b98eb", // định nghĩa thuộc tính clr với giá trị #89ec5s
  };
  return (
    <div className="services-container">
      <div className="box" style={styleOb1}>
        <div className="content">
          <div className="icon"></div>
          <div className="text">
            <h3>Upcoming</h3>
            <p>
              Lorem ipsum dolor , sit amet consectetur adipisicing elit. Id, qui
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
      <div className="box" style={styleOb2}>
        <div className="content">
          <div className="icon"></div>
          <div className="text">
            <h3>Popular</h3>
            <p>
              Lorem ipsum dolor , sit amet consectetur adipisicing elit. Id, qui
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
      <div className="box" style={styleOb3}>
        <div className="content">
          <div className="icon"></div>
          <div className="text">
            <h3>Top Rated</h3>
            <p>
              Lorem ipsum dolor , sit amet consectetur adipisicing elit. Id, qui
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
