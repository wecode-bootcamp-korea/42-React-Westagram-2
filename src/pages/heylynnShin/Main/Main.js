import React, { useState, useEffect } from 'react';
import './Main.scss';
import Aside from './Aside';
import Nav from './Nav';
import Feed from './Feed';

const Main = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    fetch('data/feedData.json')
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);
  return (
    <div className="westagram">
      <Nav />
      <main className="main">
        <div className="mainContainer">
          {feed.map(list => (
            <Feed key={list.id} list={list} />
          ))}
        </div>
        <Aside />
      </main>
    </div>
  );
};

export default Main;
