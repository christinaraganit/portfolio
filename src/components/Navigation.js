import "../style/Navigation.css";
import StarLinkImg from "../img/star.svg";
import { useState } from "react";
import Home from "../pages/Home";
import { Link } from "react-router-dom";

function Navigation() {
  const [click, setClick] = useState(false);

  const clickMenu = () => {
    setClick(true);
  };

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div class="NavigationMenuContainer">
      {click && (
        <div id="MobileSideNav" class="MobileSideNav">
          <svg
            onClick={closeMenu}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#DFDCF4"
              d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"
            />
          </svg>
          <div className="Links">
            <Link to="/" onClick={closeMenu}>
              <span>Home</span>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <span>About</span>
            </Link>
            <Link to="/experience" onClick={closeMenu}>
              <span>Experience</span>
            </Link>
            <Link to="/projects" onClick={closeMenu}>
              <span>Projects</span>
            </Link>
            <a href="https://drive.google.com/file/d/1u-gDM-HkO_jH4ls1bodWWji_FmmGQtJk/view?usp=sharing">
              Resume
            </a>
          </div>
        </div>
      )}

      {!click && (
        <div>
          <svg
            onClick={clickMenu}
            className="MenuIcon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="48"
            height="48"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 20 20"
          >
            <g fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                fill="#dfdcf4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                fill="#dfdcf4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 15a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                fill="#dfdcf4"
              />
            </g>
          </svg>
          <div id="NavigationMenu" className="NavigationMenu">
            <Link to="/">
              <span className="NavigationLink">Home</span>
            </Link>
            <Link to="/about">
              <span className="NavigationLink">About</span>
            </Link>
            <Link to="/experience">
              <span className="NavigationLink">Experience</span>
            </Link>
            <Link to="/projects">
              <span className="NavigationLink">Projects</span>
            </Link>
            <div className="PrimaryNavigationLink">
              <a
                className="NavigationLink"
                href="https://drive.google.com/file/d/1u-gDM-HkO_jH4ls1bodWWji_FmmGQtJk/view"
              >
                Resume
              </a>
              <img src={StarLinkImg} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
