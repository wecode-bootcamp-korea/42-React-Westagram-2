import React from 'react';

const Comment = ({ feedComments, deleteComment }) => {
  return (
    <ul className="feedComments">
      {feedComments.map(comment => (
        <p className="commId" key={comment.id}>
          jp_ <span>{comment.text}</span>
          <img
            onClick={() => deleteComment(comment.id)}
            className="delete"
            alt="delete"
            src="images/junhyunPark/bin.png"
          />
          <img
            className="heartMini"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="miniHeart"
          />
        </p>
      ))}
    </ul>
  );
};

export default Comment;
