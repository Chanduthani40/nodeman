import React from "react";
import Menu from "../components/Menu/Menu";
import "../App.css";
import NodeManMiddlePart from "../components/NodeManMiddlePart/NodeManMiddlePart";
import NodeManRight from "../components/NodeManRightPart/NodeManRight";
const Main = ({contentPost,setContentPost}) => {
  return (
    <main>
      <div className="container">
        <Menu></Menu>
        <NodeManMiddlePart contentPost={contentPost} setContentPost={setContentPost}></NodeManMiddlePart>
        <NodeManRight />
      </div>
    </main>
  );
};

export default Main;
