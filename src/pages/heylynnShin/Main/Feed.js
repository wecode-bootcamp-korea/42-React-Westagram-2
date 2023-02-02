import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faArrowUpFromBracket,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import CommentInput from './CommentInput';
import './Feed.scss';
import Liked from './Liked';

const Feed = ({ list }) => {
  console.log(list.profileId);
  const [input, setInput] = useState('');
  const [commentList, setCommentList] = useState([]);
  const onChangeInput = e => {
    setInput(e.target.value);
    console.log(input);
  };
  const onClickComment = e => {
    e.preventDefault();
    setCommentList([...commentList, input]);
    setInput('');
  };

  return (
    <div className="feeds">
      <article className="feed">
        <section className="profileContainer">
          <div className="feedProfile">
            <div className="imageAndIdContainer">
              <div className="imageConatiner">
                <img
                  src={list.profileImage}
                  className="image"
                  alt="profile pic"
                />
              </div>
              <p className="id">{list.profileId}</p>
            </div>
          </div>
        </section>
        <section className="feedImageContainer">
          <img src={list.feedImage} alt="feed pic" className="feedImage" />
        </section>
        <div className="belowFeedImage">
          <section className="feedIconContainer">
            <div className="iconContainer">
              <FontAwesomeIcon icon={faHeart} classname="heart" size="s" />
              <FontAwesomeIcon icon={faComment} classname="comment" size="s" />
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                classname="share"
                size="s"
              />
            </div>
            <div className="bookmarkIconContainer">
              <FontAwesomeIcon
                icon={faBookmark}
                classname="bookmark"
                size="s"
              />
            </div>
          </section>

          <section className="feedText">
            <Liked />
            <div className="postContainer">
              <a className="id">conon_mj</a>
              <p className="post">위워크에서 진행한 베이킹 클래스...</p>
              <p className="more">더보기</p>
            </div>
            <div className="writtenCommentContainer">
              <a className="id">neceosecius</a>
              <p className="writtenComment">거봐 좋았잖아~~~~~🙆🏻‍♀️</p>
            </div>
            <div className="timeConatiner">
              <p className="time">42분 전</p>
            </div>
          </section>
        </div>
        <CommentInput comment={commentList} />
        <form onSubmit={onClickComment} className="commentContainer">
          <input
            value={input}
            onChange={onChangeInput}
            type="text"
            placeholder="댓글 달기..."
            className="inputComment"
          />
          <button className="commentBtn">게시</button>
        </form>
      </article>
    </div>
  );
};

export default Feed;
