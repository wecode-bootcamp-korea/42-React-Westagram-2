import React from 'react';
import './Main.scss';
import Content1 from './Content1/Content1';
import Content2 from './Content2/Content2';
import Content3 from './Content3/Content3';

const Main = () => {
  return (
    <section>
      <div className="layout">
        <div className="content1">
          <Content1 />
        </div>
        <div className="main">
          <div className="content2">
            <Content2 />
          </div>
          <div className="content3">
            <Content3 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
