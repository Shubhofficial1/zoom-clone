import './App.css'
import { Routes, Route } from 'react-router-dom'
import JoinRoomPage from './pages/JoinRoomPage/JoinRoomPage'
import RoomPage from './pages/RoomPage/RoomPage'
import IntroductionPage from './pages/IntroductionPage/IntroductionPage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<IntroductionPage />} />
      <Route path='/room' element={<RoomPage />} />
      <Route path='/join-room' element={<JoinRoomPage />} />
    </Routes>
  )
}

export default App
