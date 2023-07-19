import React from 'react'
import NodeManChatCard from './NodeManChatCard/NodeManChatCard'
import NodeManProfileRequests from './NodeManProfileRequests/NodeManProfileRequests'
const NodeManRight = () => {
  return (
    <div className='right'>
      <NodeManChatCard />
      <NodeManProfileRequests />
      
    </div>
  )
}

export default NodeManRight
