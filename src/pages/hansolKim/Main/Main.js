import React from 'react';
import './Main.scss';
import Nav from './Nav/Nav';
import Article from './Article/Article';
import Aside from './Aside/Aside';

const Main = () => {
  return (
    <section className="main">
      <div className="layout">
        <Nav />
        <div className="mainArea">
          <Article />
          <Aside />
        </div>
      </div>
    </section>
  );
};

export default Main;
