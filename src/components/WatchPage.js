import React, { useEffect } from 'react'
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const WatchPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    },[]);

  return (
    <div>
      <h1> Watch Page </h1>
    </div>
  )
}

export default WatchPage
