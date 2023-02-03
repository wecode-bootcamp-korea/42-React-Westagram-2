import { useEffect, useState } from 'react';
import './ProfileRecommend.scss';

const ProfileRecommend = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('/data/profileData.json')
      .then(response => response.json())
      .then(json => setProfiles(json));
  }, []);

  return (
    <ul className="profileRecommend">
      {profiles
        .filter(profile => profile.follower !== null && profile.id !== 1)
        .map(profile => {
          return (
            <li className="recommendList" key={profile.id}>
              <div className="recommendWrapper">
                <img
                  className="profileImg"
                  alt="Profile Img"
                  src={profile.profileImg}
                />
                <div className="profileRecommendWrapper">
                  <span className="fontBold">{profile.profileId}</span>
                  <span className="colorGray">{profile.follower}</span>
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