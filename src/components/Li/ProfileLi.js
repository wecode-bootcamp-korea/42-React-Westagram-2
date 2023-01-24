import React from 'react';
import './ProfileLi.scss';

function StoryLi({ path, profileName }) {
  return (
    <li className="storyLi">
      <img className="profileImg" alt="Profile Img" src={path} />
      <div className="profileDiv">
        <span className="fontBold">{profileName}</span>
        <span className="colorGray">16분 전</span>
      </div>
    </li>
  );
}

function RecommendLi({ path, profileName }) {
  return (
    <li className="recommendLi">
      <div className="liDiv">
        <img className="profileImg" alt="Profile Img" src={path} />
        <div className="profileDiv">
          <span className="fontBold">{profileName}</span>
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
