// components
import PageNotFound from "presentation/component/organism/PageNotFound";

// Templates Default
import Default from "presentation/component/template/Default";

const NotFound = () => {
  return (
    <Default activeMenu="not-found">
      <>
        <PageNotFound />
      </>
    </Default>
  );
};

export default NotFound;
