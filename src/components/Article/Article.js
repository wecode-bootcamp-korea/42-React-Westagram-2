import { useState, useEffect } from 'react';
import { Comment } from '../Comment/Comment';
import './Article.scss';

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [commentArr, setCommentArr] = useState([]);

  useEffect(() => {
    fetch('/data/articleData.json')
      .then(response => response.json())
      .then(json => setArticles(json));
  }, []);

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(response => response.json())
      .then(json => setCommentArr(json));
  }, []);

  const saveCommentInput = e => {
    setCommentInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (commentInput === '') {
      return;
    }

    setCommentArr(
      commentArr.concat({
        id: commentArr.length + 1,
        content: commentInput,
        profileId: 'beozzi__',
      })
    );
    setCommentInput('');
  };

  const removeComment = id => {
    return setCommentArr(commentArr.filter(comment => comment.id !== id));
  };

  return (
    <>
      {articles.map(article => (
        <article className="article" key={article.id}>
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
              <img alt="Heart Img" src="images/eunjungSung/emptyheart.png" />
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
                  src="images/eunjungSung/recommend-img1.png"
                />
                <span>
                  <span className="fontBold">{article.likedProfileId}</span>
                  님&nbsp;
                  <span className="fontBold">외 {article.totalLikes}명</span>이
                  좋아합니다
                </span>
              </>
            ) : null}
          </div>

          <div className="descWrapper">
            <span className="fontBold">{article.profileId}</span>
            <span>{article.articleDesc}</span>
          </div>

          <div className="commentWrapper">
            {commentArr.length > 0 ? (
              <p className="colorGray">댓글 {commentArr.length}개</p>
            ) : null}
            <ul className="commentUl">
              {commentArr.map((comment, index) => (
                <Comment
                  key={index}
                  comment={comment}
                  removeComment={removeComment}
                />
              ))}
            </ul>
            <span className="colorGray">{article.time}</span>
            <form className="commentForm" onSubmit={onSubmit}>
              <input
                value={commentInput}
                className="commentInput"
                type="text"
                placeholder="댓글 달기..."
                onChange={saveCommentInput}
              />
              <button className="commentBtn">게시</button>
            </form>
          </div>
        </article>
      ))}
    </>
  );
};

export { Article };
