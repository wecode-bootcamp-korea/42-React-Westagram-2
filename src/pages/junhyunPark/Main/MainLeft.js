import React from 'react';

function Mainleft() {
  return (
    <div>
      <section className="main-left">
        <div className="feeds">
          <article className="article">
            <div className="profile">
              <img
                className="proFilePic"
                src="images/me1.jpg"
                alt="profilepic"
              />
              <span className="profileName">42_Junhyun</span>
            </div>
            <img className="dogPic" src="images/IMG_2510.JPG" alt="ondal" />
            <div className="emoji">
              <div className="emoji-left">
                <img className="likes" src="images/heart.png" alt="likes" />
                <img className="chat" src="images/chat.png" alt="chat" />
                <img className="send" src="images/send.png" alt="send" />
              </div>
              <div className="emoji-right">
                <img className="mark" src="images/mark.png" alt="mark" />
              </div>
            </div>
            <div className="likePic">
              <img className="ondal" src="images/IMG_2510.JPG" alt="ondal" />
              <span className="likeInfo">
                <h4>ondal님 외 42명이 좋아 합니다 </h4>
              </span>
            </div>
            <div className="comment">
              <h4 className="ondalID">ondal</h4>
              <span>Nice pic ~ :)</span>
              <br />
              <h4 className="yumyumID">yum_yum</h4>
              <span>맞팔해요~👨🏻‍💻 </span>
              <img
                className="heartMini"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="miniHeart"
              />
              <h4 className="chatMin">42분 전</h4>
            </div>

            <div className="BoxComment">
              <input
                className="commentBox"
                type="text "
                placeholder="댓글 달기..."
              />
              <button>게시</button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Mainleft;
