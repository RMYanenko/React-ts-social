import s from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div className={s.profileInfoBanner}>
        <img
          src="https://miro.medium.com/max/2048/1*PHr-4PdpkwZ9VVqK7RJETw.jpeg"
          alt="banner"
        />
      </div>
      <div className={s.profileInfoDescription}>
        <img
          src="https://resources.spacexchimp.com/brand/spacexchimp-icon/spacexchimp-icon-color.svg"
          className={s.avatar}
          alt="avatar"
        />
        <div>
          <ul>
            <li>Monkey Astronaut</li>
            <li>1954</li>
            <li>Texas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
