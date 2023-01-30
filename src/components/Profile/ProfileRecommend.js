import React, { useState, useEffect } from 'react';
import './ProfileRecommend.scss';

const ProfileRecommend = () => {
  const [profileRecommend, setprofileRecommend] = useState([]);

  useEffect(() => {
    fetch('../data/profileRecommend.json')
      .then(response => response.json())
      .then(json => {
        setprofileRecommend(json);
      });
  }, []);

  return (
    <ul className="profileRecommend">
      {profileRecommend.map(profile => {
        return (
          <li className="recommendLi" key={profile.id}>
            <div className="recommendDiv">
              <img
                className="profileImg"
                alt="Profile Img"
                src={profile.path}
              />
              <div className="profileDiv">
                <span className="fontBold">{profile.profileName}</span>
                <span className="colorGray">{profile.friends}</span>
              </div>
            </div>
            <span className="colorBlue">팔로우</span>
          </li>
        );
      })}
    </ul>
  );
};

export { ProfileRecommend };
