import style from "./style.module.scss";

const HeroBanner = ({ data }) => {
  return (
    <div className={style.heroBanner}>
      <div className="container">
        <div className={style.heroBannerInner}>
          <div className={style.heroBannerBg}>
            <img
              className={style.heroBannerImg}
              src={data.img}
              alt={data.title}
            />
          </div>
          <div className={style.heroBannerTxt}>
            <div className={style.heroBannerTagline}>
              <p className={style.heroBannerTaglineText}>{data.tagline}</p>
            </div>
            <h3 className={style.heroBannerTitle}>{data.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
