import s from "./Post.module.scss";

type PostsProps = {
  message: string,
  likesCount: number,
  id?: number,
  img?: string
}

const Post = ({message, likesCount, img, id} : PostsProps) => {
  return (
    <div className={s.postContainer}>
      <img
        src={img}
        alt="img"
      />
      <div className={s.textWrapper}>
        <p>{message}</p>
        <span className={s.likesCount}>{likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
