import { Link } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { GrFormNextLink } from 'react-icons/gr';
import { FaUser, FaGlobe } from 'react-icons/fa';
import i1 from '../../img/countries-dubai.jpg';
import i2 from '../../img/countries-antalya.jpg';
import i3 from '../../img/countries-sharm.jpg';
import i4 from '../../img/countries-istanbul.jpg';
import './Countries.css';

const Countries = () => {
  return (
    <div className="countries__wrpper flex flex-wrap items-center justify-center">
      <div className="container">
        <div className="countries__top flex flex-col items-start justify-start text-start py-[80px]">
          <h2 className="countries__heading text-[30px] font-bold text-[#2a2a2a] pb-[20px]">
            Visit One Of Our Countries Now
          </h2>
          <p className="countries__text leading-[30px]">
            Discover the best offers in each city, curated just for you. Immerse
            <br />
            yourself in a world of savings and indulge in unparalleled
            experiences.
          </p>
        </div>

        <div className="countries__cards">
          <ul className="countries__cards-list flex flex-col justify-center mb-[100px] gap-[30px]">
            <li className="countries__cards-item flex w-[100%] max-w-[1100px] border-b pb-[30px]">
              <div className="countries__card-img w-[32%] pr-[24px]">
                <img src={i1} alt="" className="rounded-[26px]" />
              </div>
              <div className="countries__card-info w-[68%]">
                <div className="countries__card-info-header flex justify-between mb-[19px]">
                  <div className="countries__card-header flex-col flex-wrap">
                    <h3 className="countries__card-heading text-[20px] font-bold text-[#2a2a2a]">
                      Dubai
                    </h3>
                    <span className="">United Arab Emirated</span>
                  </div>
                  <div className="countries__card-link-wrapper">
                    <Link className="main__link countries__card-link" to="/">
                      Explore More
                    </Link>
                  </div>
                </div>

                <div className="countries__card-text-wrapper">
                  <p className="countries__card-text leading-[30px] pb-1 border-b">
                    Dubai is a city and emirate in the United Arab Emirates
                    known for luxury shopping, ultramodern architecture and a
                    lively nightlife scene. Burj Khalifa, an 830m-tall tower,
                    dominates the skyscraper-filled skyline. At its foot lies
                    Dubai Fountain, with jets and lights choreographed to music.
                    On artificial islands just offshore is Atlantis, The Palm, a
                    resort with water and marine-animal parks.
                  </p>
                </div>

                <div className="countries__card-bottom">
                  <div className="countries__card-bottom-info border-b pt-[30px] pb-[18px]">
                    <ul className="flex items-center justify-between pr-5">
                      <li className="fa flex items-center justify-center">
                        <FaUser className="countries__card-fa-icon" />
                        <span>8.66 Mil People</span>
                      </li>

                      <li className="fa">
                        <FaGlobe className="countries__card-fa-icon" />
                        <span>41.290 km2</span>
                      </li>

                      <li className="fa">
                        <TiHome className="countries__card-fa-icon" />
                        <span>$1.100.200</span>
                      </li>
                    </ul>
                  </div>
                  <div className="countries__card-bottom-link">
                    <Link
                      className="flex items-center pt-[22px] font-medium text-[#22b3c1]"
                      to="/"
                    >
                      Need Directions ?
                      <GrFormNextLink className="text-[20px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="countries__cards-item flex w-[100%] max-w-[1100px] border-b pb-[30px]">
              <div className="countries__card-img w-[32%] pr-[24px]">
                <img src={i2} alt="" className="rounded-[26px]" />
              </div>
              <div className="countries__card-info w-[68%]">
                <div className="countries__card-info-header flex justify-between mb-[19px]">
                  <div className="countries__card-header flex-col flex-wrap">
                    <h3 className="countries__card-heading text-[20px] font-bold text-[#2a2a2a]">
                      Antalya
                    </h3>
                    <span className="">Turkey</span>
                  </div>
                  <div className="countries__card-link-wrapper">
                    <Link className="main__link countries__card-link" to="/">
                      Explore More
                    </Link>
                  </div>
                </div>

                <div className="countries__card-text-wrapper">
                  <p className="countries__card-text leading-[30px] pb-1 border-b">
                    Antalya is the fastest-growing city in Turkey, and tourists
                    from around the world are discovering its fabulous mix of
                    great beaches and traditional Turkish culture. Kids will
                    love the Beach Park, which features Aqua Land (a
                    waterslide-fanatic's dream) and Dolphin Land (home to
                    dolphins, sea lions and white whales). Make sure to explore
                    the old town center and to see Hadrian's Gate.
                  </p>
                </div>

                <div className="countries__card-bottom">
                  <div className="countries__card-bottom-info border-b pt-[30px] pb-[18px]">
                    <ul className="flex items-center justify-between pr-5">
                      <li className="fa flex items-center justify-center">
                        <FaUser className="countries__card-fa-icon" />
                        <span>44.48 Mil People</span>
                      </li>

                      <li className="fa">
                        <FaGlobe className="countries__card-fa-icon" />
                        <span>275.400 km2</span>
                      </li>

                      <li className="fa">
                        <TiHome className="countries__card-fa-icon" />
                        <span>$946.000</span>
                      </li>
                    </ul>
                  </div>
                  <div className="countries__card-bottom-link">
                    <Link
                      className="flex items-center pt-[22px] font-medium text-[#22b3c1]"
                      to="/"
                    >
                      Need Directions ?
                      <GrFormNextLink className="text-[20px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="countries__cards-item flex w-[100%] max-w-[1100px] border-b pb-[30px]">
              <div className="countries__card-img w-[32%] pr-[24px]">
                <img src={i3} alt="" className="rounded-[26px]" />
              </div>
              <div className="countries__card-info w-[68%]">
                <div className="countries__card-info-header flex justify-between mb-[19px]">
                  <div className="countries__card-header flex-col flex-wrap">
                    <h3 className="countries__card-heading text-[20px] font-bold text-[#2a2a2a]">
                      Sharm El-Sheikh
                    </h3>
                    <span className="">Egypt</span>
                  </div>
                  <div className="countries__card-link-wrapper">
                    <Link className="main__link countries__card-link" to="/">
                      Explore More
                    </Link>
                  </div>
                </div>

                <div className="countries__card-text-wrapper">
                  <p className="countries__card-text leading-[30px] pb-1 border-b">
                    Sharm El Sheikh is the center of tourism action in Sinai
                    Peninsula and it has the world top diving sites. Specially
                    the underwater wonders of Ras Mohammed national park that
                    took Sharm city to whole different level. The city has
                    diving and shipwreck sites that attract both advanced and
                    recreational divers from around the world to discover the un
                    parallel marine life deep down the red sea.
                  </p>
                </div>

                <div className="countries__card-bottom">
                  <div className="countries__card-bottom-info border-b pt-[30px] pb-[18px]">
                    <ul className="flex items-center justify-between pr-5">
                      <li className="fa flex items-center justify-center">
                        <FaUser className="countries__card-fa-icon" />
                        <span>67.41 Mil People</span>
                      </li>

                      <li className="fa">
                        <FaGlobe className="countries__card-fa-icon" />
                        <span>551.500 km2</span>
                      </li>

                      <li className="fa">
                        <TiHome className="countries__card-fa-icon" />
                        <span>$425.600</span>
                      </li>
                    </ul>
                  </div>
                  <div className="countries__card-bottom-link">
                    <Link
                      className="flex items-center pt-[22px] font-medium text-[#22b3c1]"
                      to="/"
                    >
                      Need Directions ?
                      <GrFormNextLink className="text-[20px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="countries__cards-item flex w-[100%] max-w-[1100px] border-b pb-[30px]">
              <div className="countries__card-img w-[32%] pr-[24px]">
                <img src={i4} alt="" className="rounded-[26px]" />
              </div>
              <div className="countries__card-info w-[68%]">
                <div className="countries__card-info-header flex justify-between mb-[19px]">
                  <div className="countries__card-header flex-col flex-wrap">
                    <h3 className="countries__card-heading text-[20px] font-bold text-[#2a2a2a]">
                      Istanbul
                    </h3>
                    <span className="">Turkey</span>
                  </div>
                  <div className="countries__card-link-wrapper">
                    <Link className="main__link countries__card-link" to="/">
                      Explore More
                    </Link>
                  </div>
                </div>

                <div className="countries__card-text-wrapper">
                  <p className="countries__card-text leading-[30px] pb-1 border-b">
                    Istanbul is the most populous city in Turkey and its
                    cultural, economic and historic center. It is located in
                    north-western part of Turkey, divided into European and
                    Asian side by Bosphorus, which connects the Sea of Marmara
                    and Black Sea. It is the only city in the world that sits on
                    two continents.
                  </p>
                </div>

                <div className="countries__card-bottom">
                  <div className="countries__card-bottom-info border-b pt-[30px] pb-[18px]">
                    <ul className="flex items-center justify-between pr-5">
                      <li className="fa flex items-center justify-center">
                        <FaUser className="countries__card-fa-icon" />
                        <span>67.41 Mil People</span>
                      </li>

                      <li className="fa">
                        <FaGlobe className="countries__card-fa-icon" />
                        <span>551.500 km2</span>
                      </li>

                      <li className="fa">
                        <TiHome className="countries__card-fa-icon" />
                        <span>$425.600</span>
                      </li>
                    </ul>
                  </div>
                  <div className="countries__card-bottom-link">
                    <Link
                      className="flex items-center pt-[22px] font-medium text-[#22b3c1]"
                      to="/"
                    >
                      Need Directions ?
                      <GrFormNextLink className="text-[20px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Countries;
