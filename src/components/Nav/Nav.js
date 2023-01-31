import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="navLeft">
        <img
          className="logoImg"
          alt="Insta Logo"
          src="images/eunjungSung/instagram.png"
        />
        <span className="fontBold">|</span>
        <Link className="logo" to="/login-eunjung">
          westagram
        </Link>
      </div>

      <div className="searchWrapper">
        <input className="searchBar" type="search" placeholder="검색" />
      </div>

      <div className="navRight">
        <img
          className="navImg"
          alt="Explore Img"
          src="images/eunjungSung/explore.png"
        />
        <img
          className="navImg"
          alt="Heart Img"
          src="images/eunjungSung/heart.png"
        />
        <img
          className="navImg"
          alt="Profile Img"
          src="images/eunjungSung/profile.png"
        />
      </div>
    </nav>
  );
}

export { Nav };
