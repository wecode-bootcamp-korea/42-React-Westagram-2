import React, { useState, useEffect } from 'react';
import { Nav } from './Components/Nav';
import { Article } from './Components/Article';
import { Aside } from './Components/Aside';
import './Main.scss';

const Main = () => {
  const [profileList, setProfileList] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    fetch('/data/articleData.json')
      .then(response => response.json())
      .then(json => setProfileList(json));
  });

  const onChange = e => {
    setKeyword(e.target.value);
  };

  const filteredList = profileList.filter(profile =>
    profile.profileId.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="main">
      <Nav keyword={keyword} onChange={onChange} />
      <main className="mainMain">
        <div className="feeds">
          <Article filteredList={filteredList} />
        </div>
        <Aside />
      </main>
    </div>
  );
};

export default Main;
