import * as React from 'react';
import '../stylesheets/Header.css';

const Header = () => {
  const themeToggle = () => document.body.classList.toggle('theme-light');  

  return (
    <div className='headerContainer'>
    {/* <span id='app-name'>APP NAME</span> */}

      <input type="checkbox" className="checkbox" id="checkbox" onChange={()=> themeToggle()}/>
      <label for="checkbox" className="label">
        {/* <i className="fas fa-moon"></i>
        <i className='fas fa-sun'></i> */}
        <div className='ball'></div>
      </label>
    
    </div>
    
  )
}

export default Header;
