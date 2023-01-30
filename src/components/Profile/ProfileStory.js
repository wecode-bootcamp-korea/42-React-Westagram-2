import React, { useState, useEffect } from 'react';
import './ProfileStory.scss';

const ProfileStory = () => {
  const [profileStory, setprofileStory] = useState([]);

  useEffect(() => {
    fetch('../data/profileStory.json')
      .then(response => response.json())
      .then(json => {
        setprofileStory(json);
      });
  }, []);

  return (
    <ul className="profileStory">
      {profileStory.map(profile => {
        return (
          <li className="storyLi" key={profile.id}>
            <img className="profileImg" alt="Profile Img" src={profile.path} />
            <div className="profileDiv">
              <span className="fontBold">{profile.profileName}</span>
              <span className="colorGray">{profile.time}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { ProfileStory };
