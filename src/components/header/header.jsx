import React from 'react'
import profile1 from "../../assets/images/profile-1.jpg"
import "../../App.css"

const Header = () => {
  return (
    <nav>
    <div className="container">
      <h2 className="logo">Nomad</h2>
      <div className="search-box">
        <i className="uil uil-search"></i>
        <input type="search" placeholder="search" />
      </div>
      <div className="create">
        <label className="btn btn-primary" for="create-post">create</label>
        <div className="profile-photo">
          <img src={profile1} alt="" />
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header
