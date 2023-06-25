import style from "./style.module.scss";

const PostCard = (props) => {
  const { title, body } = props;

  return (
    <div className={style.card}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.body}>{body}</p>
    </div>
  );
};

export default PostCard;