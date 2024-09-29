import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header'
import { Navigate, useNavigate } from 'react-router-dom'
import Section from './Components/section'

function App() {
  return (
    <>
      <Header/>
      <Section/>
    </>
  )
}

export default App
