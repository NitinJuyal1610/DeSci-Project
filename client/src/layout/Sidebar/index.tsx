import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HomeIcon } from "../../assets/icons";
import Logo from "../../assets/logos/Logo";

const sidebarLinks = [
  {
    to: "/",
    icon: HomeIcon,
  },
];

const Sidebar = () => {
  return (
    <aside className="sidenav">
      <div className="container">
        <Link to={"/"}>
          <Logo />
        </Link>
        <nav>
          {sidebarLinks.map(({ to, icon }) => (
            <NavLink key={to} to={to}>
              {icon()}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
