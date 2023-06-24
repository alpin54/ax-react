// Components
import HeroBanner from "presentation/component/organism/HeroBanner";
import Service from "presentation/component/organism/Service";
import ServiceProcess from "presentation/component/organism/ServiceProcess";
import SectionTestimony from "presentation/component/organism/SectionTestimony";


// Templates Default
import Default from "presentation/component/template/Default";

// Dummy Data
import bannerData from "./bannerData";
import serviceData from "./serviceData";
import serviceProcessData from "./serviceProcessData";
import testimonyData from "./testimonyData";

// Dummy Data
const Layanan = () => {
  return (
    <Default activeMenu="layanan">
      <HeroBanner data={bannerData} />
      <Service data={serviceData} />
      <ServiceProcess data={serviceProcessData} />
      <SectionTestimony data={testimonyData} />
    </Default>
  );
};

export default Layanan;
