import React from 'react'
import ReactMemo from './react-memo/ReactMemo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import Memo from './memo/Memo'
import Callback from './callback/Callback'

const App = () => {
  return (
    <div className='p-10'>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/react-memo' element={<ReactMemo/>}/>
          <Route path='/memo' element={<Memo/>}/>
          <Route path='/callback' element={<Callback/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App