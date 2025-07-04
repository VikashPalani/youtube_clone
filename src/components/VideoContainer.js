import React, { useState, useEffect } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, {AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videos,setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className='flex flex-wrap'>
      {videos.map(video => (
        <Link key={video.id} to = {"/watch?v=" + video.id}> 
          <VideoCard key={video.id} info={video}/>
        </Link>
      ))}
      {videos[49] && <AdVideoCard info={videos[49]} />}
    </div>
  );
};

export default VideoContainer;
