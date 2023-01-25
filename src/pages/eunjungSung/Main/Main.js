import React from 'react';
import './Main.scss';
import {
  ProfileStory,
  ProfileRecommend,
} from '../../../components/Profile/Profile';
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
            <ul className="storyUl">
              <ProfileStory
                profileName="samsaek"
                path="images/eunjungSung/recommend-img1.png"
              />
              <ProfileStory
                profileName="jjonkdduck"
                path="images/eunjungSung/recommend-img2.png"
              />
              <ProfileStory
                profileName="donggul"
                path="images/eunjungSung/recommend-img3.png"
              />
            </ul>
          </div>

          <div className="profileWrapper">
            <div className="titleWrapper">
              <span className="colorGray">회원님을 위한 추천</span>
              <span className="fontBold">모두 보기</span>
            </div>
            <ul className="recommendUl">
              <ProfileRecommend
                profileName="anonymous1"
                path="images/eunjungSung/recommend-img1.png"
              />
              <ProfileRecommend
                profileName="anonymous2"
                path="images/eunjungSung/recommend-img2.png"
              />
              <ProfileRecommend
                profileName="anonymous3"
                path="images/eunjungSung/recommend-img3.png"
              />
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainEunjung;
