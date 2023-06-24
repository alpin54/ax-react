import style from "./style.module.scss";

import Button from "presentation/component/atom/Button";

const AboutBanner = ({ data, activeMenu }) => {
  let classStyle = style.banner;
  if (activeMenu === "tentang-kami") {
    classStyle += " " + style.bannerPrimary;
  }
  return (
    <div className={classStyle}>
      <div className="container">
        <div className={style.bannerInner}>
          <div className={style.image}>
            <img src={data.img} alt={data.title} />
          </div>
          <div className={style.text}>
            {data.title && (
              <h3 className={style.title}>{data.title}</h3>
            )}
            {data.desc && (
              <p className={style.desc}>{data.desc}</p>
            )}
            {data.tagline && (
              <h3 className={style.tagline}>{data.tagline}</h3>
            )}
            {data.btn && (
              <Button type="link" to={data.btn.to} variant="secondary">
                {data.btn.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
