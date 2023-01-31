import { PROFILE_STORY_DATA } from '../../data/profileStoryData';
import './ProfileStory.scss';

const ProfileStory = () => {
  return (
    <ul className="profileStory">
      {PROFILE_STORY_DATA.map(profile => {
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
