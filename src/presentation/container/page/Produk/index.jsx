// Components
import HeroBanner from "presentation/component/organism/HeroBanner";
import Product from "presentation/component/organism/Product";


// Templates Default
import Default from "presentation/component/template/Default";

// Dummy Data
import bannerData from "./bannerData";
import productData from "./productData";

// Dummy Data
const Produk = () => {
  return (
    <Default activeMenu="produk">
      <HeroBanner data={bannerData} />
      <Product data={productData} />
    </Default>
  );
};

export default Produk;
