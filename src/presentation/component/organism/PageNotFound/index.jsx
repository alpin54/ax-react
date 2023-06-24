// --- components
import Button from "presentation/component/atom/Button";

// --- style
import style from "./style.module.scss";

const PageNotFound = ({ data }) => {
  return (
    <div className={style.notFound}>
      <div className={style.notFoundInner}>
        <div className={style.image}>
          <img src="asset/image/404.svg" alt="page not found" />
        </div>
        <div className={style.text}>
          <Button type="link" to="/">
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
