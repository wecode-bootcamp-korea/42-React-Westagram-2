import Footer from './Footer';
import './Aside.scss';
import Story from './Story';
import Recommendation from './Recommendation';

const Aside = () => {
  return (
    <div className="asideContainer">
      <section className="feedsRight">
        <div className="profile">
          <div className="profileContainer">
            <div className="imageConatiner">
              <img
                className="image"
                src="images/heylynnShin/wecode.png"
                alt="profile pic"
              />
            </div>
            <div className="idContainer">
              <div className="id">wecode_bootcamp</div>
              <div className="idInfo">WeCode | 위코드</div>
            </div>
          </div>
        </div>
        <div className="storyContainer">
          <div className="textContainer">
            <a className="story">스토리</a>
            <a className="all">모두 보기</a>
          </div>
          <Story />
          <Story />
          <Story />
          <Story />
        </div>
        <div className="recommendation">
          <div className="textContainer">
            <a className="forYou">회원님을 위한 추천</a>
            <a className="all">모두 보기</a>
          </div>
          <Recommendation />
          <Recommendation />
          <Recommendation />
        </div>
        <div className="footer">
          <Footer />
          <p>© 2019 INSTAGRAM</p>
        </div>
      </section>
    </div>
  );
};

export default Aside;
