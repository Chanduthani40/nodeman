import React from 'react'

const NotificationPopUp = () => {
  return (
    <div className="notification-popup">
    <div>
      <div className="profile-photo">
        <img src="/code/profile-2.jpg" alt="" />
      </div>
      <div className="notifications-body">
        <b>tanuj reddy </b>accepted your friend request
        <small class="text-muted"> 2DAYS AGO</small>
      </div>
    </div>
    <div>
      <div className="profile-photo">
        <img src="/code/profile-3.jpg" alt="" />
      </div>
      <div className="notifications-body">
        <b>chandhu </b>accepted your friend request
        <small className="text-muted"> 2DAYS AGO</small>
      </div>
    </div>

    <div>
      <div className="profile-photo">
        <img src="/code/profile-4.jpg" alt="" />
      </div>
      <div className="notifications-body">
        <b>uday kiran </b>accepted your friend request
        <small className="text-muted"> 2DAYS AGO</small>
      </div>
    </div>
    <div>
      <div className="profile-photo">
        <img src="/code/profile-5.jpg" alt="" />
      </div>
      <div className="notifications-body">
        <b>amaan bhai </b>accepted your friend request
        <small className="text-muted"> 2DAYS AGO</small>
      </div>
    </div>
  </div>
  )
}

export default NotificationPopUp
