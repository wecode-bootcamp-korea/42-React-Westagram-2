import { ProfileStory } from './ProfileStory';
import { ProfileRecommend } from './ProfileRecommend';
import './Aside.scss';
import { SERVICE_DATA } from '../Data/ServiceData';

const Aside = () => {
  return (
    <aside className="aside">
      <div className="myProfileWrapper">
        <img
          className="myProfileImg"
          alt="Profile Img"
          src="images/eunjungSung/myprofile.png"
        />
        <span className="fontBold">beozzi__</span>
      </div>

      <div className="profileWrapper">
        <div className="titleWrapper">
          <span className="colorGray">스토리</span>
          <span className="fontBold">모두 보기</span>
        </div>
        <ProfileStory />
      </div>

      <div className="profileWrapper">
        <div className="titleWrapper">
          <span className="colorGray">회원님을 위한 추천</span>
          <span className="fontBold">모두 보기</span>
        </div>
        <ProfileRecommend />
      </div>

      <div className="serviceWrapper">
        <ul className="serviceUl">
          {SERVICE_DATA.map(service => {
            return (
              <li key={service.service} className="serviceLi">
                <a href={service.link} className="serviceA">
                  {service.service} ·
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export { Aside };
