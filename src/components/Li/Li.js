import React from 'react';
import './Li.scss';

function StoryLi() {
  return (
    <li className="storyLi">
      <img
        className="profileImg"
        alt="Profile Img"
        src="images/eunjungSung/recommend-img1.png"
      />
      <div className="profileDiv">
        <span className="fontBold">samsaek3</span>
        <span className="colorGray">16분 전</span>
      </div>
    </li>
  );
}

function RecommendLi() {
  return (
    <li className="recommendLi">
      <div className="liDiv">
        <img
          className="profileImg"
          alt="Profile Img"
          src="images/eunjungSung/recommend-img2.png"
        />
        <div className="profileDiv">
          <span className="fontBold">anonymous1</span>
          <span className="colorGray">
            0donggul0님 외 2명이 팔로우하고 있습니다
          </span>
        </div>
      </div>
      <span className="colorBlue">팔로우</span>
    </li>
  );
}

export { StoryLi, RecommendLi };
