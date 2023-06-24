// --- components
import Button from "presentation/component/atom/Button";

// --- style
import style from "./style.module.scss";

const Overview = ({ data }) => {
  return (
    <div className={style.overview}>
      <div className="container">
        <div className={style.text}>
          <h3 className={style.caption}>{data.caption}</h3>
          <h2 className={style.title}>{data.title}</h2>
          <p className={style.desc}>{data.desc}</p>
          <Button type="link" to={data.btn.to}>
            {data.btn.text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
