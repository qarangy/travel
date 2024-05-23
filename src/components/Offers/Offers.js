import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { FaUsers, FaTaxi, FaPlane, FaBuilding } from 'react-icons/fa';
import i1 from '../../img/offers-istanbul.jpeg';
import i2 from '../../img/offers-dubai.jpg';
import i3 from '../../img/offers-antalya.jpg';
import i4 from '../../img/offers-shrmelsheih.jpeg';
import i5 from '../../img/offers-oslo.jpg';
import './Offers.css';

const Offers1 = () => {
  return (
    <>
      <div
        id="tours"
        className="offers__wrapper flex justify-center items-center border-b"
      >
        <div className="offers__container">
          <div className="offers__top flex flex-col items-center justify-center text-center py-[80px]">
            <h2 className="offers__heading text-[30px] font-bold text-[#2a2a2a] pb-[20px]">
              Best Weekly Offers In Each City
            </h2>
            <p className="offers__text leading-[30px]">
              Discover the best weekly offers in each city, curated just for
              you. Immerse yourself in
              <br /> a world of savings and indulge in unparalleled experiences.
            </p>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            <div className="swiper__wrapper">
              <SwiperSlide className="pb-[180px]">
                <li className="offers__card-item relative">
                  <img src={i1} alt="" className="w-[280px] rounded-l-3xl" />
                  <div className="offers__card absolute top-[15%] left-[30%] bg-white p-[30px] rounded-[24px] shadow-md">
                    <div className="offers__card-top border-b pb-[28px]">
                      <div className="offers__card-heading-wrapper flex justify-between">
                        <h3 className="offers__card-heading text-[#2A2A2A] font-bold text-[20px]">
                          Istanbul
                        </h3>
                        <span className="text-[20px] text-[#22B3C1] font-bold">
                          $420
                        </span>
                      </div>
                      <div className="offers__card-text-wrapper flex justify-between">
                        <p className="offers__card-text mr-[26px] flex items-center justify-center">
                          <FaUsers className="text-[20px] mr-[1px]" />
                          234 Check Ins
                        </p>
                        <span>/person</span>
                      </div>
                    </div>

                    <div className="offers__card-center flex flex-col mt-[28px] mb-[32px] gap-[10px]">
                      <h3 className="offers__card-heading font-semibold text-[#2a2a2a]">
                        Deal Includes:
                      </h3>
                      <p className="offers__card-text flex items-center">
                        <FaTaxi className="mr-[3px]" />
                        {`5 Days Trip > Hotel Included`}
                      </p>
                      <p className="offers__card-text flex items-center">
                        <FaPlane className="mr-[3px]" />
                        Airplane Bill Included
                      </p>
                      <p className="offers__card-text flex items-center">
                        <FaBuilding className="mr-[3px]" />
                        Daily Places Visit
                      </p>
                    </div>

                    <div className="offers__card-link">
                      <Link to="/" className="main__link">
                        Make a Reservation
                      </Link>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="offers__card-item relative">
                  <img src={i2} alt="" className="w-[280px] rounded-l-3xl" />
                  <div className="offers__card absolute top-[15%] left-[30%] bg-white p-[30px] rounded-[24px] shadow-md">
                    <div className="offers__card-top border-b pb-[28px]">
                      <div className="offers__card-heading-wrapper flex justify-between">
                        <h3 className="offers__card-heading text-[#2A2A2A] font-bold text-[20px]">
                          Dubai
                        </h3>
                        <span className="text-[20px] text-[#22B3C1] font-bold">
                          $700
                        </span>
                      </div>
                      <div className="offers__card-text-wrapper flex justify-between">
                        <p className="offers__card-text mr-[26px] flex items-center justify-center">
                          <FaUsers className="text-[20px] mr-[1px]" />
                          300 Check Ins
                        </p>
                        <span>/person</span>
                      </div>
                    </div>

                    <div className="offers__card-center flex flex-col mt-[28px] mb-[32px] gap-[10px]">
                      <h3 className="offers__card-heading font-semibold text-[#2a2a2a]">
                        Deal Includes:
                      </h3>
                      <p className="offers__card-text flex items-center">
                        <FaTaxi className="mr-[3px]" />
                        {`5 Days Trip > Hotel Included`}
                      </p>
                      <p className="offers__card-text flex items-center">
                        <FaPlane className="mr-[3px]" />
                        Airplane Bill Included
                      </p>
                      <p className="offers__card-text flex items-center">
                        <FaBuilding className="mr-[3px]" />
                        Daily Places Visit
                      </p>
                    </div>

                    <div className="offers__card-link">
                      <Link to="/" className="main__link">
                        Make a Reservation
                      </Link>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="offers__card-item relative">
                  <img src={i3} alt="" className="w-[280px] rounded-l-3xl" />
                  <div className="offers__card absolute top-[15%] left-[30%] bg-white p-[30px] rounded-[24px] shadow-md">
                    <div className="offers__card-top border-b pb-[28px]">
                      <div className="offers__card-heading-wrapper flex justify-between">
                        <h3 className="offers__card-heading text-[#2A2A2A] font-bold text-[20px]">
                          Antalya
                        </h3>
                        <span className="text-[20px] text-[#22B3C1] font-bold">
                          $600
                        </span>
                      </div>
                      <div className="offers__card-text-wrapper flex justify-between">
                        <p className="offers__card-text mr-[26px] flex items-center justify-center">
                          <FaUsers className="text-[20px] mr-[1px]" />
                          500 Check Ins
                        </p>
                        <span>/person</span>
                      </div>
                    </div>

                    <div className="offers__card-center flex flex-col mt-[28px] mb-[32px] gap-[10px]">
                      <h3 className="offers__card-heading font-semibold text-[#2a2a2a]">
                        Deal Includes:
                      </h3>
                      <p className="offers__card-text flex items-center">
                        <FaTaxi className="mr-[3px]" />
                        {`5 Days Trip > Hotel Included`}
                      </p>
                      <p className="offers__card-text flex items-center">
                        <FaPlane className="mr-[3px]" />
                        Airplane Bill Included
                      </p>
                      <p className="offers__card-text flex items-center">
                        <FaBuilding className="mr-[3px]" />
                        Daily Places Visit
                      </p>
                    </div>

                    <div className="offers__card-link">
                      <Link to="/" className="main__link">
                        Make a Reservation
                      </Link>
                    </div>
                  </div>
                </li>
              </SwiperSlide>

              <SwiperSlide>
                <li className="offers__card-item relative">
                  <img src={i4} alt="" className="w-[280px] rounded-l-3xl" />
                  <div className="offers__card absolute top-[15%] left-[30%] bg-white p-[30px] rounded-[24px] shadow-md">
                    <div className="offers__card-top border-b pb-[28px]">
                      <div className="offers__card-heading-wrapper flex justify-between">
                        <h3 className="offers__card-heading text-[#2A2A2A] font-bold text-[20px]">
                          Egypt
                        </h3>
                        <span className="text-[20px] text-[#22B3C1] font-bold">
                          $800
                        </span>
                      </div>
                      <div className="offers__card-text-wrapper flex justify-between">
                        <p className="offers__card-text mr-[26px] flex items-center justify-center">
                          <FaUsers className="text-[20px] mr-[1px]" />
                          200 Check Ins
                        </p>
                        <span>/person</span>
                      </div>
                    </div>

                    <div className="offers__card-center flex flex-col mt-[28px] mb-[32px] gap-[10px]">
                      <h3 className="offers__card-heading font-semibold text-[#2a2a2a]">
                        Deal Includes:
                      </h3>
                      <p className="offers__card-text flex items-center">
                        <FaTaxi className="mr-[3px]" />
                        {`5 Days Trip > Hotel Included`}
                      </p>
                      <p className="offers__card-text flex items-center">
                        <FaPlane className="mr-[3px]" />
                        Airplane Bill Included
                      </p>
                      <p className="offers__card-text flex items-center">
                        <FaBuilding className="mr-[3px]" />
                        Daily Places Visit
                      </p>
                    </div>

                    <div className="offers__card-link">
                      <Link to="/" className="main__link">
                        Make a Reservation
                      </Link>
                    </div>
                  </div>
                </li>
              </SwiperSlide>

              <SwiperSlide>
                <li className="offers__card-item relative">
                  <img
                    src={i5}
                    alt=""
                    className="max-w-[300px] rounded-l-3xl"
                  />
                  <div className="offers__card absolute top-[15%] left-[30%] bg-white p-[30px] rounded-[24px] shadow-md">
                    <div className="offers__card-top border-b pb-[28px]">
                      <div className="offers__card-heading-wrapper flex justify-between">
                        <h3 className="offers__card-heading text-[#2A2A2A] font-bold text-[20px]">
                          Oslo
                        </h3>
                        <span className="text-[20px] text-[#22B3C1] font-bold">
                          $920
                        </span>
                      </div>
                      <div className="offers__card-text-wrapper flex justify-between">
                        <p className="offers__card-text mr-[26px] flex items-center justify-center">
                          <FaUsers className="text-[20px] mr-[1px]" />
                          134 Check Ins
                        </p>
                        <span>/person</span>
                      </div>
                    </div>

                    <div className="offers__card-center flex flex-col mt-[28px] mb-[32px] gap-[10px]">
                      <h3 className="offers__card-heading font-semibold text-[#2a2a2a]">
                        Deal Includes:
                      </h3>
                      <p className="offers__card-text flex items-center">
                        <FaTaxi className="mr-[3px]" />
                        {`5 Days Trip > Hotel Included`}
                      </p>
                      <p className="offers__card-text flex items-center">
                        <FaPlane className="mr-[3px]" />
                        Airplane Bill Included
                      </p>
                      <p className="offers__card-text flex items-center">
                        <FaBuilding className="mr-[3px]" />
                        Daily Places Visit
                      </p>
                    </div>

                    <div className="offers__card-link">
                      <Link to="/" className="main__link">
                        Make a Reservation
                      </Link>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Offers1;
