import Header from "presentation/component/organism/Header";
import Footer from "presentation/component/organism/Footer";

const Default = ({ activeMenu, children }) => {
  return (
    <>
      <Header activeMenu={activeMenu} />
      <div className="main-site">{children}</div>
      <Footer />
    </>
  );
};

export default Default;
