import './Story.scss';

const Story = () => {
  return (
    <div className="storyProfile">
      <div className="profileContainer">
        <div className="imageConatiner">
          <img
            className="image"
            src="images/heylynnShin/wecode.png"
            alt="profile pic"
          />
        </div>
        <div className="idContainer">
          <div className="id">_yum_s</div>
          <div className="time">16분 전</div>
        </div>
      </div>
    </div>
  );
};

export default Story;
