import style from "./style.module.scss";

import Button from "presentation/component/atom/Button";

const SectionAbout = ({ data }) => {
  return (
    <div className={style.about}>
      <div className="container">
        <div className={style.aboutHead}>
          <h3 className={style.aboutTitle}>{data.headline}</h3>
        </div>
        <div className={style.aboutBody}>
          <div className={style.aboutImg}>
            <img src={data.img} alt={data.title} />
          </div>
          <div className={style.aboutTxt}>
            <h3 className={style.aboutTxtTitle}>
              {data.title}
              <span>LEAP!</span>
            </h3>
            <p className={style.aboutTxtDesc}>{data.desc}</p>
            <Button type="link" to={data.btn.to} variant="secondary">
              {data.btn.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
