import style from "./Header.module.css";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div>Logo</div>

        <div className={style.header__menu}>
          <div className={style.header__link}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              Profile
            </NavLink>
          </div>
          <div className={style.header__link}>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              Projects
            </NavLink>
          </div>
          <div className={style.header__link}>
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              Chat
            </NavLink>
          </div>
        </div>

        <div className={style.header__auth}>
          <button>sign in</button>
        </div>
      </header>
    </>
  );
};

export default Header;
