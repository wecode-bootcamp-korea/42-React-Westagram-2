import React, { useState, useEffect } from 'react';
import './Main.scss';
import Aside from './Aside';
import Nav from './Nav';
import Feed from './Feed';

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data/feedData.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className="westagram">
      <Nav />
      <main className="main">
        {data.map(list => (
          <Feed list={list} />
        ))}
        <Aside />
      </main>
    </div>
  );
};

export default Main;
