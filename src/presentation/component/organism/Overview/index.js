import style from "./style.module.scss";
import Button from "presentation/component/atom/Button";

const Overview = ({ data }) => {
  return (
    <div className={style.overview}>
      <div className="container">
        <div className={style.overviewTxt}>
          <h3 className={style.overviewCaption}>{data.caption}</h3>
          <h2 className={style.overviewTitle}>{data.title}</h2>
          <p className={style.overviewDesc}>{data.desc}</p>
          <Button type="link" to={data.btn.to}>
            {data.btn.text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
