import React from 'react';
import Story from './Story';
import Recommend from './Recommend';
import Username from './Username';
import { Copy_Right_List } from './data';
import './Aside.scss';

const Aside = () => {
  return (
    <section className="aside">
      <Username />
      <Story />
      <Recommend />
      <div className="copyright normalText">
        {Copy_Right_List.map(info => (
          <span key={info.id}>
            <a href="http://instagram.com">{info.listName}</a>
          </span>
        ))}
        <div>2023 westagram</div>
      </div>
    </section>
  );
};

export default Aside;
