import { useState } from 'react';
import { Comment } from './Comment';
import './CommentBox.scss';

const CommentBox = ({ time, commentData }) => {
  const [commentInput, setCommentInput] = useState('');
  const [commentArr, setCommentArr] = useState([]);

  const saveCommentInput = e => {
    setCommentInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (commentInput === '') {
      return;
    }

    commentArr.concat({
      id: commentArr.length + 1,
      content: commentInput,
      profileId: 'beozzi__',
    });

    setCommentArr(currentArr => [commentInput, ...currentArr]);
    setCommentInput('');
  };

  const removeComment = id => {
    return setCommentArr(commentArr.filter(comment => comment.id !== id));
  };

  return (
    <div className="commentBox">
      {commentArr.length > 0 || commentData !== null ? (
        <p className="colorGray">댓글</p>
      ) : null}
      <ul className="commentUl">
        {commentArr.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
            commentData={commentData}
            removeComment={removeComment}
          />
        ))}
      </ul>
      <span className="colorGray">{time}</span>
      <form className="commentForm" onSubmit={onSubmit}>
        <input
          value={commentInput}
          className="commentInput"
          type="text"
          placeholder="댓글 달기..."
          onChange={saveCommentInput}
        />
        <button className="commentBtn">게시</button>
      </form>
    </div>
  );
};

export { CommentBox };
