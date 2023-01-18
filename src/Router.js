import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 김한솔의 컴포넌트
import LoginHansol from './pages/hansolKim/Login/Login';
import MainHansol from './pages/hansolKim/Main/Main';

// 박준현의 컴포넌트
import LoginJunhyun from './pages/JunhyunPark/Login/Login';
import MainJunhyun from './pages/JunhyunPark/Main/Main';

// 성은정의 컴포넌트
import LoginEunjung from './pages/EunjungSung/Login/Login';
import MainEunjung from './pages/EunjungSung/Main/Main';

// 신혜린님의 컴포넌트
import LoginHeylynn from './pages/HeylynnShin/Login/Login';
import MainHeylynn from './pages/HeylynnShin/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-hansol" element={<LoginHansol />} />
        <Route path="/main-hansol" element={<MainHansol />} />
        <Route path="/login-junhyun" element={<LoginJunhyun />} />
        <Route path="/main-junhyun" element={<MainJunhyun />} />
        <Route path="/login-eunjung" element={<LoginEunjung />} />
        <Route path="/main-eunjung" element={<MainEunjung />} />
        <Route path="/login-heylynn" element={<LoginHeylynn />} />
        <Route path="/main-heylynn" element={<MainHeylynn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
