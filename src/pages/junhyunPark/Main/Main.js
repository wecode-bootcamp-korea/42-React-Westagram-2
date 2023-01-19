import "./Main.scss";
import Nav from "./Nav";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="inner">
        <Nav />
        <main>
          <MainLeft />
          <MainRight />
        </main>
      </div>
    </div>
  );
};

export default MainPage;
