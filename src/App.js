import React from 'react'
import './App.css'
import Header from './components/header/header.js'
import Sidebar from './components/sidebar/sidebar.js'
import Widget from './components/widget/widget.js'
import FeedR from './components/feed/FeedR.js'
function App() {
  return (
    <div className='app'>
    {/* Header section */}
    <Header />
    {/* Sidebar */}
    <div className='section'>
      <Sidebar />
      <FeedR />
      <Widget />
    </div>
    </div>
  )
}

export default App
