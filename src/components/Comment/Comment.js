import { useState } from 'react';
import './Comment.scss';

const Comment = ({ newComment }) => {
  const emptyheart = 'images/eunjungSung/emptyheart.png';
  const fullHeart = 'images/eunjungSung/fullheart.png';

  const [onClick, setOnClick] = useState(false);

  const onClickLike = () => {
    setOnClick(prev => {
      return !prev;
    });
  };

  return (
    <li className="comment">
      <div className="commentDiv">
        <span className="fontBold">beozzi__</span>
        <p className="commentP">{newComment}</p>
      </div>
      <button className="heartBtn" type="button" onClick={onClickLike}>
        <img
          className="heartBtnImg"
          alt="Empty Heart Img"
          src={onClick ? fullHeart : emptyheart}
        />
      </button>
      <button className="deleteBtn" type="button">
        X
      </button>
    </li>
  );
};

export { Comment };
