import React from 'react';

const Header = () => {
  return (
    <header className='nav'>
      <span className="logo">
        <img src={require("./logolemon.jpg")} alt="" />
      </span>
      <nav className='nav_el'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="">Reservations</a></li>
          <li><a href="">Order Online</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
