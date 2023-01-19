import React from "react";

function Nav() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-item">
          <div>
            <img className="logo" src="images/logoIMG.png" alt="logo" />
            <img className="dash" src="images/line.png" alt="dash" />
            <h1 className="letterLogo">WesTagram</h1>
          </div>
          <div className="inputName">
            <input type="text" placeholder="검색" />
            <img
              className="inputPic"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
              alt="돋보기"
            />
          </div>

          <div className="topRight">
            <img
              className="Compass"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="compasss"
            />
            <img
              className="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png
            "
              alt="heart"
            />
            <img
              className="myPage"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="myPage"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
