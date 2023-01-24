import React from 'react';
import { useState } from 'react';
function Mainleft() {
  const [comments, setComments] = useState('');

  const postComments = e => {
    const commentsValue = e.target.value;
    setComments(commentsValue);
  };

  const [feedComments, setFeedComments] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    if (comments === '') {
      return;
    }
    setFeedComments(commentsValueList => [comments, ...commentsValueList]);
    setComments('');
  };

  return (
    <div>
      <section className="main-left">
        <div className="feeds">
          <article className="article">
            <div className="profile">
              <img
                className="proFilePic"
                src="images/junhyunPark/me1.jpg"
                alt="profilepic"
              />
              <span className="profileName">42_Junhyun</span>
              <img
                className="dot"
                alt="dot"
                src="images/junhyunPark/more.png"
              />
            </div>
            <img
              className="dogPic"
              src="images/junhyunPark/IMG_2510.JPG"
              alt="ondal"
            />
            <div className="emoji">
              <div className="emoji-left">
                <img
                  className="likes"
                  src="images/junhyunPark/heart.png"
                  alt="likes"
                />
                <img
                  className="chat"
                  src="images/junhyunPark/chat.png"
                  alt="chat"
                />
                <img
                  className="send"
                  src="images/junhyunPark/send.png"
                  alt="send"
                />
              </div>
              <div className="emoji-right">
                <img
                  className="mark"
                  src="images/junhyunPark/mark.png"
                  alt="mark"
                />
              </div>
            </div>
            <div className="likePic">
              <img
                className="ondal"
                src="images/junhyunPark/IMG_2510.JPG"
                alt="ondal"
              />
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

              <h4 className="chatMin">42분 전</h4>

              <div>
                <ul className="feedComments">
                  {feedComments.map((el, idx) => (
                    <li key={idx}>
                      <span className="commId">jp_ </span> {feedComments[idx]}
                      <img
                        className="delete"
                        alt="delete"
                        src="images/junhyunPark/bin.png"
                      />
                      <img
                        className="heartMini"
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                        alt="miniHeart"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="BoxComment" onSubmit={onSubmit}>
            <form className="commentWrap">
              <input
                className="commentBox"
                type="text "
                placeholder="댓글 달기..."
                onChange={postComments}
                value={comments}
              />
              <button>게시</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mainleft;
