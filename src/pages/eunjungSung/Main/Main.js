import React from 'react';
import { Nav } from '../../../components/Nav/Nav';
import { Article } from '../../../components/Article/Article';
import { Aside } from '../../../components/Aside/Aside';
import './Main.scss';

const MainEunjung = () => {
  return (
    <div className="main">
      <Nav />
      <main className="mainMain">
        <div className="feeds">
          <Article />
        </div>
        <Aside />
      </main>
    </div>
  );
};

export default MainEunjung;
