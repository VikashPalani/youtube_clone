import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
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
        <li className='font-bold py-2'>{title}</li>
        <li className='font-semibold'>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
