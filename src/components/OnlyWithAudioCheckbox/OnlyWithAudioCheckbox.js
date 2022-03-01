import React from 'react'
import CheckImg from '../../resources/images/check.png'
import '../../pages/JoinRoomPage/JoinRoomPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { setConnectOnlyWithAudio } from '../../actions/actions'
const OnlyWithAudioCheckbox = () => {
  const dispatch = useDispatch()

  const handleConnectionTypeChange = (e) => {
    dispatch(setConnectOnlyWithAudio(!connectOnlyWithAudio))
  }

  const state = useSelector((state) => state.appReducer)
  const { connectOnlyWithAudio } = state

  return (
    <div className='checkbox_container'>
      <div className='checkbox_connection' onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && (
          <img className='checkbox_image' src={CheckImg} alt='checkbox'></img>
        )}
      </div>
      <p className='checkbox_container_paragraph'>Audio Only</p>
    </div>
  )
}

export default OnlyWithAudioCheckbox
