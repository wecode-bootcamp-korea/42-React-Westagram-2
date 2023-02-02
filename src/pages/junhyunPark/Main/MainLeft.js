import React from 'react';
import { useState } from 'react';
import Comment from './Comment';

function Mainleft({ feed }) {
  const [comments, setComments] = useState('');

  const [feedComments, setFeedComments] = useState([]);

  const onClickComment = e => {
    e.preventDefault();
    if (!comments) return;

    setFeedComments([
      ...feedComments,
      { id: feedComments.length + 1, text: comments },
    ]);
    setComments('');
  };

  const onKeyPressComment = e => {
    if (e.key === 'Enter') {
      onClickComment();
    }
  };

  const onChangeComment = e => setComments(e.target.value);

  const deleteComment = id => {
    const nextComments = feedComments.filter(comment => comment.id !== id);
    setFeedComments(nextComments);
  };

  return (
    <div>
      <section className="mainLeft">
        <div className="feeDs">
          <article className="artiCle">
            <div className="proFile">
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
            <div className="emoJi">
              <div className="emojiLeft">
                <img className="liKes" src={feed.heart_icon} alt="likes" />
                <img className="chAt" src={feed.chat_icon} alt="chat" />
                <img className="sEnd" src={feed.send_icon} alt="send" />
              </div>
              <div className="emoji-right">
                <img className="mArk" src={feed.mark_icon} alt="mark" />
              </div>
            </div>
            <div className="likePic">
              <img className="onDal" src={feed.id_ondal_images} alt="ondal" />
              <span className="likeInfo">
                <h4>{feed.feed_liked}</h4>
              </span>
            </div>
            <div className="commEnt">
              <h4 className="ondalID">{feed.id_ondal}</h4>
              <span>{feed.id_ondal_comment}</span>
              <br />
              <h4 className="yumyumID">{feed.id_yumyum}</h4>
              <span>{feed.id_yumyum_comment}</span>

              <h4 className="chatMin">42분 전</h4>

              <div className="commWrap">
                <Comment
                  feedComments={feedComments}
                  deleteComment={deleteComment}
                />
              </div>
            </div>
          </article>

          <div className="BoxComment">
            <div className="feedComments">
              <form>
                <input
                  className="commentBox"
                  type="text "
                  placeholder="댓글 달기..."
                  onChange={onChangeComment}
                  value={comments}
                  onKeyDown={onKeyPressComment}
                />
                <button onClick={onClickComment}>게시</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mainleft;
