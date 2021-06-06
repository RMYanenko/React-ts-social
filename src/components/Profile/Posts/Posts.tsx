import Post from "../Post/Post";

const Posts = () => {
  return (
    <div className="posts-wrapper">
      <Post message="This is first post" />
      <Post message="Hello, my bro" />
    </div>
  );
};

export default Posts;
