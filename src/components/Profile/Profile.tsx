import Posts from "./Posts/Posts";
import "./Profile.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className="main">
      <div className="profile">
        <ProfileInfo />
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
