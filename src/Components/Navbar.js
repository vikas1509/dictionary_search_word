import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToHistory = () => {
    navigate('/history');
  };

  return (
    <nav className='navBar'>
      <h1 className='leftNav' onClick={goToHome}>
        Dictionary App
      </h1>
      <div className='rightNav'>
        <p onClick={goToHome}>Home</p>
        <p onClick={goToHistory}>History</p>
      </div>
    </nav>
  );
}

export default Navbar;
