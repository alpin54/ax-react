import style from "./style.module.scss";

const TestimonyCard = (props) => {
  const { image, title, desc } = props;

  return (
    <div className={style.card}>
      <div className={style.box}>
        <div className={style.image}>
          <img src={image} alt={title} />
        </div>
        <div className={style.text}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.desc}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
