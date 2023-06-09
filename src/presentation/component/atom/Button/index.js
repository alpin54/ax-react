// eslint-disable-next-line
import style from "./style.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

const Button = (props) => {
  const {
    to,
    children,
    type = "button",
    variant = "primary",
    block = false,
  } = props;

  let _variant = style.btnPrimary;

  if (variant !== "primary") {
    _variant = style.btnSecondary;
  }

  const classNames = cn(`${_variant}`, {
    btnBlock: block,
  });

  return (
    <>
      {type === "link" && (
        <Link className={classNames} to={to}>
          {children}
        </Link>
      )}
      {type === "button" && (
        <button type={type} className={classNames}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
