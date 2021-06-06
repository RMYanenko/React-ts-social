import Posts from "./Posts/Posts";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="main">
      <div className="profile">
        <img
          className="profile-banner"
          src="https://miro.medium.com/max/2048/1*PHr-4PdpkwZ9VVqK7RJETw.jpeg"
          alt="banner"
        />
        <div className="profile-about">
          <img
            src="https://resources.spacexchimp.com/brand/spacexchimp-icon/spacexchimp-icon-color.svg"
            className="avatar"
            alt="avatar"
          />
          <div className="">
            <ul>
              <li>Monkey Astronaut</li>
              <li>1954</li>
              <li>Texas</li>
            </ul>
          </div>
        </div>
        <div className="profile-textarea">
          <textarea className="textarea"></textarea>
          <div>
            <button className="btn">Add post</button>
            <button className="btn">Remove</button>
          </div>
        </div>
        <h3>Profile</h3>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
