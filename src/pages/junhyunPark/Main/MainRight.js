import React from "react";

function MainRight() {
  return (
    <div>
      <section className="main-right">
        <div className="side-bar">
          <div className="bootCamp">
            <img
              className="bcPic"
              src="images/me1.jpg"
              width="40px"
              alt="bcPIc"
            />
            <h4 className="weCode">42_Junhyun</h4>
            <h4 className="weCode2">WeCode|42기</h4>
          </div>

          <div className="storySection">
            <div className="story">스토리</div>
            <div className="seeAll">모두 보기</div>
            <div className="storyPic">
              <div>
                <img className="_we_" src="images/_we_.png" alt="we1" />
                <h4 className="_we_2">_we_</h4>
                <h4 className="_we_3">42초 전</h4>
              </div>
              <div>
                <img className="code_" src="images/code._..png" alt="pinkPIc" />
                <h4 className="code_2">code._.</h4>
                <h4 className="code_3">42분 전 </h4>
              </div>
              <div>
                <img className="forty" src="images/42.png" alt="42" />
                <h4 className="fortyTwo">42__</h4>
                <h4 className="fortyThree">42분 전 </h4>
              </div>
              <div>
                <img className="frontEnd" src="images/frontEnd.png" alt="fE" />
                <h4 className="frontEndTwo" alt="">
                  __qkrwnsgus
                </h4>
                <h4 className="frontEndThree">42분 전</h4>
              </div>
            </div>
          </div>

          <div className="recommend">
            <div className="recommendFor">회원님을 위한 추천</div>
            <div>모두 보기</div>
            <div className="recommendPic">
              <div>
                <img className="recom1" src="images/wecode.png" alt="" />
                <h4 className="recom2">wecode_bootcamp</h4>
                <h4 className="recom3">_we_ 님 외 12명이... </h4>
              </div>
              <div>
                <img className="recom1" src="images/wecode.png" alt="" />
                <h4 className="recom2">wecode_bootcamp</h4>
                <h4 className="recom3">_we_ 님 외 12명이... </h4>
              </div>
              <div>
                <img className="recom1" src="images/wecode.png" alt="" />
                <h4 className="recom2">wecode_bootcamp</h4>
                <h4 className="recom3">_we_ 님 외 12명이... </h4>
              </div>
            </div>
          </div>

          <div className="pageInfo">
            <h4>
              Westagram 정보﹒지원﹒홍보센터﹒API﹒
              <br />
              채용정보﹒개인정보처리방침﹒약관﹒
              <br />
              디렉터리﹒프로필﹒해시태그﹒언어
              <br />
              <br />@ 2023 WESTAGRAM
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainRight;
