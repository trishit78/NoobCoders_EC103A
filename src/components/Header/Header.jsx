import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { NavLink } from "react-router-dom";

import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header mt-4">
      <NavLink to="/">
        <img src={Logo} alt="" className="logo" />
      </NavLink>

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
        {
           mobile === true &&(
<CloseIcon fontSize="large" className="ml-16" onClick={() => setMenuOpened(!menuOpened)} />

           )
        }
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="home"
              span={true}
              smoth={true}
            >
              <NavLink to="/">Home</NavLink>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="program"
              span={true}
              smoth={true}
            >
              <NavLink to="/program">Programs</NavLink>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              span={true}
              smoth={true}
            >
              <NavLink to="/whyus">Why Us</NavLink>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              span={true}
              smoth={true}
            >
              <NavLink to="/exercise">Exercises</NavLink>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              span={true}
              smoth={true}
            >
              <NavLink to="/plans">Plans</NavLink>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              span={true}
              smoth={true}
            >
              <NavLink to="/testimonials">Testimonials</NavLink>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
