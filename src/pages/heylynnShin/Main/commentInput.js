import './CommentInput.scss';

const CommentInput = ({ comment }) => {
  return (
    <ul>
      {comment.map(comment => (
        <li key={comment}>
          <a>heylynn: </a>
          {comment}
        </li>
      ))}
    </ul>
  );
};

export default CommentInput;
