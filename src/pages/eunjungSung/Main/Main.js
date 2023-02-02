import React from 'react';
import { Nav } from './Components/Nav';
import { Article } from './Components/Article';
import { Aside } from './Components/Aside';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Nav />
      <main className="mainMain">
        <div className="mainRight">
          <Article />
        </div>
        <Aside />
      </main>
    </div>
  );
};

export default Main;
