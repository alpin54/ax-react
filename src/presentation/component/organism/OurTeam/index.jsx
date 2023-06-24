// style
import style from "./style.module.scss";

// molecule
import TeamCard from "presentation/component/molecule/TeamCard";

// react
import { Fragment } from "react";

const OurTeam = ({ data }) => {
  return (
    <div className={style.team}>
      <div className="container">
        <div className={style.teamHead}>
          <h3 className={style.teamTitle}>{data.title}</h3>
        </div>
        <div className={style.teamBody}>
          {data.list.map((val, idx) => {
            return (
              <Fragment key={idx}>
                <TeamCard
                  image={val.image}
                  name={val.name}
                  position={val.position}
                  sosmed={val.sosmed}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
