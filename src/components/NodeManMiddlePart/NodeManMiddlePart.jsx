import React from 'react'
import NodeManStory from './NodManStory.jsx/NodeManStory'
import CreatePostCard from './CreatePostCard/CreatePostCard'
import NodeManFeed from './NodeManFeeds/NodeManFeed'

const NodeManMiddlePart = ({contentPost,setContentPost}) => {
  return (
    <div className='middle'>
      <NodeManStory></NodeManStory>
      <CreatePostCard contentPost={contentPost} setContentPost={setContentPost}></CreatePostCard>
      <NodeManFeed></NodeManFeed>
    </div>
  )
}

export default NodeManMiddlePart
