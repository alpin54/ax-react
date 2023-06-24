import style from "./style.module.scss";
import ButtonText from "presentation/component/atom/ButtonText";
import ServiceCard from "presentation/component/molecule/ServiceCard";
import { Fragment } from "react";

const SectionService = ({ data }) => {
  return (
    <div className={style.service}>
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
