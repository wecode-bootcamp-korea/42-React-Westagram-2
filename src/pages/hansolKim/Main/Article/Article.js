import React, { useState, useEffect } from 'react';
import Feedlist from './Feedlist';
import './Article.scss';

const Article = () => {
  const [feedlist, setFeedlist] = useState([]);

  useEffect(() => {
    fetch('/feeddata/feedData.json')
      .then(res => res.json())
      .then(data => setFeedlist(data));
  }, []);

  return (
    <section className="article">
      <Feedlist feedlist={feedlist} />
    </section>
  );
};

export default Article;
