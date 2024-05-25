import { HashLink as Link } from 'react-router-hash-link';
import './Booking.css';

const Booking = () => {
  return (
    <div className="booking__wrapper flex flex-col justify-center items-center text-center mb-[60px]">
      <div className="container">
        <div className="booking__content mt-[260px] mb-[100px]">
          <h3 className="pb-[23px] mb-[15px] text-[20px] leading-[24px] font-medium text-white">
            Book Prefered Deal Here
          </h3>
          <h2 className="mb-[30px] text-[50px] leading-[60px] font-bold text-white">
            Make Your Reservation
          </h2>
          <Link to="/#contacts" className="main__link">
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Booking;
