// components
import SectionPost from "presentation/component/organism/SectionPost";

// model
import { usePosts } from 'core/model/posts';

const WidgetPost = () => {
  
  const { data: dataPosts, error: errorPosts } = usePosts();

  return <SectionPost title="Post Information" data={dataPosts} error={errorPosts?.message} />;
};

export default WidgetPost;