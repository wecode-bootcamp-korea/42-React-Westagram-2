import React from 'react';
import Feed from './Feed';
import './Feedlist.scss';

const Feedlist = ({ feedlist }) => {
  console.log(feedlist);
  return (
    <div className="feedlist">
      {feedlist.map(feed => (
        //<Feed key={feed.id} id={feed.id} image={feed.image} user={feed.user} />
        <Feed key={feed.id} feed={feed} />
      ))}
    </div>
  );
};

export default Feedlist;
