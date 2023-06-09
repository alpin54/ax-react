import style from "./style.module.scss";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const { variant = false, to, image, title, desc } = props;

  return (
    <div className={variant ? style.cardCommingSoon : style.card}>
      <div className={style.cardBox}>
        <Link className={style.cardLink} to={to}></Link>
        <div className={style.cardImg}>
          <img src={image} alt={title} />
        </div>
        <div className={style.cardTxt}>
          <h3 className={style.cardTitle}>{title}</h3>
          <p className={style.cardDesc}>{desc}</p>
        </div>
        {variant && (
          <div className={style.cardBadge}>
            <p className={style.cardBadgeText}>Coming Soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
