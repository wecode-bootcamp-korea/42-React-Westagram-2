import React from 'react';
import './Main.scss';
import { StoryLi, RecommendLi } from '../../../components/Li/Li';
import { Article } from '../../../components/Article/Article';
import { Nav } from '../../../components/Nav/Nav';

function MainEunjung() {
  return (
    <div className="main">
      <Nav />
      <main className="mainMain">
        <div className="feeds">
          <Article />
        </div>

        <div className="divMainRight">
          <div className="myProfileWrapper">
            <img
              className="myProfileImg"
              alt="Profile Img"
              src="images/eunjungSung/myprofile-img.png"
            />
            <span className="fontBold">beozzi__</span>
          </div>

          <div className="profileWrapper">
            <div className="titleWrapper">
              <span className="colorGray">스토리</span>
              <span className="fontBold">모두 보기</span>
            </div>
            <ul className="storyUl">
              <StoryLi />
              <StoryLi />
              <StoryLi />
            </ul>
          </div>

          <div className="profileWrapper">
            <div className="titleWrapper">
              <span className="colorGray">회원님을 위한 추천</span>
              <span className="fontBold">모두 보기</span>
            </div>
            <ul className="recommendUl">
              <RecommendLi />
              <RecommendLi />
              <RecommendLi />
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainEunjung;
