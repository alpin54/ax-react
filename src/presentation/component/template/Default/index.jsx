// --- components
import Header from "presentation/component/organism/Header";
import Footer from "presentation/component/organism/Footer";

// --- style
import style from "./style.module.scss";

const Default = ({ activeMenu, children }) => {
  return (
    <>
      <Header activeMenu={activeMenu} />
      <div className={style.default}>{children}</div>
      <Footer />
    </>
  );
};

export default Default;
