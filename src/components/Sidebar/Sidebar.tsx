import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <NavLink to="/profile" className="">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" className="">
              Message
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className="">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/music" className="">
              Music
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
