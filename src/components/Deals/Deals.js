import { Link } from 'react-router-dom';
import i1 from '../../img/deals-railway.png';
import i2 from '../../img/deals-airplane.png';
import './Deals.css';

const Deals = () => {
  return (
    <div className="deals__wrpper flex flex-wrap items-center justify-center">
      <div className="container">
        <div className="deals__top flex flex-col items-start justify-start text-start py-[80px]">
          <h2 className="deals__heading text-[30px] font-bold text-[#2a2a2a] pb-[20px]">
            Explore Destinations with Ease
          </h2>
          <p className="deals__text leading-[30px]">
            Find the best deals on railway and airplane tickets in each city,
            <br />
            carefully selected for you.
          </p>
        </div>

        <div className="deals__cards">
          <ul className="deals__cards-list flex flex-col items-center justify-center mb-[70px] gap-[30px]">
            <li className="deals__cards-item flex w-[100%] max-w-[1100px] border-b pb-[30px]">
              <div className="deals__card-img w-[34%] pr-[12px]">
                <img src={i1} alt="" className="rounded-[26px]" />
              </div>
              <div className="deals__card-info w-[66%]">
                <div className="deals__card-info-header flex justify-between mb-[19px]">
                  <div className="deals__card-header flex-col flex-wrap">
                    <h3 className="deals__card-heading text-[20px] font-bold text-[#2a2a2a]">
                      Cheap Railway Tickets With Us
                    </h3>
                    <span className="">Whole world</span>
                  </div>
                  <div className="deals__card-link-wrapper">
                    <Link className="main__link deals__card-link" to="/">
                      Explore More
                    </Link>
                  </div>
                </div>

                <div className="deals__card-text-wrapper">
                  <p className="deals__card-text leading-[30px]">
                    Embark on a railway adventure and explore destinations
                    worldwide. Whether it's the picturesque landscapes, bustling
                    cities, or cultural gems, our rail services offer a unique
                    and comfortable way to traverse the globe. Immerse yourself
                    in the beauty of different cultures, all accessible through
                    our extensive railway network.
                  </p>
                </div>
              </div>
            </li>

            <li className="deals__cards-item flex w-[100%] max-w-[1100px] border-b pb-[30px]">
              <div className="deals__card-img w-[34%] pr-[12px]">
                <img src={i1} alt="" className="rounded-[26px]" />
              </div>
              <div className="deals__card-info w-[66%]">
                <div className="deals__card-info-header flex justify-between mb-[19px]">
                  <div className="deals__card-header flex-col flex-wrap">
                    <h3 className="deals__card-heading text-[20px] font-bold text-[#2a2a2a]">
                      Cheap Railway Tickets With Us
                    </h3>
                    <span className="">Whole world</span>
                  </div>
                  <div className="deals__card-link-wrapper">
                    <Link className="main__link deals__card-link" to="/">
                      Explore More
                    </Link>
                  </div>
                </div>

                <div className="deals__card-text-wrapper">
                  <p className="deals__card-text leading-[30px]">
                    Embark on a railway adventure and explore destinations
                    worldwide. Whether it's the picturesque landscapes, bustling
                    cities, or cultural gems, our rail services offer a unique
                    and comfortable way to traverse the globe. Immerse yourself
                    in the beauty of different cultures, all accessible through
                    our extensive railway network.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Deals;
