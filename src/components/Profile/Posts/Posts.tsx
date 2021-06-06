import Post from "../Post/Post";
import s from "./Posts.module.scss";

interface PostsData {
  id?: number;
  img: string;
  postText: string;
  likesCount: number;
}

// type PostsProps = {
//   message: string;
//   likesCount: number;
// };

const Posts = () => {
  let postsData: PostsData[] = [
    {
      id: 1,
      img: "https://www.pngarea.com/pngm/122/7623076_spacex-logo-png-spacex-ses-10-mission-patch.png",
      postText: "This is first post",
      likesCount: 12,
    },
    {
      id: 2,
      img: "https://www.pngarea.com/pngm/122/7623076_spacex-logo-png-spacex-ses-10-mission-patch.png",
      postText: "Hello, my bro",
      likesCount: 0,
    },
  ];

  let postsElem = postsData.map((p) => {
    return <Post message={p.postText} likesCount={p.likesCount} img={p.img} />
  })

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div className={s.addText}>
        <textarea placeholder="Your message" className={s.textarea}></textarea>
        <div>
          <button className="btn">Add post</button>
          {/* <button className="btn">Remove</button> */}
        </div>
      </div>
      <div className="posts-wrapper">
        <h3>Posts List</h3>
        {postsElem}
      </div>
    </div>
  );
};

export default Posts;
