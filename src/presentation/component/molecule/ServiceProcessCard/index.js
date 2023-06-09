import style from "./style.module.scss";

const ServiceProcessCard = (props) => {
  const { primary = false, icon, number, title, desc } = props;

  return (
    <div className={primary ? style.cardPrimary : style.card}>
      <div className={style.cardBox}>
        <div className={style.cardIcon}>
          <img src={icon} alt={title} />
        </div>
        <div className={style.cardTxt}>
          <h4 className={style.cardNumber}>{number}</h4>
          <h3 className={style.cardTitle}>{title}</h3>
          <p className={style.cardDesc}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcessCard;
