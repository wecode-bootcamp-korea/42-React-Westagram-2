import { ProfileStory } from '../Profile/ProfileStory';
import { ProfileRecommend } from '../Profile/ProfileRecommend';
import './Aside.scss';

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

const SERVICE_DATA = [
  {
    service: '소개',
    link: 'https://about.instagram.com/',
  },
  {
    service: '도움말',
    link: 'https://help.instagram.com/',
  },
  {
    service: '홍보 센터',
    link: 'https://about.instagram.com/blog',
  },
  {
    service: 'API',
    link: 'https://developers.facebook.com/docs/instagram',
  },
  {
    service: '채용 정보',
    link: 'https://about.instagram.com/about-us/careers',
  },
  {
    service: '개인정보처리방침',
    link: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect',
  },
  {
    service: '약관',
    link: 'https://help.instagram.com/581066165581870/',
  },
  {
    service: '위치',
    link: 'https://www.instagram.com/explore/locations/',
  },
  {
    service: '언어',
  },
];
