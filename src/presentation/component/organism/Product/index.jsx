import style from "./style.module.scss";
import ProductCard from "presentation/component/molecule/ProductCard";
import { Fragment } from "react";

const Product = ({ data }) => {
  return (
    <div className={style.product}>
      <div className="container">
        <div className={style.list}>
          {data.map((val, idx) => {
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

export default Product;
