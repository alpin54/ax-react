import style from "./style.module.scss";
import Button from "presentation/component/atom/Button";
import TestimonyCard from "presentation/component/molecule/TestimonyCard";
import { Fragment } from "react";

const SectionTestimony = ({ data }) => {
  return (
    <div className={style.testimony}>
      <div className="container">
        <div className={style.testimonyInner}>
          <div className={style.testimonyTxt}>
            <p className={style.testimonyCaption}>{data.caption}</p>
            <h3 className={style.testimonyTitle}>{data.title}</h3>
            <Button>Berikan Testimoni</Button>
          </div>
          <div className={style.testimonyList}>
            <div className={style.testimonySlidder}>
              {data.list.map((val, idx) => {
                return (
                  <Fragment key={idx}>
                    <TestimonyCard
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
      </div>
    </div>
  );
};

export default SectionTestimony;
