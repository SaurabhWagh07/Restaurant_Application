import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home'
// import Success from './Pages/Success';
import Success from "./Pages/Sucess"
import PageNotFound from "./Pages/PageNotFound"
import './App.css'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App