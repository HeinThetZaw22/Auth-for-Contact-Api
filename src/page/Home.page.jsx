import React from 'react'
import PreventComponents from '../components/Prevent.components'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const nav = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('auth');
    nav("/");
  }
  return (
    <PreventComponents fail={"/"} check={!localStorage.getItem('auth')}>
      <div>
        <h1>HomePage</h1>
        <button onClick={handleLogOut}>Log out</button>
      </div>
    </PreventComponents>
  )
}

export default HomePage