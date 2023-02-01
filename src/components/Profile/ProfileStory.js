import { useEffect, useState } from 'react';
import './ProfileStory.scss';

const ProfileStory = () => {
  const [profiles, setProfile] = useState([]);

  useEffect(() => {
    fetch('/data/profileStoryData.json')
      .then(response => response.json())
      .then(json => setProfile(json));
  }, []);

  return (
    <ul className="profileStory">
      {profiles.map(profile => {
        return (
          <li className="storyLi" key={profile.id}>
            <img className="profileImg" alt="Profile Img" src={profile.path} />
            <div className="profileDiv">
              <span className="fontBold">{profile.profileId}</span>
              <span className="colorGray">{profile.time}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { ProfileStory };
