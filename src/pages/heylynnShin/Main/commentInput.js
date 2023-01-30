const CommentInput = props => {
  const { comment } = props;

  return (
    <ul>
      {comment.map(comment => (
        <li key={comment}>heylynn: {comment}</li>
      ))}
    </ul>
  );
};

export default CommentInput;
