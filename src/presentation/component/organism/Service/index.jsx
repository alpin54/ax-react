import style from "./style.module.scss";
import ServiceCard from "presentation/component/molecule/ServiceCard";
import { Fragment } from "react";

const Service = ({ data }) => {
  return (
    <div className={style.service}>
      <div className="container">
        <div className={style.list}>
          {data.map((val, idx) => {
            return (
              <Fragment key={idx}>
                <ServiceCard
                  variant={val.variant}
                  to={val.to}
                  image={val.image}
                  title={val.title}
                  desc={val.desc}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
