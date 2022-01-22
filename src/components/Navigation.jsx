import * as React from "react";
import '../stylesheets/Navigation.css';

const Navigation = () => {
  return (
    <div className='navigation-bar'>
      <a href="#"><i class="fas fa-pencil-ruler"></i></a>
      <a href="#"><i class="fas fa-drafting-compass"></i></a>
      <a href="#"><i class="fas fa-cog"></i></a>
      <a href="#"><i class="fas fa-save"></i></a>
      <a href="#"><i class="fas fa-download"></i></a>
    </div>
  )
}

export default Navigation;