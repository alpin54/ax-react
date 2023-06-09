import Home from "presentation/container/page/Home";
import TentangKami from "presentation/container/page/TentangKami";
import Layanan from "presentation/container/page/Layanan";
import Produk from "presentation/container/page/Produk";
import Galeri from "presentation/container/page/Galeri";
import KontakKami from "presentation/container/page/KontakKami";
import Sitemap from "presentation/container/page/Sitemap";
import NotFound from "presentation/container/page/NotFound";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/tentang-kami",
    element: <TentangKami />,
    errorElement: <NotFound />,
  },
  {
    path: "/layanan",
    element: <Layanan />,
    errorElement: <NotFound />,
  },
  {
    path: "/produk",
    element: <Produk />,
    errorElement: <NotFound />,
  },
  {
    path: "/galeri",
    element: <Galeri />,
    errorElement: <NotFound />,
  },
  {
    path: "/kontak-kami",
    element: <KontakKami />,
    errorElement: <NotFound />,
  },
  {
    path: "/sitemap",
    element: <Sitemap />,
    errorElement: <NotFound />,
  },
];

export default routeConfig;
