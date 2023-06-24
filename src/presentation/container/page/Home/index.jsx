// import { useState, userEffect } from "react";
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

// import { useUser } from "application/model/users";

const Home = () => {
  // const { data: dataTodo } = useFetch(
  //   "https://jsonplaceholder.typicode.com/todos"
  // );
  // const { dataUser, seDataUser } = useState(null);
  // const dataUser = useUser

  // userEffect(() => {

  // }, []);

  return (
    <Default activeMenu="home">
      {/* {dataTodo.length ? (
        <>
          <h3>data Todo</h3>
          <ul>
            {dataTodo.map((val, idx) => (
              <li key={val.id}>{val.title}</li>
            ))}
          </ul>
        </>
      ) : (
        "Loading Users"
      )} */}
      <HeroBanner data={bannerData} />
      <Overview data={overviewData} />
      <ServiceProcess data={serviceProcessData} />
      <SectionAbout data={aboutData} />
      <SectionService data={serviceData} />
      <SectionProduct data={productData} />
      <SectionTestimony data={testimonyData} />
    </Default>
  );
};

export default Home;
