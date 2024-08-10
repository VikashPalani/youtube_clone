import React from 'react'

const VideoCard = ({info}) => {
    const{snippet,statistics} = info;
    const{title,channelTitle,thumbnails} = snippet;

  return (
    <div className="p-2 m-2 w-[272px] h-[400px] shadow-lg">
      <img 
        alt='thumbnail'
        className='rounded-lg'
        src={thumbnails.standard.url}
    />
      <ul>
        <li className='font-bold py-2 break-words'>{title}</li>
        <li className='font-semibold'>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
};

export const AdVideoCard = ({info}) => {
  return (
    <div className="border border-red-800">
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
