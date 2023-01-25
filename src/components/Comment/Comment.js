import React from 'react';
import './Comment.scss';

const Comment = ({ key, newComment }) => {
  return (
    <li key={key} className="comment">
      <span className="fontBold">beozzi__</span>
      {newComment}
    </li>
  );
};

export { Comment };
