import React from "react";
import NodeManProfileRequestsObj from "../../../objects/NodeManProfileRequestsObj";
const NodeManProfileRequests = () => {
  return (
    <div class="friend-request">
      <h4>Requests</h4>
      {NodeManProfileRequestsObj.map((EachRequest, index) => (
        <div class="request" key={index}>
          <div class="info">
            <div class="profile-photo">
              <img src={EachRequest.ProfileRequestPhoto} alt="" />
            </div>
            <div>
              <h3>{EachRequest.ProfileRequstName}</h3>
              <p class="text-muted">{EachRequest.NoOfMutuals}</p>
            </div>
          </div>
          <div class="action">
            <button class="btn btn-primary">accept</button>
            <button class="btn">decline</button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default NodeManProfileRequests;
