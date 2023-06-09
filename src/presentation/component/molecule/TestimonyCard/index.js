import style from "./style.module.scss";

const TestimonyCard = (props) => {
  const { image, title, desc } = props;

  return (
    <div className={style.card}>
      <div className={style.cardBox}>
        <div className={style.cardImg}>
          <img src={image} alt={title} />
        </div>
        <div className={style.cardTxt}>
          <h3 className={style.cardTitle}>{title}</h3>
          <p className={style.cardDesc}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
