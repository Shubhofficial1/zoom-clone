import React, { useState } from 'react'
import JoinRoomButtons from '../JoinRoomButtons/JoinRoomButtons'
import JoinRoomInput from '../JoinRoomInput/JoinRoomInput'
import OnlyWithAudioCheckbox from '../OnlyWithAudioCheckbox/OnlyWithAudioCheckbox'
import RoomNotFoundMessage from '../RoomNotFoundMessage/RoomNotFoundMessage'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setIdentity, setRoomId } from '../../actions/actions'
import { v4 as uuidv4 } from 'uuid'
import { checkIfRoomExists } from '../../utils/twilio-utils'

const JoinRoomContent = ({ isRoomHost, setShowLoadingOverlay }) => {
  const [roomIdValue, setRoomIdValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [showRoomNotFoundMessage, setShowRoomNotFoundMessage] = useState(false)
  const dispatch = useDispatch()
  const history = useNavigate()

  const handleJoinToRoom = async (e) => {
    dispatch(setIdentity(nameValue))
    if (!isRoomHost) {
      // Check If the room exists & if yes join
      //   issue below in utils
      setShowLoadingOverlay(true)
      const roomExists = await checkIfRoomExists(roomIdValue)
      setShowLoadingOverlay(false)

      if (roomExists) {
        setRoomId(roomIdValue)
        dispatch(setRoomId(roomIdValue))
        history('/room')
      } else {
        setShowRoomNotFoundMessage(true)
      }
    } else {
      dispatch(setRoomId(uuidv4()))
      history('/room')
    }
  }

  return (
    <>
      <JoinRoomInput
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
      <OnlyWithAudioCheckbox />
      <RoomNotFoundMessage showRoomNotFoundMessage={showRoomNotFoundMessage} />
      <JoinRoomButtons
        isRoomHost={isRoomHost}
        handleJoinToRoom={handleJoinToRoom}
      />
    </>
  )
}

export default JoinRoomContent
