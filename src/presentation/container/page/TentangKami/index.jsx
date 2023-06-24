// Components
import AboutBanner from "presentation/component/organism/AboutBanner";
import OurValue from "presentation/component/organism/OurValue";
import Luxury from "presentation/component/organism/Luxury";
import OurTeam from "presentation/component/organism/OurTeam";
import SectionTestimony from "presentation/component/organism/SectionTestimony";

// Templates Default
import Default from "presentation/component/template/Default";

// Dummy Data
import aboutData from "./aboutData";
import ourValueData from "./ourValueData";
import luxuryData from "./luxuryData";
import ourTeamData from "./ourTeamData";
import testimonyData from "./testimonyData";

const Tentangkami = () => {
  return (
    <Default activeMenu="tentang-kami">
      <AboutBanner data={aboutData} />
      <OurValue data={ourValueData} />
      <Luxury data={luxuryData} />
      <OurTeam data={ourTeamData} />
      <SectionTestimony data={testimonyData} />
    </Default>
  );
};

export default Tentangkami;
