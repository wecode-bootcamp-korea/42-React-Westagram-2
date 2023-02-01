const CommentInput = ({ comment }) => {
  return (
    <ul>
      {comment.map(comment => (
        <li key={comment}>heylynn: {comment}</li>
      ))}
    </ul>
  );
};

export default CommentInput;
