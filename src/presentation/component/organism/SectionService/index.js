import style from "./style.module.scss";
import ServiceCard from "presentation/component/molecule/ServiceCard";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const SectionService = ({ data }) => {
  return (
    <div className={style.service}>
      <div className="container">
        <div className={style.serviceHead}>
          <h3 className={style.serviceTitle}>{data.title}</h3>
          <Link className={style.serviceBtn} to={data.btn.to}>
            {data.btn.text}
          </Link>
        </div>
        <div className={style.serviceBody}>
          {data.list.map((val, idx) => {
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

export default SectionService;
