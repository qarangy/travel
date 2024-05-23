import { FaPhone } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import './Contacts.css';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="contacts__wrapper flex justify-center items-center mb-2"
    >
      <div className="container">
        <div className="contacts__info">
          <ul className="contacts__info-list flex justify-between items-center gap-[24px] text-[#22B3C1] text-[20px] mb-[70px]">
            <li className="contacts__info-item">
              <div className="contacts__info-logo">
                <FaPhone />
              </div>
              <h3 className="contacts__info-heading">Make a Phone Call</h3>
              <p className="contacts__info-text">+998 99 299 99 96</p>
            </li>
            <li className="contacts__info-item">
              <div className="contacts__info-logo">
                <IoIosMail />
              </div>
              <h3 className="contacts__info-heading">Contact Us via Email</h3>
              <p className="contacts__info-text">zamonbiznestour@mail.ru</p>
            </li>
            <li className="contacts__info-item">
              <div className="contacts__info-logo">
                <FaLocationDot />
              </div>
              <h3 className="contacts__info-heading">Visit Our Offices</h3>
              <p className="contacts__info-text">
                15/25, Chilanzar - 9, Tashkent city
              </p>
            </li>
          </ul>
        </div>

        <div className="contacts__map-wrapper">
          <iframe
            className="rounded-t-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6551.0472364004045!2d69.16483874044387!3d41.27983707592945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89a274fdb9b7%3A0x2b8bc58608ca7fb2!2z0KfQuNC70LDQvdC30LDRgC0yNSwgMTAwMTUyLCDQotCw0YjQutC10L3Rgiwg0KLQsNGI0LrQtdC90YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e1!3m2!1sru!2s!4v1716388954036!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contacts__form-wrapper bg-[#F9F9F9] px-[120px] pb-[60px] rounded-b-3xl">
          <h2 className="font-bold text-[30px] leading-[36px] text-center text-[#2a2a2a] pt-[60px] pb-[50px]">
            Make Your <span className="text-[#22B3C1]">Reservation</span>
            Through This <span className="text-[#22B3C1]">Form</span>
          </h2>
          <form id="contacts__form">
            <div className="flex gap-[24px] mb-[30px]">
              <div className="flex flex-col w-[50%]">
                <label className="mb-[8px]" htmlFor="">
                  Your Name
                </label>
                <input
                  className="bg-inherit border px-[20px] py-[12px] rounded-[24px]"
                  type="text"
                  id="name"
                  placeholder="Ex. John Smithee"
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label className="mb-[8px]" htmlFor="">
                  Your Phone Number
                </label>
                <input
                  className="bg-inherit border px-[20px] py-[12px] rounded-[24px]"
                  type="text"
                  id="surname"
                  placeholder="Ex. +99891 123 45 67"
                />
              </div>
            </div>

            <div className="flex gap-[24px] mb-[30px]">
              <div className="flex flex-col w-[50%]">
                <label className="mb-[8px]" htmlFor="">
                  Number Of Guests
                </label>
                <select
                  className="bg-inherit border px-[20px] py-[12px] rounded-[24px] text-[#2a2a2a]"
                  name="count"
                  id="count"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3+">3+</option>
                </select>
              </div>

              <div className="flex flex-col w-[50%]">
                <label className="mb-[8px]" htmlFor="">
                  Check In Date
                </label>
                <input
                  className="bg-inherit border px-[20px] py-[12px] rounded-[24px] text-[#2a2a2a]"
                  type="date"
                  name="date"
                  id="date"
                />
              </div>
            </div>

            <div className="">
              <div className="flex flex-col mb-[30px]">
                <label className="mb-[8px]" htmlFor="">
                  Choose Your Destination
                </label>
                <select
                  className="bg-inherit border px-[20px] py-[12px] rounded-[24px] text-[#2a2a2a]"
                  name="count"
                  id="count"
                >
                  <option value="Turkey">Antalya</option>
                  <option value="Istanbul">Istanbul</option>
                  <option value="Sharm El-Sheykh">Sharm El-Sheykh</option>
                  <option value="Dubai">Dubai</option>
                </select>
              </div>

              <div className="flex flex-col mb-[30px]">
                <label className="mb-[8px]" htmlFor="">
                  Choose Your Visa Support
                </label>
                <select
                  className="bg-inherit border px-[20px] py-[12px] rounded-[24px] text-[#2a2a2a]"
                  name="count"
                  id="count"
                >
                  <option value="Turkey">Turkey</option>
                  <option value="UAE">UAE</option>
                  <option value="Egypt">Egypt</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <Link className="main__link w-[100%] text-center">
                Make Your Reservation Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
