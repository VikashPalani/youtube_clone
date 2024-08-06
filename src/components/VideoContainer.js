import React, { useEffect } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const VideoContainer = () => {

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      VideoContainer
    </div>
  );
};

export default VideoContainer;
