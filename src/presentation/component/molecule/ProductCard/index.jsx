import style from "./style.module.scss";
import { Link } from "react-router-dom";
import formatRupiah from "application/util/formatRupiah";

const ProductCard = (props) => {
  const { to, image, title, price } = props;

  return (
    <div className={style.card}>
      <div className={style.box}>
        <Link className={style.link} to={to}></Link>
        <div className={style.image}>
          <img src={image} alt={title} />
        </div>
        <div className={style.text}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.price}>{formatRupiah(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
