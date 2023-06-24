import style from "./style.module.scss";

const ServiceProcessCard = (props) => {
  const { primary = false, icon, number, title, desc } = props;
  let classPrimary = primary ? style.primary : '';

  return (
    <div className={`${style.card} ${classPrimary}`}>
      <div className={style.box}>
        <div className={style.icon}>
          <img src={icon} alt={title} />
        </div>
        <div className={style.text}>
          <h4 className={style.number}>{number}</h4>
          <h3 className={style.title}>{title}</h3>
          <p className={style.desc}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcessCard;
