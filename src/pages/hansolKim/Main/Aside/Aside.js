import React from 'react';
import Story from './Story';
import Recommend from './Recommend';
import Username from './Username';
import './Aside.scss';

const Aside = () => {
  return (
    <section className="aside">
      <Username />
      <Story />
      <Recommend />
      <div className="copyright normalText">
        Westagram 정보 . 지원 . 홍보센터 . API . 채용 정보 . 개인정보처리방침 .
        약관 . 디렉터리 . 프로필 . 해시태그 . 언어 {'\n'} {'\n'}ⓒ 2023 WESTAGRAM
      </div>
    </section>
  );
};

export default Aside;
