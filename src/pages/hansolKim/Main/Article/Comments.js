import React, { useState } from 'react';
import './Comments.scss';

const Comments = props => {
  const [heartImg, setHeartImg] = useState('images/hansolKim/heart.png');
  return (
    <div className="comments">
      <div>
        {props.userName} {props.usercomments}
      </div>
      <div className="commentEmoji">
        <img
          onClick={() =>
            setHeartImg(prev =>
              prev === 'images/hansolKim/heart.png'
                ? 'images/hansolKim/redheart.png'
                : 'images/hansolKim/heart.png'
            )
          }
          src={heartImg}
        />
        <img src="images/hansolKim/remove.png" />
      </div>
    </div>
  );
};

export default Comments;
