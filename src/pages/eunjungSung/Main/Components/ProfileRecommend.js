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
            <li className="recommendLi" key={profile.id}>
              <div className="recommendDiv">
                <img
                  className="profileImg"
                  alt="Profile Img"
                  src={profile.path}
                />
                <div className="profileDiv">
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
