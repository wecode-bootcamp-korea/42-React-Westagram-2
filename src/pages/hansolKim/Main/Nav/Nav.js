import React, { useState } from 'react';
import './Nav.scss';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(open => !open);
  };
  return (
    <section className="nav">
      <div className="navbar-left">westagram</div>
      <div className="navbar-center">
        <input className="search" type="text" placeholder="검색" />
      </div>
      <div className="navbar-right">
        <img src="images/hansolKim/home.png" alt="home" />
        <img src="images/hansolKim/airplane.png" alt="airplane" />
        <img src="images/hansolKim/add.png" alt="add" />
        <img src="images/hansolKim/find.png" alt="find" />
        <img src="images/hansolKim/heart.png" alt="heart" />
        <img
          className="profileBtn"
          src="images/hansolKim/profile.png"
          alt="profile"
          onClick={() => toggleMenu()}
        />
        <ul className={open ? 'showMenu' : 'hideMenu'}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </section>
  );
};

export default Nav;
