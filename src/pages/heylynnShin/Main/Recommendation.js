import './Recommendation.scss';

const Recommendation = () => {
  return (
    <div className="recommendProfile">
      <div className="profileContainer">
        <div className="imageConatiner">
          <img
            className="image"
            src="images/heylynnShin/wecode.png"
            alt="profile pic"
          />
        </div>
        <div className="idContainer">
          <div className="idInfo">
            <div className="id">_yum_s</div>
            <p className="followers">_legend_a님 외 2명이 팔로우합니다.</p>
          </div>
          <button className="followBtn">팔로우</button>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
