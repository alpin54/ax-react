// hooks
// import useFetch from 'core/hooks/useFetch';

// widget
import WidgetPersonalInformation from "infrastructure/widget/WidgetPersonalInformation";
import WidgetPost from "infrastructure/widget/WidgetPost";
import SectionCarousel from "presentation/component/organism/SectionCarousel";

// template
import Default from "presentation/component/template/Default";

const Practice = () => {

  // const { data: dataTodo } = useFetch(
  //   "https://jsonplaceholder.typicode.com/todos"
  // );

  return (
    <Default activeMenu="practice">
      <SectionCarousel />
      <WidgetPersonalInformation />
      <WidgetPost />
      {/* {data.length ? (
        <>
          <h3>data Todo</h3>
          <ul>
            {dataTodo.map((val, idx) => (
              <li key={val.id}>{val.title}</li>
            ))}
          </ul>
        </>
      ) : (
        "Loading Users"
      )} */}
    </Default>
  );
};

export default Practice;
