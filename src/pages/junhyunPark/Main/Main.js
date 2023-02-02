import MainLeft from './MainLeft';
import MainRight from './MainRight';
import './Main.scss';

import { useState, useEffect } from 'react';

const MainPage = () => {
  const [feeds, setFeed] = useState([]);

  useEffect(() => {
    fetch('/data/junhyun_feed.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);

  return (
    <div className="mainPage">
      <div className="inner">
        <main>
          <div className="main-left-container">
            {feeds.map(feed => (
              <MainLeft key={feed.id} feed={feed} />
            ))}
          </div>
          <MainRight />
        </main>
      </div>
    </div>
  );
};

export default MainPage;
