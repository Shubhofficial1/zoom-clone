import {
  SET_IS_ROOM_HOST,
  SET_IDENTITY,
  SET_CONNECT_ONLY_WITH_AUDIO,
  SET_ROOM_ID,
} from '../constants/constants'

const reducer = (
  state = {
    identity: '',
    isRoomHost: false,
    connectOnlyWithAudio: false,
    roomId: null,
  },
  action
) => {
  switch (action.type) {
    case SET_IDENTITY:
      return {
        ...state,
        identity: action.payload,
      }
    case SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.payload,
      }

    case SET_CONNECT_ONLY_WITH_AUDIO:
      return {
        ...state,
        connectOnlyWithAudio: action.payload,
      }

    case SET_ROOM_ID:
      return {
        ...state,
        roomId: action.payload,
      }
    default:
      return state
  }
}

export default reducer
