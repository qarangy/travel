import { Link, NavLink } from 'react-router-dom';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import img from '../../img/logo.svg';
import './Header.css';
const Header = () => {
  return (
    <div className="header bg-[#22B3C1] flex justify-center">
      <div className="header__wrapper container flex items-center w-[100%] max-w-[1320px] my-[12px] relative justify-between">
        <div className="header__logo-wrapper">
          <Link to="/">
            <img src={img} alt="Logo" />
          </Link>
        </div>

        <div className="navbar__wrapper flex relative">
          <div className="navbar mr-[338px]">
            <ul className="nav__links-list flex gap-[20px]">
              <li className="nav__links-item">
                <NavLink className="nav__link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav__links-item">
                <NavLink className="nav__link" to="/">
                  About
                </NavLink>
              </li>
              <li className="nav__links-item">
                <NavLink className="nav__link" to="/">
                  Tours
                </NavLink>
              </li>
              <li className="nav__links-item">
                <NavLink className="nav__link" to="/">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar__right-wrapper flex items-center gap-[20px] absolute top-[50%] bottom-[50%] right-[-80px]">
            <div className="lang__toggle-wrapper flex items-center gap-[20px]">
              <ul className="lang__toggle-list flex gap-[20px]">
                <li className="lang__toggle-item">
                  <Link className="lang__toggle-link" to="/">
                    UZ
                  </Link>
                </li>
                <li className="lang__toggle-item">
                  <Link className="lang__toggle-link" to="/">
                    ENG
                  </Link>
                </li>
                <li className="lang__toggle-item">
                  <Link className="lang__toggle-link" to="/">
                    RU
                  </Link>
                </li>
              </ul>
            </div>

            <div className="header__socials w-[10%]">
              <ul className="header__socials-list flex text-[20px] gap-[20px]">
                <li className="header__socials-item">
                  <Link className="header__socials-link">
                    <FaTelegramPlane />
                  </Link>
                </li>
                <li className="header__socials-item">
                  <Link className="header__socials-link">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
