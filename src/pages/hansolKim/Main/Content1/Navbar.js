import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="navbar-left">westagram</div>
      <div className="navbar-center">
        <input className="search" type="text" placeholder="검색" />
      </div>
      <div className="navbar-right">
        <img src="images/hansolKim/home.png" />
        <img src="images/hansolKim/airplane.png" />
        <img src="images/hansolKim/add.png" />
        <img src="images/hansolKim/find.png" />
        <img src="images/hansolKim/heart.png" />
        <img src="images/hansolKim/profile.png" />
      </div>
    </>
  );
};

export default Navbar;
