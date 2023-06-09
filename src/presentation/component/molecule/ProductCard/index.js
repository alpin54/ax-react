import style from "./style.module.scss";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { to, image, title, price } = props;

  return (
    <div className={style.card}>
      <div className={style.cardBox}>
        <Link className={style.cardLink} to={to}></Link>
        <div className={style.cardImg}>
          <img src={image} alt={title} />
        </div>
        <div className={style.cardTxt}>
          <h3 className={style.cardTitle}>{title}</h3>
          <p className={style.cardPrice}>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
