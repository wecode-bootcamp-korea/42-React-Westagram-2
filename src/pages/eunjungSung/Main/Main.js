import React from 'react';
import './Main.scss';
import { Article } from '../../../components/Article/Article';
import { Nav } from '../../../components/Nav/Nav';
import { Aside } from '../../../components/Aside/Aside';

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
