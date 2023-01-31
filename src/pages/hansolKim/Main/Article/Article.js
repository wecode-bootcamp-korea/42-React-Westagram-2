import React, { useState } from 'react';
import Comments from './Comments';
import './Article.scss';

const Article = () => {
  const [user] = useState('noname123');
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const saveComment = e => setComment(e.target.value);
  const post = e => {
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
  const showComments = commentList.map((com, i) => (
    <Comments userName={user} usercomments={com} key={i} />
  ));

  return (
    <section className="article">
      <div className="articleForm">
        <div className="userLine">
          <div className="userLine-left">
            <img src="images/hansolKim/colorprofile.png" alt="colorprofile" />
            <span>kimhansol5334</span>
          </div>
          <div className="userLine-right">
            <img src="images/hansolKim/dots.png" alt="dots" />
          </div>
        </div>
        <div className="imageLine">
          <img src="images/hansolKim/myimage.jpg" alt="myimage" />
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
        <div className="commentBox">{showComments}</div>
        <div className="commentLine">
          <input
            type="text"
            placeholder="댓글달기..."
            onChange={saveComment}
            onKeyUp={postByEnter}
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
    </section>
  );
};

export default Article;
