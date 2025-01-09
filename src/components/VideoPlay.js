import React from "react";
import { IoClose } from "react-icons/io5";
import useFetchDetails from "../hooks/useFetchDetails";

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(`/${media_type}/${data}/videos`);

  return (
    <section className="fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative">
        <button
          onClick={close}
          className="absolute -right-1 -top-6 text-3xl z-50 text-white"
        >
          <IoClose />
        </button>
        {videoData?.results?.length > 0 ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoData.results[0].key}`}
            className="w-full h-full"
            title="Video Player"
            allowFullScreen
          />
        ) : (
          <div className="flex justify-center items-center h-full text-white">
            No video available
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoPlay;
