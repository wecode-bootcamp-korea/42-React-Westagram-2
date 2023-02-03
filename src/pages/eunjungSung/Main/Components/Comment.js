import { useState } from 'react';
import './Comment.scss';

const Comment = ({
  comment,
  commentData: { profileId, content },
  removeComment,
}) => {
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
        <span className="fontBold">{profileId || 'beozzi__'}</span>
        <p className="commentP">{content || comment}</p>
      </div>
      <div className="commentFuncDiv">
        <button className="heartBtn" type="button" onClick={onClickLike}>
          <img
            className="heartBtnImg"
            alt="Heart Img"
            src={onClick ? fullHeart : emptyheart}
          />
        </button>
        <button
          className="deleteBtn"
          type="button"
          onClick={() => removeComment(comment.id)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export { Comment };
