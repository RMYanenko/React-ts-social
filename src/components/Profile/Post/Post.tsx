import s from "./Post.module.scss";

const Post = (props: any) => {
  return (
    <div className={s.postContainer}>
      <img
        src="https://www.pngarea.com/pngm/122/7623076_spacex-logo-png-spacex-ses-10-mission-patch.png"
        alt="img"
      />
      <div className="text-wrapper">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Post;
