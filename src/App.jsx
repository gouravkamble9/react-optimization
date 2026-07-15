import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import Debounce from './debounce/Debounce'
import Throttle from './throttle/Throttle'

const ReactMemo=React.lazy(()=>import("./react-memo/ReactMemo"))
const Memo=React.lazy(()=>import("./memo/Memo"))
const Callback=React.lazy(()=>import("./callback/Callback"))

const App = () => {
  return (
    <div className='p-10'>
      <BrowserRouter>
      <NavBar/>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path='/react-memo' element={<ReactMemo/>}/>
          <Route path='/memo' element={<Memo/>}/>
          <Route path='/callback' element={<Callback/>}/>
          <Route path='/debounce' element={<Debounce/>}/>
          <Route path='/throttle' element={<Throttle/>}/>

        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App