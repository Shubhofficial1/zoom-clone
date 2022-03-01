import React, { useEffect } from 'react'
import './IntroductionPage.css'
import logo from '../../resources/images/logo.png'
import ConnectingButtons from '../../components/ConnectingButtons/ConnectingButtons'
import { useDispatch } from 'react-redux'
import { setIsRoomHost } from '../../actions/actions'

const IntroductionPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setIsRoomHost(false))
  })
  return (
    <div className='introduction_page_container'>
      <div className='introduction_page_panel'>
        <img src={logo} alt='logoimage' className='introduction_page_image' />
        <ConnectingButtons />
      </div>
    </div>
  )
}

export default IntroductionPage
