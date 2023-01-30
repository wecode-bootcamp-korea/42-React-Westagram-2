import React from 'react';
import './Main.scss';
import { ProfileStory } from '../../../components/Profile/ProfileStory';
import { ProfileRecommend } from '../../../components/Profile/ProfileRecommend';
import { Article } from '../../../components/Article/Article';
import { Nav } from '../../../components/Nav/Nav';

const MainEunjung = () => {
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
            <ProfileStory />
          </div>

          <div className="profileWrapper">
            <div className="titleWrapper">
              <span className="colorGray">회원님을 위한 추천</span>
              <span className="fontBold">모두 보기</span>
            </div>
            <ProfileRecommend />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainEunjung;
