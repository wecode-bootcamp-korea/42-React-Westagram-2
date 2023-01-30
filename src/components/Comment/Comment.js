import React from 'react';
import './Comment.scss';

const Comment = ({ newComment }) => {
  return (
    <li className="comment">
      <span className="fontBold">beozzi__</span>
      {newComment}
    </li>
  );
};

export { Comment };
