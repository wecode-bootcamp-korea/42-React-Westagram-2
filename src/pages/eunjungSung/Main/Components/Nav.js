import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../Data/MenuData';
import './Nav.scss';

function Nav() {
  const [profiles, setProfiles] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [onClick, setOnClick] = useState(false);

  useEffect(() => {
    fetch('/data/profileData.json')
      .then(response => response.json())
      .then(json => setProfiles(json));
  });

  const onChange = e => {
    setKeyword(e.target.value);
  };

  const filteredList = profiles.filter(profile =>
    profile.profileId.toLowerCase().includes(keyword.toLowerCase())
  );

  const onClickMenu = () => {
    setOnClick(prev => {
      return !prev;
    });
  };

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
        <input
          className="searchBar"
          type="search"
          value={keyword}
          placeholder="검색"
          onChange={onChange}
        />
        <ul className="searchedLists">
          {keyword.length > 0 ? (
            <>
              {filteredList.map(profile => (
                <li className="searchedList" key={profile.id}>
                  <img
                    className="searchedImg"
                    alt="Profile Img"
                    src={profile.profileImg}
                  />
                  <span className="searchedId">{profile.profileId}</span>
                </li>
              ))}
            </>
          ) : null}
        </ul>
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

        <div className="menuWrapper">
          <button className="menuBtn" type="button" onClick={onClickMenu}>
            <img
              className="navImg"
              alt="Profile Img"
              src="images/eunjungSung/profile.png"
            />
            {onClick ? (
              <ul className="menuLists">
                {MENU_DATA.map(list => (
                  <>
                    <li className="menuList" key={list.id}>
                      {list.menu}
                    </li>
                    <hr className="menuLine" key={list.id} />
                  </>
                ))}
              </ul>
            ) : null}
          </button>
        </div>
      </div>
    </nav>
  );
}

export { Nav };
