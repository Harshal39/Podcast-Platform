import React from 'react';
import "./styles.css";
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className='navbar'>
      <div className='gradient'></div>
      <div className='links'>
        <Link to="/" 
        className={currentPath === "/" ? "active" : ""}>SignUp</Link>

        <Link to="/podcasts" 
        className={currentPath === "/podcast" ? "active" : ""}>Podcasts</Link>

        <Link to="/start-a-podcast" 
        className={currentPath === "/start-a-project" ? "active" : ""}>Start A Podcast</Link>

        <Link to="/profile" 
        className={currentPath === "/profile" ? "active" : ""}>Profile</Link>
        
      </div>
    </div>
  )
}

export default Header