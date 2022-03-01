import React from 'react'

const Input = ({ placeholder, value, changeHandler }) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={changeHandler}
      className='join_room_input'
    />
  )
}

const JoinRoomInput = ({
  nameValue,
  setNameValue,
  roomIdValue,
  setRoomIdValue,
  isRoomHost,
}) => {
  const handleRoomIdValueChange = (e) => {
    setRoomIdValue(e.target.value)
  }

  const handleNameValueChange = (e) => {
    setNameValue(e.target.value)
  }
  return (
    <div className='join_room_inputs_container'>
      {!isRoomHost && (
        <Input
          placeholder='Enter Meeting Id'
          value={roomIdValue}
          changeHandler={handleRoomIdValueChange}
        />
      )}
      <Input
        placeholder='Enter Your Name'
        value={nameValue}
        changeHandler={handleNameValueChange}
      />
    </div>
  )
}

export default JoinRoomInput
