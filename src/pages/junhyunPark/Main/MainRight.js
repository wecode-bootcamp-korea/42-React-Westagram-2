import React from 'react';
import { FOOTER_INFO_LIST } from './data';

function MainRight() {
  return (
    <div>
      <section className="main-right">
        <div className="side-bar">
          <div className="bootCamp">
            <img
              className="bcPic"
              src="images/junhyunPark/me1.jpg"
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
                <img
                  className="_we_"
                  src="images/junhyunPark/_we_.png"
                  alt="we1"
                />
                <h4 className="_we_2">_we_</h4>
                <h4 className="_we_3">42초 전</h4>
              </div>
              <div>
                <img
                  className="code_"
                  src="images/junhyunPark/code._..png"
                  alt="pinkPIc"
                />
                <h4 className="code_2">code._.</h4>
                <h4 className="code_3">42분 전 </h4>
              </div>
              <div>
                <img
                  className="forty"
                  src="images/junhyunPark/42.png"
                  alt="42"
                />
                <h4 className="fortyTwo">42__</h4>
                <h4 className="fortyThree">42분 전 </h4>
              </div>
              <div>
                <img
                  className="frontEnd"
                  src="images/junhyunPark/frontEnd.png"
                  alt="fE"
                />
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
                <img
                  className="recom1"
                  src="images/junhyunPark/wecode.png"
                  alt=""
                />
                <h4 className="recom2">wecode_bootcamp</h4>
                <h4 className="recom3">_we_ 님 외 12명이... </h4>
              </div>
              <div>
                <img
                  className="recom1"
                  src="images/junhyunPark/wecode.png"
                  alt=""
                />
                <h4 className="recom2">wecode_bootcamp</h4>
                <h4 className="recom3">_we_ 님 외 12명이... </h4>
              </div>
              <div>
                <img
                  className="recom1"
                  src="images/junhyunPark/wecode.png"
                  alt=""
                />
                <h4 className="recom2">wecode_bootcamp</h4>
                <h4 className="recom3">_we_ 님 외 12명이... </h4>
              </div>
            </div>
          </div>

          <footer>
            <ul className="pageInfo">
              {FOOTER_INFO_LIST.map(info => (
                <li key={info.id}>
                  <a className="linkInfo" href={info.link}>
                    {info.text}﹒
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default MainRight;
