// --- core
import { Fragment } from "react";
import { Link } from "react-router-dom";

// --- style
import style from "./style.module.scss";

const Header = ({ activeMenu }) => {
  // --- data
  const data = {
    logo: {
      to: "/",
      img: "asset/image/logo/baron.svg",
      alt: "Baron & CO",
    },
    menu: [
      {
        to: "/tentang-kami",
        text: "Tentang Kami",
        active: "tentang-kami",
      },
      {
        to: "/layanan",
        text: "Layanan",
        active: "layanan",
      },
      {
        to: "/produk",
        text: "Produk",
        active: "produk",
      },
      {
        to: "/galeri",
        text: "Galeri",
        active: "galeri",
      },
      {
        to: "/kontak-kami",
        text: "Kontak Kami",
        active: "kontak-kami",
      },
    ],
  };

  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.headerInner}>
          <div className={style.logo}>
            <Link to={data.logo.to}>
              <img src={data.logo.img} alt={data.logo.alt} />
            </Link>
          </div>
          <div className={style.navigation}>
            <ul className={style.menu}>
              {data.menu.map((val, idx) => {
                return (
                  <Fragment key={idx}>
                    <li className={style.menuItem}>
                      <Link
                        className={
                          activeMenu === val.active
                            ? `${style.menuLink} ${style.active}`
                            : style.menuLink
                        }
                        to={val.to}
                      >
                        {val.text}
                      </Link>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
          <span className={style.hastag}>#TAKETHELEAP!</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
