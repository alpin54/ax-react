import style from "./style.module.scss";

import { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = ({ activeMenu }) => {
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
          <div className={style.headerLogo}>
            <Link to={data.logo.to}>
              <img src={data.logo.img} alt={data.logo.alt} />
            </Link>
          </div>
          <div className={style.headerNav}>
            <ul className={style.headerNavMenu}>
              {data.menu.map((val, idx) => {
                return (
                  <Fragment key={idx}>
                    <li className={style.headerNavItem}>
                      <Link
                        className={
                          activeMenu === val.active
                            ? style.headerNavLinkActive
                            : style.headerNavLink
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
          <div className={style.headerTagline}>
            <p className={style.headerTaglineText}>#TAKETHELEAP!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
