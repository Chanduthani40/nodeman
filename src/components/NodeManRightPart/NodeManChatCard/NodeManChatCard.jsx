import React from "react";
import NodeManChatObj from "../../../objects/NodeManChatObj";

const NodeManChatCard = () => {
  return (
    <div class="messages">
      <div class="heading">
        <h4>Messages</h4>
        <i class="uil uil-edit"></i>
      </div>
      <div class="search-box">
        <i class="uil uil-search"></i>
        <input
          type="search"
          placeholder="Search Messages"
          id="message-search"
        />
      </div>
      <div class="category">
        <h6 class="active">Primary</h6>
        <h6>General</h6>
        <h6 class="message-request">Request(2)</h6>
      </div>
      {NodeManChatObj.map((EachChatDetails, index) => (
        <div class="message" key={index}>
          <div class="profile-photo">
            <img src={EachChatDetails.ProfilePhoto} alt="" />
            <div class="active"></div>
          </div>
          <div class="message-body">
            <h5>{EachChatDetails.ProfileName}</h5>
            <p class="text-muted">{EachChatDetails.Chat}</p>
          </div>
        </div>
      ))}
      {/* <div class="message">
        <div class="profile-photo">
          <img src="/code/profile-11.jpg" alt="" />
          <div class="active"></div>
        </div>
        <div class="message-body">
          <h5>Tanuj reddy</h5>
          <p class="text-muted">sare vastha!</p>
        </div>
      </div>
      <div class="message">
        <div class="profile-photo">
          <img src="/code/profile-12.jpg" alt="" />
          <div class="active"></div>
        </div>
        <div class="message-body">
          <h5>Raajitha</h5>
          <p class="text-bold">no!</p>
        </div>
      </div>
      <div class="message">
        <div class="profile-photo">
          <img src="/code/profile-13.jpg" alt="" />
        </div>
        <div class="message-body">
          <h5>Uday kiran</h5>
          <p class="text-bold">2 new messages</p>
        </div>
      </div>
      <div class="message">
        <div class="profile-photo">
          <img src="/code/profile-14.jpg" alt="" />
        </div>
        <div class="message-body">
          <h5>Amaan</h5>
          <p class="text-muted">etta!</p>
        </div>
      </div>
      <div class="message">
        <div class="profile-photo">
          <img src="/code/profile-15.jpg" alt="" />
        </div>
        <div class="message-body">
          <h5>Yogesh</h5>
          <p class="text-bold">anna namasthey,8 ki adda unta!</p>
        </div>
      </div>
      <div class="message">
        <div class="profile-photo">
          <img src="/code/profile-16.jpg" alt="" />
          <div class="active"></div>
        </div>
        <div class="message-body">
          <h5>Praveen</h5>
          <p class="text-bold">7 new messages</p>
        </div>
      </div> */}
    </div>
  );
};

export default NodeManChatCard;
