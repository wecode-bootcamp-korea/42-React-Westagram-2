import React from 'react';
import './Article.scss';

function Article() {
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
          <span className="fontBold">samsaek3</span>님{' '}
          <span className="fontBold">외 319명</span>이 좋아합니다
        </span>
      </div>

      <div className="descWrapper">
        <span className="fontBold">beozzi__</span>
        <span>안녕하새오 버찌애오</span>
      </div>

      <div className="commentWrapper">
        <ul className="comments" />
        <span className="colorGray">&nbsp;&nbsp;17분 전</span>
        <form className="commentForm">
          <input
            className="commentInput"
            type="text"
            placeholder="댓글 달기..."
          />
          <button className="commentBtn" type="button">
            게시
          </button>
        </form>
      </div>
    </article>
  );
}

export { Article };
