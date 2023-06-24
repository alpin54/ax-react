// --- core
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "presentation/component/atom/Button";

// --- style
import style from "./style.module.scss";

const Footer = () => {
  const data = {
    logo: {
      to: "/",
      img: "asset/image/logo/baron-text.svg",
      alt: "Baron & CO",
    },
    title: "Berlangganan Newsletter!",
    desc: "Dapatkan informasi terbaru tentang layanan, produk dan promo BARON & CO dengan mengisi emailmu!",
    about:(
      <>
        BARON & CO adalah solusi untuk perawatan sepatu yang tepat dengan hasil maksimal. <strong> Melangkah tanpa ragu, melangkah yang berarti.<span>TAKE THE LEAP!</span></strong>
      </>
    ),
    sosmed: {
      title: 'Find and Follow Us',
      list: [
        {
          to: "https://www.tiktok.com",
          name: "tiktok",
          icon: "asset/image/icon/tiktok.svg",
        },
        {
          to: "https://www.twitter.com",
          name: "twitter",
          icon: "asset/image/icon/twitter.svg",
        },
        {
          to: "https://www.instagram.com",
          name: "instagram",
          icon: "asset/image/icon/instagram.svg",
        },
        {
          to: "https://www.facebook.com",
          name: "facebook",
          icon: "asset/image/icon/facebook.svg",
        },
        {
          to: "https://www.linkedin.com",
          name: "linkedin",
          icon: "asset/image/icon/linkedin.svg",
        },
      ],
    },
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
    author: (
      <>
        Design & Develop by <span>Bilik Media</span>
      </>
    ),
    copyright: "© 2023 BARON & CO. All Rights Reserved",
  };
  return (
    <div className={style.footer}>
      <div className={style.top}>
        <div className="container">
          <div className={style.footerInner}>
            <div className={style.text}>
              <h4 className={style.textTitle}>{data.title}</h4>
              <p className={style.textDesc}>{data.desc}</p>
            </div>
            <div className={style.form}>
              <input
                type="text"
                name="email"
                className={style.formInput}
                id="email"
                placeholder="Masukkan alamat emailmu!"
              />
              <Button variant="tertiary">
                Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.middle}>
        <div className="container">
          <div className={style.footerInner}>
            <div className={style.navigation}>
              {data.nav.map((val, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={style.navigationItem}>
                      <h3 className={style.title}>{val.title}</h3>
                      <ul className={style.menu}>
                        {val.menu.map((vItem, iItem) => {
                          if (vItem.to) {
                            return (
                              <Fragment key={iItem}>
                                <li className={style.menuItem}>
                                  <Link
                                    to={vItem.to}
                                    className={style.menuLink}
                                  >
                                    {vItem.text}
                                  </Link>
                                </li>
                              </Fragment>
                            );
                          } else {
                            return (
                              <Fragment key={iItem}>
                                <li className={style.menuItem}>
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
            <div className={style.about}>
              <div className={style.logo}>
                <Link to={data.logo.to} className={style.logoLink}>
                  <img
                    className={style.logoImg}
                    src={data.logo.img}
                    alt={data.logo.alt}
                  />
                </Link>
              </div>
              <p className={style.aboutDesc}>
                {data.about}
              </p>
              <div className={style.sosmed}>
                <p className={style.sosmedTitle}>{data.sosmed.title}</p>
                <ul className={style.sosmedList}>
                  {data.sosmed.list.map((val, idx) => {
                    return (
                      <Fragment key={idx}>
                        <li className={style.sosmedItem}>
                          <a
                            href={val.to}
                            target="_blank"
                            rel="noreferrer"
                            className={style.sosmedLink}
                          >
                            <img src={val.icon} alt={val.name} />
                          </a>
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
      <div className={style.bottom}>
        <div className="container">
          <div className={style.footerInner}>
            <p className={style.author}>{data.author}</p>
            <p className={style.copyright}>{data.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
