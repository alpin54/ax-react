import style from "./style.module.scss";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const { variant = false, to, image, title, desc } = props;
  let classCommingSoon = variant ? style.commingSoon : '';

  return (
    <div className={`${style.card} ${classCommingSoon}`}>
      <div className={style.box}>
        <Link className={style.link} to={to}></Link>
        <div className={style.image}>
          <img src={image} alt={title} />
        </div>
        <div className={style.text}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.desc}>{desc}</p>
        </div>
        {variant && (
          <p className={style.badge}>Coming Soon</p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
