import axios from 'axios'

export const checkIfRoomExists = async (roomId) => {
  const response = await axios.get(
    `https://zoom-2890-dev.twil.io/room-exists?roomId=${roomId}`
  )
  return response.data.roomExists
}
