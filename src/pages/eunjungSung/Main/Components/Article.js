import { useState, useEffect } from 'react';
import { CommentBox } from './CommentBox';
import { Feed } from './Feed';
import './Article.scss';

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/data/articleData.json')
      .then(response => response.json())
      .then(json => setArticles(json));
  }, []);

  return (
    <>
      {articles.map(article => (
        <article className="article" key={article.id}>
          <Feed key={article.id} article={article} />

          <CommentBox
            key={article.id}
            time={article.time}
            commentData={article.comment}
          />
        </article>
      ))}
    </>
  );
};

export { Article };
