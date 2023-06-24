// --- react
import { Fragment } from "react";

// --- style
import style from "./style.module.scss";

const Luxury = ({ data }) => {
  return (
    <div className={style.luxury}>
      <div className="container">
        <div className={style.luxuryInner}>
          <div className={style.text}>
            <h2 className={style.title}>{data.title}</h2>
            <ul className={style.list}>
              {data.list.map((val, idx) => {
                return (
                  <Fragment key={idx}>
                      <li className={style.item}>
                        <p className={style.itemTitle}>{val.title}</p>
                        <p className={style.itemDesc}>{val.desc}</p>
                      </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
          <div className={style.image}>
            <img src={data.img} alt={data.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
