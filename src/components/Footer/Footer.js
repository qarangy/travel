import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer__wrapper flex flex-col items-center justify-center pt-[140px] pb-[70px] mb-2">
        <div className="container">
          <div className="footer__content flex justify-between items-center msb-4">
            <div className="">
              <h2 className="font-bold text-white text-[40px] leading-[48px] uppercase mb-[10px]">
                Are You Looking To Travel ?
              </h2>
              <h3 className="font-semibold text-white text-[20px] leading-[24px]">
                Make A Reservation By Clicking The Button
              </h3>
            </div>
            <div className="">
              <Link className="main__link-footer">Book Yours Now</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom py-[25px] text-center text-white bg-[#22b3c1]">
        <p>Copyright © 2024 Zamon Business Tour. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
