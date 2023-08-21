import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-dom'
const Hooks = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ='/'></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Hooks
