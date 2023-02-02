import './Liked.scss';

const Liked = () => {
  return (
    <div className="likeContainer">
      <div className="likedIdContainer">
        <div className="imageContainer">
          <img
            className="image"
            src="images/heylynnShin/wecode.png"
            alt="profile pic"
          />
        </div>
        <div className="idContainer">
          <div className="id">_yum_s</div>
        </div>
      </div>
      <p className="like">
        님 외 <a>4명</a>이 좋아합니다.
      </p>
    </div>
  );
};

export default Liked;
