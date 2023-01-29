import React from 'react';

const Comments = props => {
  return (
    <div>
      <div>
        {props.userName} {props.usercomments}
      </div>
    </div>
  );
};

export default Comments;
