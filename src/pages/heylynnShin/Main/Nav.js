import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img
          className="logoImage"
          src="images/heylynnShin/instagram.png"
          alt="Instagram Logo"
        />
        <h1 className="logoText">Westagram</h1>
      </div>
      <div className="searchBar">
        <input className="searchBarInput" type="text" placeholder="검색" />
      </div>
      <div className="navIcon">
        <img
          className="compass"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt="Search"
        />
        <img
          className="heart"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="Heart"
        />
        <img
          className="mypage"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="Mypage"
        />
      </div>
    </nav>
  );
};

export default Nav;
