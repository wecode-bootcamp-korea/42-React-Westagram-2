import React, { useState } from 'react';
import './Article.scss';
import { Comment } from '../Comment/Comment';

const Article = () => {
  const [commentInput, setCommentInput] = useState('');
  const [commentArr, setCommentArr] = useState([]);

  const saveCommentInput = e => {
    setCommentInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (commentInput === '') {
      return;
    }
    setCommentArr(currentArr => [commentInput, ...currentArr]);
    setCommentInput('');
  };

  return (
    <article className="article">
      <div className="profileWrapper">
        <div className="profileLeft">
          <img alt="Myprofile Img" src="images/eunjungSung/myprofile-img.png" />
          <span className="fontBold">beozzi__</span>
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
        src="images/eunjungSung/bzi.jpg"
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
        <img
          className="likeImg"
          alt="Profile Img"
          src="images/eunjungSung/recommend-img1.png"
        />
        <span>
          <span className="fontBold">samsaek3</span>님&nbsp;
          <span className="fontBold">외 319명</span>이 좋아합니다
        </span>
      </div>

      <div className="descWrapper">
        <span className="fontBold">beozzi__</span>
        <span>안녕하새오 버찌애오</span>
      </div>

      <div className="comments">
        {commentArr.length > 0 ? (
          <p className="colorGray">댓글 {commentArr.length}개</p>
        ) : null}
        <ul className="commentUl">
          {commentArr.map((newComment, index) => (
            <Comment key={index} newComment={newComment} />
          ))}
        </ul>
        <span className="colorGray">17분 전</span>
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
  );
};

export { Article };
