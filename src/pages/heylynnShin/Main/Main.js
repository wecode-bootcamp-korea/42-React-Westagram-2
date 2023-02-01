import React, { useState } from 'react';
import './Main.scss';
import Aside from './Aside';
import Nav from './Nav';
import Feed from './Feed';

const Main = () => {
  return (
    <div className="westagram">
      <Nav />
      <main className="main">
        <Feed />
        <Aside />
      </main>
    </div>
  );
};

export default Main;
