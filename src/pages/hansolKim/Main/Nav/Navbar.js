import React from 'react';

const Navbar = () => {
  return (
    <>
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
        <img src="images/hansolKim/profile.png" alt="profile" />
      </div>
    </>
  );
};

export default Navbar;
