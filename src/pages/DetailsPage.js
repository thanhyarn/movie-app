import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import { Divider } from "../components/Divider";
import useFetch from "../hooks/useFetch";
import HorizontalScollCard from "../components/HorizontalScollCard";
import VideoPlay from "../components/VideoPlay";

const DetailsPage = () => {
  const params = useParams();

  const imageURL = useSelector((state) => state.movieData.imageURL);
  const { data } = useFetchDetails(`/${params.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const { data: similarData } = useFetch(
    `/${params?.explore}/${params?.id}/similar`
  );
  const { data: recommentdData } = useFetch(
    `/${params?.explore}/${params?.id}/recommendations`
  );
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  const duration = (data?.runtime / 60).toFixed(1).split(".");

  const handlePlayVideo = async (data) => {
    setPlayVideoId(data.id);
    setPlayVideo(true);
  };

  return (
    <div>
      <div className="w-full h-[400px] relative">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute w-full h-full  top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>
      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img
            src={imageURL + data?.poster_path}
            className="h-80  w-60 object-cover rounded"
          />
          <button
            onClick={() => handlePlayVideo(data)}
            className="mt-3 w-full py-2 px-4 text-center bg-white text-black rounded font-bold text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all"
          >
            Play Now
          </button>
        </div>
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            {" "}
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400">{data?.tagline}</p>
          <Divider />
          <div className="flex items-center my-3 gap-3">
            <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
            <p>View : {Number(data?.vote_count)}</p>
            <p>
              Duration: {duration[0]}h {duration[1]}m
            </p>
          </div>
          <Divider />
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
            <p>{data?.overview}</p>
            <Divider />
            <div className="flex items-center gap-3 my-3 text-center">
              <p>Status: {data?.status}</p>
              <span></span>
              <p>
                Release Date:{" "}
                {moment(data?.release_date).format("MMM Do, YYYY")}
              </p>
              <span></span>
              <p>Revenue: {Number(data?.revenue)}</p>
            </div>
            <Divider />
          </div>
          <div>
            {castData?.crew?.length > 0 && (
              <p>
                <span className="text-white">Director</span>:{" "}
                {castData.crew[0]?.name}
              </p>
            )}
          </div>
          <Divider />
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Cast:</h2>
            <div className="flex flex-wrap gap-5">
              {castData?.cast?.slice(0, 20).map((starCast, index) => {
                return (
                  <div
                    key={starCast.id + index}
                    className="flex flex-col items-center w-32"
                  >
                    <img
                      src={imageURL + starCast.profile_path}
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/128x128?text=No+Image"; // Ảnh thay thế
                      }}
                      alt={starCast.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    <div className="text-center mt-2">
                      <p className="text-white text-sm font-bold">
                        {starCast.name}
                      </p>
                      <p className="text-neutral-400 text-xs">
                        {starCast.character}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <HorizontalScollCard
          data={similarData}
          heading={"Similar " + params?.explore}
          media_type={params?.explore}
          title="Similar Movies"
        />
        <HorizontalScollCard
          data={recommentdData}
          title="Recommendations"
          heading={"Recommendation " + params?.explore}
        />
      </div>
      {playVideo && (
        <VideoPlay
          data={playVideoId}
          close={() => setPlayVideo(false)}
          media_type={params?.explore}
        />
      )}
    </div>
  );
};

export default DetailsPage;
