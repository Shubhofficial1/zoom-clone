import React, { useEffect, useState } from 'react'
import './JoinRoomPage.css'
import { useLocation } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { setIsRoomHost } from '../../actions/actions'
import JoinRoomTitle from '../../components/JoinRoomTitle/JoinRoomTitle'
import JoinRoomContent from '../../components/JoinRoomContent/JoinRoomContent'
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay'

const JoinRoomPage = () => {
  const { search } = useLocation()
  const dispatch = useDispatch()

  const state = useSelector((state) => state.appReducer)
  // const { identity, isRoomHost } = state
  const { isRoomHost } = state

  useEffect(() => {
    const isHost = search ? search.split('=')[1] : false
    if (isHost) {
      dispatch(setIsRoomHost(true))
    }
  }, [search, dispatch])

  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false)

  return (
    <div className='join_room_page_container'>
      <div className='join_room_page_panel'>
        <JoinRoomTitle isRoomHost={isRoomHost} />
        <JoinRoomContent
          isRoomHost={isRoomHost}
          setShowLoadingOverlay={setShowLoadingOverlay}
        />
        {showLoadingOverlay && <LoadingOverlay />}
      </div>
    </div>
  )
}

export default JoinRoomPage
