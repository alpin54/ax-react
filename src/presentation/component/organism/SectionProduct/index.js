import style from "./style.module.scss";
import ProductCard from "presentation/component/molecule/ProductCard";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const SectionProduct = ({ data }) => {
  return (
    <div className={style.product}>
      <div className="container">
        <div className={style.productHead}>
          <h3 className={style.productTitle}>{data.title}</h3>
          <Link className={style.productBtn} to={data.btn.to}>
            {data.btn.text}
          </Link>
        </div>
        <div className={style.productBody}>
          {data.list.map((val, idx) => {
            return (
              <Fragment key={idx}>
                <ProductCard
                  variant={val.variant}
                  to={val.to}
                  image={val.image}
                  title={val.title}
                  price={val.price}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionProduct;
