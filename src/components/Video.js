import React from "react";

const Video = ({ slide }) => {
  const { videos } = slide;

  return (
    <div>
      <div className="video-container">
        {videos.map((video, index) => (
          <div key={index} className="video-wrapper">
            <h2>{video.alt}</h2>
            <iframe title={video.alt} src={video.src} allowFullScreen />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
