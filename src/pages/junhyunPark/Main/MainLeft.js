import React from 'react';
import { useState } from 'react';
import Comment from './Comment';

function Mainleft({ feed }) {
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
              <div>
                <img
                  className="proFilePic"
                  alt="User Profile Img"
                  src={feed.id_image}
                />
                <span className="profileName">{feed.id}</span>
                <img className="dot" alt="dot" src={feed.image_dot} />
              </div>
            </div>
            <img className="dogPic" src={feed.feed_image} alt="ondal" />
            <div className="emoji">
              <div className="emoji-left">
                <img className="likes" src={feed.heart_icon} alt="likes" />
                <img className="chat" src={feed.chat_icon} alt="chat" />
                <img className="send" src={feed.send_icon} alt="send" />
              </div>
              <div className="emoji-right">
                <img className="mark" src={feed.mark_icon} alt="mark" />
              </div>
            </div>
            <div className="likePic">
              <img className="ondal" src={feed.id_ondal_images} alt="ondal" />
              <span className="likeInfo">
                <h4>{feed.feed_liked}</h4>
              </span>
            </div>
            <div className="comment">
              <h4 className="ondalID">{feed.id_ondal}</h4>
              <span>{feed.id_ondal_comment}</span>
              <br />
              <h4 className="yumyumID">{feed.id_yumyum}</h4>
              <span>{feed.id_yumyum_comment}</span>

              <h4 className="chatMin">42분 전</h4>

              <div className="commWrap">
                <ul className="feedComments">
                  {feedComments.map(el => (
                    <Comment key={comments.id} el={el} />
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
