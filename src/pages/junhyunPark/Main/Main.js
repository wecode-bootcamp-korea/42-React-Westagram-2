import MainLeft from './MainLeft';
import MainRight from './MainRight';
import './Main.scss';

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="inner">
        {/* <Nav /> */}
        <main>
          <MainLeft />
          <MainRight />
        </main>
      </div>
    </div>
  );
};

export default MainPage;
