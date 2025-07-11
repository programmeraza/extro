import React from "react";
import "./Contact.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact__wrapper">
            <h1>Контакты</h1>
            <img src="/bottom_line.png" alt="" />
            <div className="contact__box">
              <div className="contact__left">
                <h2 className="contact__text">
                  Принимаю лично в городе Алматы, либо онлайн, дистанционно по
                  всему Казахстану, Европе и миру. Всегда на связи, обращайтесь
                  по номеру который указан ниже.
                </h2>
                <div className="header__phone-flex">
                  <img src="/phone.png" alt="" />
                  <p>+7 (705) 214-88-34</p>
                </div>
                <div className="contact__icons">
                  <IoLogoWhatsapp className="contact__what" />
                  <h4>Написать в Whatsapp</h4>
                </div>
                <div className="contact__icons">
                  <FaTelegramPlane className="contact__what" />
                  <h4>Написать в Telegram</h4>
                </div>
                <h2 className="contact__text contact__bottom">
                  В своей работе сохраняю полную конфидициальность.
                </h2>
              </div>
              <div className="contact__right">
                <h2 className="contact__text">
                  Либо оставьте свое контактные данные и я обязательно вам
                  перезвоню.
                </h2>
                <input type="text" placeholder="Ваше Имя" />
                <input type="number" placeholder="Ваш номер" />
                <button>ОТПРАВИТЬ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </>
  );
};

export default Contact;
