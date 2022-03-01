import {
  SET_IS_ROOM_HOST,
  SET_IDENTITY,
  SET_CONNECT_ONLY_WITH_AUDIO,
  SET_ROOM_ID,
} from '../constants/constants'

export const setIdentity = (identity) => (dispatch) => {
  dispatch({
    type: SET_IDENTITY,
    payload: identity,
  })
}

export const setIsRoomHost = (isRoomHost) => (dispatch) => {
  dispatch({
    type: SET_IS_ROOM_HOST,
    payload: isRoomHost,
  })
}

export const setConnectOnlyWithAudio = (onlyWithAudio) => (dispatch) => {
  dispatch({
    type: SET_CONNECT_ONLY_WITH_AUDIO,
    payload: onlyWithAudio,
  })
}

export const setRoomId = (roomId) => (dispatch) => {
  dispatch({
    type: SET_ROOM_ID,
    payload: roomId,
  })
}
