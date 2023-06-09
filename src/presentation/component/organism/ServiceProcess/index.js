import style from "./style.module.scss";
import ServiceProcessCard from "presentation/component/molecule/ServiceProcessCard";
import { Fragment } from "react";

const ServiceProcess = ({ data }) => {
  return (
    <div className={style.serviceProcess}>
      <div className="container">
        <div className={style.serviceProcessHead}>
          <p className={style.serviceProcessCaption}>{data.caption}</p>
          <h3 className={style.serviceProcessTitle}>{data.title}</h3>
        </div>
        <div className={style.serviceProcessBody}>
          {data.list.map((val, idx) => {
            return (
              <Fragment key={idx}>
                <ServiceProcessCard
                  primary={val.primary}
                  icon={val.icon}
                  title={val.title}
                  desc={val.desc}
                  number={"0" + (idx + 1)}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
