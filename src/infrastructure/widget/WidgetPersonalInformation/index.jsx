// components
import SectionPersonalInfo from "presentation/component/organism/SectionPersonalInfo";

// model
import { useUser } from 'core/model/users';

const WidgetPersonalInformation = () => {
  
  const { data: dataUser, error: errorUser } = useUser();

  return <SectionPersonalInfo title="Personal Information" data={dataUser} error={errorUser?.message} />;
};

export default WidgetPersonalInformation;