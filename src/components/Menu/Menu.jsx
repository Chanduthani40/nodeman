import React from 'react'
import ProfileCard from './ProfileCard/ProfileCard'
import "../../App.css"
import SideBar from './SideBar/SideBar'

const Menu = () => {
  return (
    <div className='left'>
      <ProfileCard />
      <SideBar></SideBar>
      <label for="create-post" class="btn btn-primary">
        Create Post
      </label>
    </div>
  )
}

export default Menu
