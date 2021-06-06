import Post from "../Post/Post";
import s from "./Posts.module.scss";

const Posts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div className={s.addText}>
        <textarea className={s.textarea}></textarea>
        <div>
          <button className="btn">Add post</button>
          {/* <button className="btn">Remove</button> */}
        </div>
      </div>
      <div className="posts-wrapper">
        <h3>Posts List</h3>
        <Post message="This is first post" />
        <Post message="Hello, my bro" />
      </div>
    </div>
  );
};

export default Posts;
