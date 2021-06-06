import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/SpaceX_Crew-2_logo.png/579px-SpaceX_Crew-2_logo.png" alt="logo" className="header-logo" />
      <div className="header-text">SpaceX</div>
    </header>
  );
};

export default Header;
