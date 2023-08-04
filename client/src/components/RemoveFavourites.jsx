import React from 'react'
import { BsFillHeartFill } from "react-icons/bs";

const RemoveFavourites = () => {
  return (
    <>
    <span className='mr-2'>Remove from favourites</span>
    <BsFillHeartFill className='text-danger' />
    </>
  )
}

export default RemoveFavourites