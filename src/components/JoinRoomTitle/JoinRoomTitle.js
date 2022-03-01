import React from 'react'
import '../../pages/JoinRoomPage/JoinRoomPage.css'
const JoinRoomTitle = ({ isRoomHost }) => {
  const titleText = isRoomHost ? 'Host Meeting' : 'Join Meeting'
  return <div className='join_room_title'>{titleText}</div>
}

export default JoinRoomTitle
