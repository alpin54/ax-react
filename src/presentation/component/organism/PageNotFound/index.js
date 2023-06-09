import style from "./style.module.scss";
import Button from "presentation/component/atom/Button";

const PageNotFound = ({ data }) => {
  return (
    <div className={style.notFound}>
      <div className={style.notFoundInner}>
        <div className={style.notFoundImg}>
          <img src="asset/image/404.svg" alt="page not found" />
        </div>
        <div className={style.notFoundTxt}>
          <Button type="link" to="/">
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
