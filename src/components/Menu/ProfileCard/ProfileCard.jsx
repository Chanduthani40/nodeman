import React from 'react'
import profile1 from "../../../assets/images/profile-1.jpg"
import "../../../App.css"



const ProfileCard = () => {
  return (
    <a className="profile">
    <div className="profile-photo">
      <img src={profile1} alt="" />
    </div>
    <div className="handle">
      <h4>Diana Ayi</h4>
      <p className="text-muted">
        @dayi
      </p>
    </div>
  </a>
  )
}

export default ProfileCard
