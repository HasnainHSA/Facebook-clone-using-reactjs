import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Post from './components/Post'
import Chatbar from './components/Chatbar'
// CSS file
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <div className="facebook">
      <Sidebar/>
      <Post/>
      <Chatbar/>
      </div>
    </div>
  )
}

export default App