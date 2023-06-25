// widget
import WidgetPersonalInformation from "infrastructure/widget/WidgetPersonalInformation";
import WidgetPost from "infrastructure/widget/WidgetPost";

// Components
import HeroBanner from "presentation/component/organism/HeroBanner";
import Overview from "presentation/component/organism/Overview";
import ServiceProcess from "presentation/component/organism/ServiceProcess";
import SectionAbout from "presentation/component/organism/SectionAbout";
import SectionService from "presentation/component/organism/SectionService";
import SectionProduct from "presentation/component/organism/SectionProduct";
import SectionTestimony from "presentation/component/organism/SectionTestimony";

// Templates Default
import Default from "presentation/component/template/Default";

// Dummy Data
import bannerData from "./bannerData";
import overviewData from "./overviewData";
import serviceProcessData from "./serviceProcessData";
import aboutData from "./aboutData";
import serviceData from "./serviceData";
import productData from "./productData";
import testimonyData from "./testimonyData";

const Home = () => {
  return (
    <Default activeMenu="home">
      <HeroBanner data={bannerData} />
      <Overview data={overviewData} />
      <ServiceProcess data={serviceProcessData} />
      <SectionAbout data={aboutData} />
      <SectionService data={serviceData} />
      <SectionProduct data={productData} />
      <SectionTestimony data={testimonyData} />
      <WidgetPersonalInformation />
      <WidgetPost />
    </Default>
  );
};

export default Home;
