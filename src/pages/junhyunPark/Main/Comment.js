import React from 'react';

const Comment = props => {
  return (
    <li>
      <span className="commId">jp_ </span>
      {props.el}
      <img className="delete" alt="delete" src="images/junhyunPark/bin.png" />
      <img
        className="heartMini"
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        alt="miniHeart"
      />
    </li>
  );
};

export default Comment;
