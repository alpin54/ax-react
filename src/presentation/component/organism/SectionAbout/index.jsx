import style from "./style.module.scss";

import ButtonText from "presentation/component/atom/ButtonText";
import AboutBanner from "presentation/component/organism/AboutBanner";

const SectionAbout = ({ data }) => {
  return (
    <div className={style.about}>
      <div className="container">
        <div className={style.head}>
          <h3 className={style.title}>{data.headline}</h3>
          <ButtonText className={style.button} to={data.btn.to}>
            {data.btn.text}
          </ButtonText>
        </div>
        <AboutBanner data={data} />
      </div>
    </div>
  );
};

export default SectionAbout;
