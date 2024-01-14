import React from 'react'
import './App.css';
import Slidebar from './components/Slidebar'
import Feeds from './components/Feeds'
import Widgets from './components/Widgets';


const App = () => {
  return (
    <div className='app'>
      {/* Slidebar */}
      <Slidebar/>

      {/* Feeds */}
      <Feeds/>

      {/* Widgets */}
      <Widgets/>

    </div>
  )
}

export default App
