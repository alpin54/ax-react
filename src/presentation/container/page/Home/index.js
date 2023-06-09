// Components
import HeroBanner from "presentation/component/organism/HeroBanner";
import Overview from "presentation/component/organism/Overview";
import ServiceProcess from "presentation/component/organism/ServiceProcess";
import SectionAbout from "presentation/component/organism/SectionAbout";
import SectionService from "presentation/component/organism/SectionService";
import SectionProduct from "presentation/component/organism/SectionProduct";
import SectionTestimony from "presentation/component/organism/SectionTestimony";

// Templates Default
import Default from "presentation/component/template/Default";

// data banner
const dataBanner = {
  img: "asset/image/hero-banner.jpg",
  tagline: "#TAKETHELEAP!",
  title: "Melangkah tanpa ragu, melangkah yang berarti",
};

// data overview
const dataOverview = {
  caption: "BACON & CO",
  title: "PREMIUM SHOES & CARE.",
  desc: "Solusi perawatan sepatu yang tepat dengan hasil maksimal. Pesan dari rumah, kami rawat sepatumu!",
  btn: {
    to: "/pesan",
    text: "Pesan",
  },
};

// data service process
const dataServiceProcess = {
  caption: "Proses Kami",
  title: `Diam di rumah, biar Kami yang menyelesaikannya untukmu`,
  list: [
    {
      primary: true,
      icon: "asset/image/icon/phone.svg",
      title: "Memesan",
      desc: "Hubungi nomor telepon atau Whatsapp BARON & CO untuk memesan layanan kami",
    },
    {
      icon: "asset/image/icon/car.svg",
      title: "Pickup",
      desc: "Tunggu aja di rumah kami akan mengambil sepatu kesayanganmu",
    },
    {
      icon: "asset/image/icon/service.svg",
      title: "Perawatan",
      desc: "Sepatumu kami bersihkan secepat kilat dan seperti beli baru lagi",
    },
    {
      icon: "asset/image/icon/car.svg",
      title: "Pengiriman",
      desc: "Tunggu sepatu kesayanganmu kami antarkan dengan kondisi seperti baru lagi",
    },
  ],
};

// data about
const dataSectionAbout = {
  img: "asset/image/about.jpg",
  headline: "Tentang BARON & CO",
  title: "TAKE THE ",
  desc: "Solusi untuk perawatan sepatu yang tepat dengan hasil maksimal",
  btn: {
    to: "/tentang-kami",
    text: "Selengkapnya",
  },
};

// data product
const dataSectionProduct = {
  title: `Produk`,
  btn: {
    to: "/produk",
    text: "Selengkapnya",
  },
  list: [
    {
      to: "/produk-detail",
      image: "asset/image/product-1.jpg",
      title: "Styloz Pegasus White",
      price: "Rp 52.500,-",
    },
    {
      to: "/produk-detail",
      image: "asset/image/product-2.jpg",
      title: "Styloz Apolo Silver",
      price: "Rp 52.500,-",
    },
    {
      to: "/produk-detail",
      image: "asset/image/product-3.jpg",
      title: "Styloz Brown",
      price: "Rp 52.500,-",
    },
    {
      to: "/produk-detail",
      image: "asset/image/product-4.jpg",
      title: "Styloz Red Jordan",
      price: "Rp 52.500,-",
    },
    {
      to: "/produk-detail",
      image: "asset/image/product-5.jpg",
      title: "Vorsca Vanila",
      price: "Rp 90.000,-",
    },
    {
      to: "/produk-detail",
      image: "asset/image/product-6.jpg",
      title: "Vorsca Blueberry",
      price: "Rp 90.000,-",
    },
    {
      to: "/produk-detail",
      image: "asset/image/product-7.jpg",
      title: "Vorsca Coffe",
      price: "Rp 90.000,-",
    },
    {
      to: "/produk-detail",
      image: "asset/image/product-8.jpg",
      title: "Vorsca Chocolate",
      price: "Rp 90.000,-",
    },
  ],
};

// data service
const dataSectionService = {
  title: `Layanan`,
  btn: {
    to: "/layanan",
    text: "Selengkapnya",
  },
  list: [
    {
      to: "/layanan-detail",
      image: "asset/image/service-1.jpg",
      title: "Fast Clean",
      desc: "Treatment Upper, Midsole, Outsole",
    },
    {
      to: "/layanan-detail",
      image: "asset/image/service-2.jpg",
      title: "Deep Clean",
      desc: "Treatment Upper, Midsole, Outsole, Insole",
    },
    {
      to: "/layanan-detail",
      image: "asset/image/service-3.jpg",
      title: "Unyellowing",
      desc: "Unyellowing Treatment + Fast Clean",
    },
    {
      to: "/layanan-detail",
      image: "asset/image/service-4.jpg",
      title: "Whitening",
      desc: "Whitening Treatment + Fast Clean",
    },
    {
      to: "/layanan-detail",
      image: "asset/image/service-5.jpg",
      title: "Helm Treatment",
      desc: "All Treatment",
    },
    {
      variant: true,
      to: "/layanan-detail",
      image: "asset/image/service-6.jpg",
      title: "Repaint",
      desc: "...",
    },
  ],
};

// data testimony
const dataSectionTestimony = {
  caption: `Testimoni Kami`,
  title: `Dari mereka yang menggunakan layanan Kami`,
  list: [
    {
      image: "asset/image/testimoni-1.jpg",
      title: "Angga",
      desc: "Sangat senang dengan hasil akhirnya. Sepatu saya kembali bersih.",
    },
    {
      image: "asset/image/testimoni-2.jpg",
      title: "Herdi",
      desc: "Jangan ragu mencoba layanan cuci sepatu ini, mereka benar luar biasa.",
    },
    {
      image: "asset/image/testimoni-3.jpg",
      title: "Shaila Sofi",
      desc: "Jangan ragu mencoba layanan cuci sepatu ini, mereka benar luar biasa.",
    },
    {
      image: "asset/image/testimoni-1.jpg",
      title: "Angga",
      desc: "Sangat senang dengan hasil akhirnya. Sepatu saya kembali bersih.",
    },
    {
      image: "asset/image/testimoni-2.jpg",
      title: "Herdi",
      desc: "Jangan ragu mencoba layanan cuci sepatu ini, mereka benar luar biasa.",
    },
    {
      image: "asset/image/testimoni-3.jpg",
      title: "Shaila Sofi",
      desc: "Jangan ragu mencoba layanan cuci sepatu ini, mereka benar luar biasa.",
    },
  ],
};

const Home = () => {
  return (
    <Default activeMenu="home">
      <div>
        <HeroBanner data={dataBanner} />
        <Overview data={dataOverview} />
        <ServiceProcess data={dataServiceProcess} />
        <SectionAbout data={dataSectionAbout} />
        <SectionService data={dataSectionService} />
        <SectionProduct data={dataSectionProduct} />
        <SectionTestimony data={dataSectionTestimony} />
      </div>
    </Default>
  );
};

export default Home;
