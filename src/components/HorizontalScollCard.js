import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import "../App.css";

const HorizontalScollCard = ({ data = [], heading, trending, media_type }) => {
  const containerRef = useRef();

  const smoothScroll = (distance) => {
    const container = containerRef.current;
    const startPosition = container.scrollLeft;
    const endPosition = startPosition + distance;
    const duration = 500; // Thời gian di chuyển (ms)
    let startTime = null;

    const scrollAnimation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Đảm bảo không vượt quá 1
      const ease = progress * (2 - progress); // Hàm easing (ease-out)

      container.scrollLeft =
        startPosition + (endPosition - startPosition) * ease;

      if (elapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };

  const handleNext = () => {
    smoothScroll(300); // Cuộn sang phải 300px
  };

  const handlePrevious = () => {
    smoothScroll(-300); // Cuộn sang trái 300px
  };

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">
        {heading}
      </h2>
      <div className="relative">
        {/* Container của các Card */}
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-x-scroll relative z-10 scrollbar-none"
        >
          {data.map((data, index) => (
            <Card
              key={data.id + "heading" + index}
              data={data}
              index={index + 1}
              trending={trending}
              media_type={media_type}
            />
          ))}
        </div>

        {/* Nút Left và Right */}
        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
          <button
            onClick={handlePrevious}
            className="bg-white p-3 text-black rounded-full -ml-2 z-10"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-white p-3 text-black rounded-full -mr-2 z-10"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScollCard;
