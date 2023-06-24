import style from "./style.module.scss";

import { Fragment } from "react";

const OurValue = ({ data }) => {
  return (
    <div className={style.our}>
      <div className="container">
        <div className={style.ourHead}>
          <h4 className={style.lead}>{data.lead}</h4>
          <h2 className={style.title}>{data.title}</h2>
          <p className={style.description}>{data.desc}</p>
        </div>
        <div className={style.ourBody}>
          {data.list.map((val, idx) => {
            return (
              <Fragment key={idx}>
                <div className={style.item}>
                  <div className={style.itemIcon}>
                    <img className={style.itemIconImg} src={val.icon} alt={val.title} />
                  </div>
                  <div className={style.itemTxt}>
                    <h4 className={style.itemTitle}>{val.title}</h4>
                    <p className={style.itemDesc}>{val.desc}</p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurValue;
