import React, { useState } from 'react';
import './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faHeart,
  faComment,
  faArrowUpFromBracket,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import CommentInput from './CommentInput';
import Footer from './Footer';

const Main = () => {
  const [input, setInput] = useState('');
  const [commentList, setCommentList] = useState([]);
  const onChangeInput = e => {
    setInput(e.target.value);
    console.log(input);
  };
  const onClickComment = e => {
    e.preventDefault();
    setCommentList([...commentList, input]);
    setInput('');
  };

  return (
    <div className="main">
      <nav>
        <div className="logo">
          <img
            className="logoImage"
            src="images/heylynnShin/instagram.png"
            alt="Instagram Logo"
          />
          <h1 className="logoText">Westagram</h1>
        </div>
        <div className="searchBar">
          <input className="searchBarInput" type="text" placeholder="검색" />
        </div>
        <div className="navIcon">
          <img
            className="compass"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="Search"
          />
          <img
            className="heart"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="Heart"
          />
          <img
            className="mypage"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="Mypage"
          />
        </div>
      </nav>

      <main>
        <div className="feeds">
          <article className="feed">
            <section className="profileContainer">
              <div className="feedProfile">
                <div className="imageAndIdContainer">
                  <div className="imageConatiner">
                    <img
                      className="image"
                      src="images/heylynnShin/heylynn_profile.jpg"
                      alt="profile pic"
                    />
                  </div>
                  <b className="id">heylynn</b>
                </div>
              </div>
            </section>
            <section className="feedImageContainer">
              <img
                src="images/heylynnShin/westagram-feed.png"
                alt="feed pic"
                className="feedImage"
              />
            </section>
            <div className="belowFeedImage">
              <section className="feedIconContainer">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faHeart} classname="heart" size="s" />
                  <FontAwesomeIcon
                    icon={faComment}
                    classname="comment"
                    size="s"
                  />
                  <FontAwesomeIcon
                    icon={faArrowUpFromBracket}
                    classname="share"
                    size="s"
                  />
                </div>
                <div className="bookmarkIconContainer">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    classname="bookmark"
                    size="s"
                  />
                </div>
              </section>

              <section className="feedText">
                <div className="likeContainer">
                  <p className="like">님 외 4명이 좋아합니다.</p>
                </div>
                <div className="postContainer">
                  <p className="post">
                    위워크에서 진행한 베이킹 클래스 어쩌고 저쩌고
                  </p>
                </div>
                <div className="writtenCommentContainer">
                  <p className="writtenComment">거봐 좋았잖아~~~~~</p>
                </div>
                <div className="timeConatiner">
                  <p className="time">42분 전</p>
                </div>
              </section>
            </div>
            <CommentInput comment={commentList} />
            <form onSubmit={onClickComment} className="commentContainer">
              <input
                value={input}
                onChange={onChangeInput}
                type="text"
                placeholder="댓글 달기..."
                className="inputComment"
              />
              <button className="postComment">게시</button>
            </form>
          </article>
        </div>

        <div className="feedsRightContainer">
          <section className="feedsRight">
            <div className="profile"></div>
            <div className="story"></div>
            <div className="recommendation"></div>
            <div className="footer">
              <Footer />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Main;
