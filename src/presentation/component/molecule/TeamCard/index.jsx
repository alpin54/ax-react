// style
import style from "./style.module.scss";

// react
import { Fragment } from "react";

const TeamCard = (props) => {
  const { image, name, position, sosmed } = props;

  return (
    <div className={style.card}>
      <div className={style.box}>
        <div className={style.img}>
          <img src={image} alt={name} />
        </div>
        <div className={style.text}>
          <h3 className={style.name}>{name}</h3>
          <p className={style.position}>{position}</p>
          <ul className={style.sosmed}>
            {sosmed.map((val, idx) => {
              return (
                <Fragment key={idx}>
                  <li className={style.sosmedItem}>
                    <a className={style.sosmedLink} href={val.to}>
                      <img className={style.sosmedImg} src={val.icon} alt={val.name} />
                    </a>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
