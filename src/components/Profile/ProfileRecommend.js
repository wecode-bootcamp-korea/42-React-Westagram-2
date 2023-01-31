import { PROFILE_RECOMMEND_DATA } from '../../data/profileRecommendData';
import './ProfileRecommend.scss';

const ProfileRecommend = () => {
  return (
    <ul className="profileRecommend">
      {PROFILE_RECOMMEND_DATA.map(profile => {
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
