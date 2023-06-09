import style from "./style.module.scss";

import { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = {
    logo: {
      to: "/",
      img: "asset/image/logo/baron-text.svg",
      alt: "Baron & CO",
    },
    title: "Berlangganan Newsletter!",
    desc: "Dapatkan informasi terbaru tentang layanan, produk dan promo BARON & CO dengan mengisi emailmu!",
    about:
      "BARON & CO adalah solusi untuk perawatan sepatu yang tepat dengan hasil maksimal.",
    sosmed: [
      {
        to: "tiktok.com",
        name: "tiktok",
        icon: "asset/image/icon/tiktok.svg",
      },
      {
        to: "twitter.com",
        name: "twitter",
        icon: "asset/image/icon/twitter.svg",
      },
      {
        to: "instagram.com",
        name: "instagram",
        icon: "asset/image/icon/instagram.svg",
      },
      {
        to: "facebook.com",
        name: "facebook",
        icon: "asset/image/icon/facebook.svg",
      },
      {
        to: "linkedin.com",
        name: "linkedin",
        icon: "asset/image/icon/linkedin.svg",
      },
    ],
    nav: [
      {
        title: "Tentang Kami",
        menu: [
          {
            to: "/tentang-kami",
            text: "Tentang Kami",
          },
          {
            to: "/galeri",
            text: "Galeri",
          },
          {
            to: "/kontak-kami",
            text: "Kontak Kami",
          },
          {
            to: "/sitemap",
            text: "Sitemap",
          },
        ],
      },
      {
        title: "Layanan",
        menu: [
          {
            to: "/layanan",
            text: "Layanan",
          },
          {
            to: "/proses",
            text: "Proses",
          },
          {
            to: "/produk",
            text: "Produk",
          },
        ],
      },
      {
        title: "Jam Buka",
        menu: [
          {
            text: "9 AM - 10 PM, Senin-Sabtu",
          },
          {
            text: "Jl. Raya Cipasung RT.09 / RW.03 Kecamatan Darma, Kabupaten Kuningan, Jawa Barat 45562",
          },
        ],
      },
    ],
    author: "Design & Develop by ",
    copyright: "© 2023 BARON & CO. All Rights Reserved",
  };
  return (
    <div className={style.footer}>
      <div className={style.footerTop}>
        <div className="container">
          <div className={style.footerInner}>
            <div className={style.footerTxt}>
              <h4 className={style.footerTxtTitle}>{data.title}</h4>
              <p className={style.footerTxtDesc}>{data.desc}</p>
            </div>
            <div className={style.footerForm}>
              <input
                type="text"
                name="email"
                className={style.footerInput}
                id="email"
                placeholder="Masukkan alamat emailmu!"
              />
              <button type="button" className={style.footerButton}>
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footerMid}>
        <div className="container">
          <div className={style.footerInner}>
            <div className={style.footerNav}>
              {data.nav.map((val, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={style.footerNavItem}>
                      <h3 className={style.footerTitle}>{val.title}</h3>
                      <ul className={style.footerMenu}>
                        {val.menu.map((vItem, iItem) => {
                          if (vItem.to) {
                            return (
                              <Fragment key={iItem}>
                                <li className={style.footerMenuItem}>
                                  <Link
                                    to={vItem.to}
                                    className={style.footerMenuLink}
                                  >
                                    {vItem.text}
                                  </Link>
                                </li>
                              </Fragment>
                            );
                          } else {
                            return (
                              <Fragment key={iItem}>
                                <li className={style.footerMenuItem}>
                                  {vItem.text}
                                </li>
                              </Fragment>
                            );
                          }
                        })}
                      </ul>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div className={style.footerAbout}>
              <div className={style.footerLogo}>
                <Link to={data.logo.to} className={style.footerLogoLink}>
                  <img
                    className={style.footerLogoImg}
                    src={data.logo.img}
                    alt={data.logo.alt}
                  />
                </Link>
              </div>
              <p className={style.footerAboutDesc}>
                {data.about}
                <strong>
                  Melangkah tanpa ragu, melangkah yang berarti.{" "}
                  <span>TAKE THE LEAP!</span>
                </strong>
              </p>
              <div className={style.footerSosmed}>
                <p className={style.footerSosmedTitle}>Find and Follow Us</p>
                <ul className={style.footerSosmedList}>
                  {data.sosmed.map((val, idx) => {
                    return (
                      <Fragment key={idx}>
                        <li className={style.footerSosmedItem}>
                          <Link to={val.to} className={style.footerSosmedLink}>
                            <img src={val.icon} alt={val.name} />
                          </Link>
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footerBot}>
        <div className="container">
          <div className={style.footerInner}>
            <p className={style.footerAuthor}>
              {data.author}
              <span>Bilik Media</span>
            </p>
            <p className={style.footerCopyright}>{data.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
