import React from 'react'
import './UserDetails.css'
import userImage from '../../Assets/user.png'

export default function UserDetails() {
  return (
    <div className='userDetails'>
      <div className="user">
        <div className="user-info">
            <div className="user-image">
              <img src={userImage} alt="" />
            </div>
            <div className="user-information"></div>
        </div>
        <div className="wheather-details">
          <div className="wheather-title">
              <h1>2-20-2023</h1>
              <h1>07:35 PM  </h1>
          </div>
        </div>
      </div>
      <div className="mountain">
          
      </div>
    </div>
  )
}
