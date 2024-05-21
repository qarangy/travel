import { FaExpand } from 'react-icons/fa';

import i1 from '../../img/location-bg-1.jpg';
import i2 from '../../img/location-bg-2.jpg';
import i3 from '../../img/location-bg-3.jpg';
import i4 from '../../img/location-bg-4.jpg';
import i5 from '../../img/location-bg-5.jpg';

const Location = () => {
  return (
    <div className="location__wrapper flex justify-center items-center border-b pb-[40px]">
      <div className="container">
        <div className="location__top flex flex-col items-center justify-center text-center mb-[80px]">
          <h2 className="location__heading text-[30px] font-bold text-[#2a2a2a] pb-[20px]">
            Best Locations
          </h2>
          <p className="location__text leading-[30px]">
            Discover the best offers in each city, curated just for you. Immerse
            yourself in a world <br /> of savings and indulge in unparalleled
            experiences.
          </p>
        </div>

        <div className="location__bottom">
          <ul className="flex items-center justify-center gap-[20px]">
            <li className="location__img relative">
              <img className="rounded-[40px]" src={i1} alt="" />
              <div className="location__bottom-info absolute bottom-[5%] left-[4%] flex items-center justify-center">
                <div className="text-[24px] text-[#22B3C1] bg-white p-[12px] rounded-[50%] mr-[10px]">
                  <FaExpand />
                </div>
                <div>
                  <h3 className="location__bottom-heading font-bold text-white text-[20px]">
                    Dubai
                  </h3>
                  <span className="font-medium text-white text-[14px]">
                    Population: 2M
                  </span>
                </div>
              </div>
            </li>
            <li className="location__img relative">
              <img className="rounded-[30px]" src={i2} alt="" />
              <div className="absolute bottom-[2%] left-[10%] text-[24px] text-[#22B3C1] bg-white p-[12px] rounded-[50%] mr-[10px]">
                <FaExpand />
              </div>
            </li>
            <li className="location__img relative">
              <img className="rounded-[30px]" src={i3} alt="" />
              <div className="absolute bottom-[2%] left-[10%] text-[24px] text-[#22B3C1] bg-white p-[12px] rounded-[50%] mr-[10px]">
                <FaExpand />
              </div>
            </li>
            <li className="location__img relative">
              <img className="rounded-[30px]" src={i4} alt="" />
              <div className="absolute bottom-[2%] left-[10%] text-[24px] text-[#22B3C1] bg-white p-[12px] rounded-[50%] mr-[10px]">
                <FaExpand />
              </div>
            </li>
            <li className="location__img relative">
              <img className="rounded-[30px]" src={i5} alt="" />
              <div className="absolute bottom-[2%] left-[10%] text-[24px] text-[#22B3C1] bg-white p-[12px] rounded-[50%] mr-[10px]">
                <FaExpand />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;
