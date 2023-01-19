import React from 'react';

const Article = () => {
  return (
    <div className="article">
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
      <div className="commentBox" />
      <div className="commentLine">
        <input type="text" placeholder="댓글달기..." />
        <button className="postBtn">게시</button>
      </div>
    </div>
  );
};

export default Article;
