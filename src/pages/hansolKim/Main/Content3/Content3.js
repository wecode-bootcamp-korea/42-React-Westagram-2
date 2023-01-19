import React from 'react';
import Story from './Story';
import Recommen from './Recommen';
import Username from './Username';

const Content3 = () => {
  return (
    <>
      <Username />
      <Story />
      <Recommen />
      <div className="copyright text2">
        Westagram 정보 . 지원 . 홍보센터 . API . 채용 정보 . 개인정보처리방침 .
        약관 . 디렉터리 . 프로필 . 해시태그 . 언어 {'\n'} {'\n'}ⓒ 2023 WESTAGRAM
      </div>
    </>
  );
};

export default Content3;
