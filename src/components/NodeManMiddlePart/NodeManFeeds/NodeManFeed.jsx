import React from "react";
import NodemanFeedObj from "../../../objects/NodemanFeedObj";

const NodeManFeed = () => {
  return (
    <div class="feeds">
      {NodemanFeedObj.map((EachNodemanFeed, index) => (
        <div class="feed" key={index}>
          <div class="head">
            <div class="user">
              <div class="profile-photo">
                <img src={EachNodemanFeed.ProfilePhoto} alt="" />
              </div>
              <div class="ingo">
                <h3>{EachNodemanFeed.ProfileName}</h3>
                <small>{EachNodemanFeed.PostedPlace}</small>
              </div>
            </div>
            <span class="edit">
              <i class="uil uil-ellipsis-h"></i>
            </span>
          </div>

          <div class="photo">
            <img src={EachNodemanFeed.PostedPhoto} alt="" />
          </div>

          <div class="action-button">
            <div class="interaction-button">
              <span>
                <i class="uil uil-heart-alt"></i>
              </span>
              <span>
                <i class="uil uil-comment-alt"></i>
              </span>
              <span>
                <i class="uil uil-share"></i>
              </span>
            </div>
            <div class="bookmark">
              <span>
                <i class="uil uil-bookmark-full"></i>
              </span>
            </div>
          </div>

          <div class="liked-by">
            {EachNodemanFeed.LikedByProfiles.map(
              (EachLikedProfileName, index) => (
                <span key={index}>
                  <img src={EachLikedProfileName} alt="" />
                </span>
              )
            )}
            <p>Liked by</p>
            <b> {EachNodemanFeed.LikedByProfileName} </b> and{" "}
            <b>{EachNodemanFeed.NoOfLikes}</b>
          </div>

          <div class="caption">
            <p>
              <b>Chanduthani</b>&#x1F60A;&#x2764;&#xFE0F;
            </p>
            <p class="hash-tag">{EachNodemanFeed.Mentioned}</p>
          </div>

          <div class="comment text-muted">
            View all {EachNodemanFeed.NoOfComments} comments
          </div>
        </div>
      ))}
    </div>
  );
};

export default NodeManFeed;
