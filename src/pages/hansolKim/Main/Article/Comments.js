import React, { useState } from 'react';
import './Comments.scss';

const Comments = com => {
  const [heartImg, setHeartImg] = useState('images/hansolKim/heart.png');
  console.log(com.commentId);
  return (
    <div className="comments" key={com.id}>
      <div>
        {com.userName} {com.usercomments}
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
          alt="heart"
        />
        <img
          src="images/hansolKim/remove.png"
          alt="remove"
          // onClick={() => {
          //   removeComment(com.id);
          // }}
        />
      </div>
    </div>
  );
};

export default Comments;
