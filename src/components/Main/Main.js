import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import { HashLink as Link } from 'react-router-hash-link';
import { FaUser, FaGlobe } from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';
import './Main.css';

const Main = () => {
  return (
    <div className="main__wrapper">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="main__slider-1">
          <div className="main__wrapper-inner flex flex-col items-center justify-center min-h-[92vh]">
            <div className="container">
              <div className="main__top flex flex-col items-center justify-center mb-[120px]">
                <h2 className="main__text text-[20px] font-medium mb-[20px] mt-[60px]">
                  Take a Glimpse Into The Beautiful City Of:
                </h2>
                <h1 className="main__heading font-bold text-[50px] mb-[30px]">
                  Antalya
                </h1>
                <Link to="/#contacts" className="main__link">
                  Go There
                </Link>
              </div>

              <div className="main__bottom flex flex-wrap justify-between items-center bg-white py-[30px] px-[60px] rounded-[60px]">
                <div className="main__cards">
                  <ul className="main__cards-list flex items-center">
                    <li className="main__card flex items-center">
                      <div className="card__img flex items-center justify-center text-[24px] text-[#22b3c1] w-[60px] h-[60px] border border-[#22b3c1] rounded-[50%] mr-[20px]">
                        <FaUser />
                      </div>
                      <div className="card__info">
                        <p className="card__info-description">Population:</p>
                        <p className="card__info-text">8.66 M</p>
                      </div>
                    </li>

                    <li className="main__card flex items-center">
                      <div className="card__img flex items-center justify-center text-[24px] text-[#22b3c1] w-[60px] h-[60px] border border-[#22b3c1] rounded-[50%] mr-[20px]">
                        <FaGlobe />
                      </div>
                      <div className="card__info">
                        <p className="card__info-description">Territory:</p>
                        <p className="card__info-text">41.290 KM2</p>
                      </div>
                    </li>
                    <li className="main__card flex items-center">
                      <div className="card__img flex items-center justify-center text-[24px] text-[#22b3c1] w-[60px] h-[60px] border border-[#22b3c1] rounded-[50%] mr-[20px]">
                        <TiHome />
                      </div>
                      <div className="card__info">
                        <p className="card__info-description">AVG Price:</p>
                        <p className="card__info-text">$1.100.200</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="main__card-link">
                  <Link to="/#contacts" className="main__link">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="main__slider-2">
          <div className="main__wrapper flex flex-col items-center justify-center min-h-[92vh]">
            <div className="container">
              <div className="main__top flex flex-col items-center justify-center mb-[120px]">
                <h2 className="main__text text-[20px] font-medium mb-[20px] mt-[60px]">
                  Take a Glimpse Into The Beautiful City Of:
                </h2>
                <h1 className="main__heading font-bold text-[50px] mb-[30px]">
                  Dubai
                </h1>
                <Link to="/#contacts" className="main__link">
                  Go There
                </Link>
              </div>

              <div className="main__bottom flex justify-between items-center bg-white py-[30px] px-[60px] rounded-[60px]">
                <div className="main__cards">
                  <ul className="main__cards-list flex items-center">
                    <li className="main__card flex items-center">
                      <div className="card__img flex items-center justify-center text-[24px] text-[#22b3c1] w-[60px] h-[60px] border border-[#22b3c1] rounded-[50%] mr-[20px]">
                        <FaUser />
                      </div>
                      <div className="card__info">
                        <p className="card__info-description">Population:</p>
                        <p className="card__info-text">67.41 M</p>
                      </div>
                    </li>

                    <li className="main__card flex items-center">
                      <div className="card__img flex items-center justify-center text-[24px] text-[#22b3c1] w-[60px] h-[60px] border border-[#22b3c1] rounded-[50%] mr-[20px]">
                        <FaGlobe />
                      </div>
                      <div className="card__info">
                        <p className="card__info-description">Territory:</p>
                        <p className="card__info-text">551.500 KM2</p>
                      </div>
                    </li>
                    <li className="main__card flex items-center">
                      <div className="card__img flex items-center justify-center text-[24px] text-[#22b3c1] w-[60px] h-[60px] border border-[#22b3c1] rounded-[50%] mr-[20px]">
                        <TiHome />
                      </div>
                      <div className="card__info">
                        <p className="card__info-description">AVG Price:</p>
                        <p className="card__info-text">$425.600</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="main__card-link">
                  <Link to="/#contacts" className="main__link">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="main__slider-3">
          <div className="main__wrapper-slider flex flex-col items-center justify-center min-h-[92vh]">
            <div className="container">
              <div className="main__top flex flex-col items-center justify-center mb-[120px]">
                <h2 className="main__text text-[20px] font-medium mb-[20px] mt-[60px]">
                  Take a Glimpse Into The Beautiful City Of:
                </h2>
                <h1 className="main__heading font-bold text-[50px] mb-[30px]">
                  Sharm El-Sheikh
                </h1>
                <Link to="/#contacts" className="main__link">
                  Go There
                </Link>
              </div>

              <div className="main__bottom flex justify-between items-center bg-white py-[30px] px-[60px] rounded-[60px]">
                <div className="main__cards">
                  <ul className="main__cards-list flex items-center">
                    <li className="main__card flex items-center">
                      <div className="card__img flex items-center justify-center text-[24px] text-[#22b3c1] w-[60px] h-[60px] border border-[#22b3c1] rounded-[50%] mr-[20px]">
                        <FaUser />
                      </div>
                      <div className="card__info">
                        <p className="card__info-description">Population:</p>
                        <p className="card__info-text">69.86 M</p>
                      </div>
                    </li>

                    <li className="main__card flex items-center">
                      <div className="card__img flex items-center justify-center text-[24px] text-[#22b3c1] w-[60px] h-[60px] border border-[#22b3c1] rounded-[50%] mr-[20px]">
                        <FaGlobe />
                      </div>
                      <div className="card__info">
                        <p className="card__info-description">Territory:</p>
                        <p className="card__info-text">513.120 KM2</p>
                      </div>
                    </li>
                    <li className="main__card flex items-center">
                      <div className="card__img flex items-center justify-center text-[24px] text-[#22b3c1] w-[60px] h-[60px] border border-[#22b3c1] rounded-[50%] mr-[20px]">
                        <TiHome />
                      </div>
                      <div className="card__info">
                        <p className="card__info-description">AVG Price:</p>
                        <p className="card__info-text">$165.450</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="main__card-link">
                  <Link to="/#contacts" className="main__link">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Main;
