import { HashLink as Link } from 'react-router-hash-link';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import img from '../../img/logo.svg';
import './Header.css';

const Header = () => {
  const { t, i18next } = useTranslation();

  const handleChange = (event) => {
    const selectedLanguage = event;
    i18next.changeLanguage(selectedLanguage);
  };

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
                <Link smooth className="nav__link" to="/">
                  {t('Home')}
                </Link>
              </li>
              <li className="nav__links-item">
                <Link smooth className="nav__link" to="#deals">
                  {t('About')}
                </Link>
              </li>
              <li className="nav__links-item">
                <Link smooth className="nav__link" to="#tours">
                  {t('Tours')}
                </Link>
              </li>
              <li className="nav__links-item">
                <Link smooth className="nav__link" to="#contacts">
                  {t('Contacts')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar__right-wrapper flex items-center gap-[20px] absolute top-[50%] bottom-[50%] right-[-80px]">
            <div className="lang__toggle-wrapper flex items-center gap-[20px]">
              <ul className="lang__toggle-list nav__links-list flex">
                <li className="nav__links-item">
                  <button
                    type="submit"
                    className="nav__link"
                    onClick={() => handleChange('uz')}
                  >
                    UZ
                  </button>
                </li>
                <li className="nav__links-item">
                  <button
                    type="submit"
                    className="nav__link"
                    onClick={() => handleChange('en')}
                  >
                    ENG
                  </button>
                </li>
                <li className="nav__links-item">
                  <button
                    type="submit"
                    className="nav__link"
                    onClick={() => handleChange('ru')}
                  >
                    RU
                  </button>
                </li>
              </ul>
            </div>

            <div className="header__socials w-[10%]">
              <ul className="header__socials-list flex text-[20px] gap-[20px]">
                <li className="header__socials-item">
                  <Link
                    to="https://t.me/zamonbiznestour"
                    className="header__socials-link"
                  >
                    <FaTelegramPlane />
                  </Link>
                </li>
                <li className="header__socials-item">
                  <Link
                    to="https://www.instagram.com/zamontour"
                    className="header__socials-link"
                  >
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
