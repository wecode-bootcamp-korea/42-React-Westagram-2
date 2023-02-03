import { useState, useEffect } from 'react';
import { CommentBox } from './CommentBox';
import './Article.scss';

const Article = () => {
  const emptyheart = 'images/eunjungSung/emptyheart.png';
  const fullHeart = 'images/eunjungSung/fullheart.png';
  const [articles, setArticles] = useState([]);
  const [onClick, setOnClick] = useState(false);

  useEffect(() => {
    fetch('/data/articleData.json')
      .then(response => response.json())
      .then(json => setArticles(json));
  }, []);

  const onClickLike = () => {
    setOnClick(prev => {
      return !prev;
    });
  };

  return (
    <>
      {articles.map(article => (
        <article className="article" key={article.id}>
          <div className="feedWrapper">
            <div className="profileWrapper">
              <div className="profileLeft">
                <img
                  className="profileImg"
                  alt="Myprofile Img"
                  src={article.profileImg}
                />
                <span className="fontBold">{article.profileId}</span>
              </div>
              <img
                className="menuImg"
                alt="Menu Img"
                src="images/eunjungSung/menu.png"
              />
            </div>

            <img
              className="articleImg"
              alt="Article Img"
              src={article.articleImg}
            />

            <div className="functionWrapper">
              <div className="functionRight">
                <button
                  className="heartBtn"
                  type="button"
                  onClick={onClickLike}
                >
                  <img
                    className="heartBtnImg"
                    alt="Heart Img"
                    src={onClick ? fullHeart : emptyheart}
                  />
                </button>
                <img alt="Comment Img" src="images/eunjungSung/comment.png" />
                <img alt="Upload Img" src="images/eunjungSung/upload.png" />
              </div>
              <img alt="Bookmark Img" src="images/eunjungSung/bookmark.png" />
            </div>

            <div className="likeWrapper">
              {`${article.totalLikes}` > 0 ? (
                <>
                  <img
                    className="likeImg"
                    alt="Profile Img"
                    src="images/eunjungSung/userprofile1.png"
                  />
                  <span>
                    <span className="fontBold">{article.likedProfileId}</span>
                    님&nbsp;
                    <span className="fontBold">외 {article.totalLikes}명</span>
                    이 좋아합니다
                  </span>
                </>
              ) : null}
            </div>

            <div className="descWrapper">
              <span className="fontBold">{article.profileId}</span>
              <span>{article.desc}</span>
            </div>
          </div>

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
