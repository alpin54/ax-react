import style from "./style.module.scss";
import ButtonText from "presentation/component/atom/ButtonText";
import ProductCard from "presentation/component/molecule/ProductCard";
import { Fragment } from "react";

const SectionProduct = ({ data }) => {
  return (
    <div className={style.product}>
      <div className="container">
        <div className={style.head}>
          <h3 className={style.title}>{data.title}</h3>
          <ButtonText className={style.button} to={data.btn.to}>
            {data.btn.text}
          </ButtonText>
        </div>
        <div className={style.body}>
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
