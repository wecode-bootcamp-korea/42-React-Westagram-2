import { useEffect, useState } from 'react';
import './ProfileRecommend.scss';

const ProfileRecommend = () => {
  const [profiles, setProfile] = useState([]);

  useEffect(() => {
    fetch('/data/profileRecommendData.json')
      .then(response => response.json())
      .then(json => setProfile(json));
  }, []);

  return (
    <ul className="profileRecommend">
      {profiles.map(profile => {
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
