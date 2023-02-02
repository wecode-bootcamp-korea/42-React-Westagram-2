import React, { useState } from 'react';
import Comments from './Comments';
import './Feed.scss';

const Feed = ({ feed }) => {
  const { id, image, user } = feed;
  const [userId] = useState('noname123');
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const saveComment = e => setComment(e.target.value);
  const post = () => {
    const copyCommentList = [...commentList];
    copyCommentList.push(comment);
    setCommentList(copyCommentList);
    setComment('');
  };
  const postByEnter = e => {
    if (e.keyCode === 13 && comment.length > 0) {
      post();
    }
  };

  return (
    <div className="feed" key={id}>
      <div className="userLine">
        <div className="userLine-left">
          <img src="images/hansolKim/colorprofile.png" alt="colorprofile" />
          <span>{user}</span>
        </div>
        <div className="userLine-right">
          <img src="images/hansolKim/dots.png" alt="dots" />
        </div>
      </div>
      <div className="imageLine">
        <img src={image} alt="myimage" />
      </div>
      <div className="imojiLine">
        <div className="imoji-left">
          <img src="images/hansolKim/heart.png" alt="heart" />
          <img src="images/hansolKim/comment.png" alt="comment" />
          <img src="images/hansolKim/upload.png" alt="upload" />
        </div>
        <div className="imoji-right">
          <img src="images/hansolKim/flag.png" alt="flag" />
        </div>
      </div>
      <div className="likeLine">
        <img src="images/hansolKim/profile.png" alt="profile" />
        <span>barcode님 외 3명이 좋아합니다</span>
      </div>
      <div className="commentBox">
        {commentList.map(com => (
          <Comments
            userName={userId}
            usercomments={com}
            key={commentList.indexOf(com) + 1}
            commentId={commentList.indexOf(com) + 1}
          />
        ))}
      </div>
      <div className="commentLine">
        <input
          type="text"
          placeholder="댓글달기..."
          onChange={saveComment}
          onKeyUp={postByEnter}
          value={comment}
        />
        <button
          className="postBtn"
          onClick={post}
          disabled={!(comment.length > 0)}
        >
          게시
        </button>
      </div>
    </div>
  );
};

export default Feed;
