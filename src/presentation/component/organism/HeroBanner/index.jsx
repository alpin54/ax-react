// --- style
import style from "./style.module.scss";

const HeroBanner = ({ data, activeMenu }) => {
  let classDefault = style.banner;
  if (data.primary) {
    classDefault += " " + style.primary;
  }
  return (
    <div className={classDefault}>
      <div className="container">
        <div className={style.bannerInner}>
          <div className={style.image}>
            <img
              src={data.image}
              alt={data.title}
            />
          </div>
          <div className={style.text}>
            {data.hastag && (
              <span className={style.hastag}>{data.hastag}</span>
            )}
            {data.title && (
              <p className={style.title}>{data.title}</p>
            )}
            {data.desc && (
              <p className={style.desc}>{data.desc}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
