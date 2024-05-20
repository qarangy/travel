import { Link } from 'react-router-dom';
import { FaUser, FaGlobe } from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';
import './Main.css';

const Main = () => {
  return (
    <div className="main__wrapper flex flex-col items-center justify-center min-h-[92vh]">
      <div className="container">
        <div className="main__top flex flex-col items-center justify-center mb-[120px]">
          <h2 className="main__text text-[20px] font-medium mb-[20px]">
            Take a Glimpse Into The Beautiful City Of:
          </h2>
          <h1 className="main__heading font-bold text-[50px] mb-[30px]">
            Antalya
          </h1>
          <Link to="/" className="main__link">
            Go There
          </Link>
        </div>

        <div className="main__bottom flex justify-between items-center bg-white py-[30px] px-[60px] rounded-[60px]">
          <div className="main__card">
            <ul className="main__cards-list flex items-center gap-[48px]">
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
            <Link to="/" className="main__link">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
