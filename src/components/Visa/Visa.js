import { Link } from 'react-router-dom';
import { ImPriceTags } from 'react-icons/im';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { FaUsers, FaCheck } from 'react-icons/fa';

import i1 from '../../img/support-china.jpg.png';
import i2 from '../../img/support-hongkong.jpg.png';
import i3 from '../../img/support-europe.jpeg.png';

const Visa = () => {
  return (
    <div className="visa__wrapper flex justify-center items-center">
      <div className="container">
        <div className="visa__top flex flex-col items-center justify-center text-center py-[80px]">
          <h2 className="visa__heading text-[30px] font-bold text-[#2a2a2a] pb-[20px]">
            Visa support
          </h2>
          <p className="visa__text leading-[30px]">
            Experience stress-free travel with our expert visa support. We
            provide seamless <br /> assistance and comprehensive guidance,
            ensuring a smooth journey.
          </p>
        </div>

        <div className="visa__bottom mb-[180px]">
          <ul className="visa__card-list flex">
            <li className="visa__card-item relative">
              <img src={i1} alt="" />
              <div className="visa__card absolute top-[15%] left-[30%] bg-white p-[30px] rounded-[24px] shadow-xl">
                <div className="visa__card-top border-b pb-[28px]">
                  <div className="visa__card-heading-wrapper flex justify-between">
                    <h3 className="visa__card-heading text-[#2A2A2A] font-bold text-[20px]">
                      Istanbul
                    </h3>
                  </div>
                  <div className="visa__card-text-wrapper flex justify-between">
                    <p className="visa__card-text mr-[26px] flex items-center justify-center">
                      <FaUsers className="text-[20px] mr-[1px]" />
                      234 Check Ins
                    </p>
                  </div>
                </div>

                <div className="visa__card-center flex flex-col mt-[28px] mb-[32px] gap-[10px]">
                  <h3 className="visa__card-heading font-semibold text-[#2a2a2a]">
                    Benefits of our Visa Support service:
                  </h3>
                  <p className="visa__card-text flex items-center">
                    <ImPriceTags className="mr-[3px]" />
                    Best Prices
                  </p>
                  <p className="visa__card-text flex items-center">
                    <MdOutlineAccessTimeFilled className="mr-[3px]" />
                    Short Processing Time
                  </p>
                  <p className="visa__card-text flex items-center">
                    <FaCheck className="mr-[3px]" />
                    Trustworthy Assistance
                  </p>
                </div>

                <div className="visa__card-link">
                  <Link to="/" className="main__link">
                    Make a Reservation
                  </Link>
                </div>
              </div>
            </li>

            <li className="visa__card-item relative">
              <img src={i2} alt="" />
              <div className="visa__card absolute top-[15%] left-[30%] bg-white p-[30px] rounded-[24px] shadow-xl">
                <div className="visa__card-top border-b pb-[28px]">
                  <div className="visa__card-heading-wrapper flex justify-between">
                    <h3 className="visa__card-heading text-[#2A2A2A] font-bold text-[20px]">
                      Dubai
                    </h3>
                  </div>
                  <div className="visa__card-text-wrapper flex justify-between">
                    <p className="visa__card-text mr-[26px] flex items-center justify-center">
                      <FaUsers className="text-[20px] mr-[1px]" />
                      300 Check Ins
                    </p>
                  </div>
                </div>

                <div className="visa__card-center flex flex-col mt-[28px] mb-[32px] gap-[10px]">
                  <h3 className="visa__card-heading font-semibold text-[#2a2a2a]">
                    Benefits of our Visa Support service:
                  </h3>
                  <p className="visa__card-text flex items-center">
                    <ImPriceTags className="mr-[3px]" />
                    Best Prices
                  </p>
                  <p className="visa__card-text flex items-center">
                    <MdOutlineAccessTimeFilled className="mr-[3px]" />
                    Short Processing Time
                  </p>
                  <p className="visa__card-text flex items-center">
                    <FaCheck className="mr-[3px]" />
                    Trustworthy Assistance
                  </p>
                </div>

                <div className="visa__card-link">
                  <Link to="/" className="main__link">
                    Make a Reservation
                  </Link>
                </div>
              </div>
            </li>

            <li className="visa__card-item relative">
              <img src={i3} alt="" />
              <div className="visa__card absolute top-[15%] left-[30%] bg-white p-[30px] rounded-[24px] shadow-xl">
                <div className="visa__card-top border-b pb-[28px]">
                  <div className="visa__card-heading-wrapper flex justify-between">
                    <h3 className="visa__card-heading text-[#2A2A2A] font-bold text-[20px]">
                      Antalya
                    </h3>
                  </div>
                  <div className="visa__card-text-wrapper flex justify-between">
                    <p className="visa__card-text mr-[26px] flex items-center justify-center">
                      <FaUsers className="text-[20px] mr-[1px]" />
                      500 Check Ins
                    </p>
                  </div>
                </div>

                <div className="visa__card-center flex flex-col mt-[28px] mb-[32px] gap-[10px]">
                  <h3 className="visa__card-heading font-semibold text-[#2a2a2a]">
                    Benefits of our Visa Support service:
                  </h3>
                  <p className="visa__card-text flex items-center">
                    <ImPriceTags className="mr-[3px]" />
                    Best Prices
                  </p>
                  <p className="visa__card-text flex items-center">
                    <MdOutlineAccessTimeFilled className="mr-[3px]" />
                    Short Processing Time
                  </p>
                  <p className="visa__card-text flex items-center">
                    <FaCheck className="mr-[3px]" />
                    Trustworthy Assistance
                  </p>
                </div>

                <div className="visa__card-link">
                  <Link to="/" className="main__link">
                    Make a Reservation
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Visa;
