import React from 'react';

const Article = () => {
  return (
    <div className="article">
      <div className="userLine">
        <div className="userLine-left">
          <img src="images/hansolKim/colorprofile.png" />
          <span>kimhansol5334</span>
        </div>
        <div className="userLine-right">
          <img src="images/hansolKim/dots.png" />
        </div>
      </div>
      <div className="imageLine">
        <img src="images/hansolKim/myimage.jpg" />
      </div>
      <div className="imojiLine">
        <div className="imoji-left">
          <img src="images/hansolKim/heart.png" />
          <img src="images/hansolKim/comment.png" />
          <img src="images/hansolKim/upload.png" />
        </div>
        <div className="imoji-right">
          <img src="images/hansolKim/flag.png" />
        </div>
      </div>
      <div className="likeLine">
        <img src="images/hansolKim/profile.png" />
        <span>barcode님 외 3명이 좋아합니다</span>
      </div>
    </div>
  );
};

export default Article;
