import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
    <div className='bg-orange-500 py-5 text-black text-3xl text-center'>
      User : {userId}
    </div>
  )
}

export default User
