const Header = () => {
  return (
    <>
      <header className="header">
        {/* <img alt="logo" /> */}
        <div>Logo</div>

        <div className="header__menu">
          <a>Profile</a>
          <a>Projects</a>
          <a>Aboute me</a>
        </div>

        <div className="header__auth">
          <button>sign in</button>
        </div>
      </header>
    </>
  );
};

export default Header;
