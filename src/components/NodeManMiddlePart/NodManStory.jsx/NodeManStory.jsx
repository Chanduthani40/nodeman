import React from "react";
import NodeManStoryDetailsObj from "../../../objects/NodeManStoryDetailsObj";

const NodeManStory = () => {
  return (
    <div class="stories">
      {NodeManStoryDetailsObj.map((eachStoryDetails, index) => (
        <div class="story" style={{backgroundImage: eachStoryDetails.storyContent}} key={index}>
          <div class="profile-photo">
            <img src={eachStoryDetails.profile} alt="" />
          </div>
          <p class="name">{eachStoryDetails.profileName}</p>
        </div>
      ))}
    </div>
  );
};

export default NodeManStory;
