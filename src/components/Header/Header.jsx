import style from './Header.module.css'

const Header = () => {
  return (
    <>
      <header className={style.header}>
        {/* <img alt="logo" /> */}
        <div>Logo</div>

        <div className={style.header__menu}>
          <a className={`${style.links} ${style.active}`}>Profile</a>
          <a className={`${style.links}`}>Projects</a>
          <a className={`${style.links}`}>Aboute me</a>
        </div>

        <div className={style.header__auth}>
          <button>sign in</button>
        </div>
      </header>
    </>
  );
};

export default Header;
