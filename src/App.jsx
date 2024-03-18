import React from 'react'
import {Route, Routes} from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from './page';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  )
}

export default App