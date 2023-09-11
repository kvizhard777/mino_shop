import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  return (
    <div className='wrapper'>
      <div className="main-wrapper">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App