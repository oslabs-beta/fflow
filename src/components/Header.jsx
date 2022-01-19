import * as React from 'react';
import '../stylesheets/Header.css';

const Header = () => {
  const themeToggle = () => document.body.classList.toggle('theme-light');  

  return (
    <div className='headerContainer'>
      {/* HEADER  */}

      <div className='theme-toggle'>
      
      <input type="checkbox" className="checkbox" id="checkbox" onChange={()=> themeToggle()}/>
      <label for="checkbox" class="label">
        <i className="fas fa-moon"></i>
        <i className='fas fa-sun'></i>
        <div className='ball'></div>
      </label>
      </div>
    </div>
    
  )
}

export default Header;
