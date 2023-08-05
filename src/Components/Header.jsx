import Logo from "../Assets/Logo.jsx";
import '../Assets/css/header.css'

const Header = () => {
    const menuItems = ['Our Models', 'Buy Online', 'Finance', 'Services', 'Our Brand']
    const menuLi = menuItems.map((item, index) => <li key={index}>{item}</li>)

  return (
    <>
    <div id="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__menu">
        <ul>
            {menuLi}
        </ul>
      </div>
      <div className="header__burger">.Menu</div>
    </div>

    <div className="post-header">
        <span>Explore your dream Mercedes-Benz.</span>
    </div>
    </>
  );
};

export default Header;