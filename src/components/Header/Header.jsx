import React from "react";
import "./Header.scss";


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__block">
              <h1>Тамара</h1>
              <img src="/top_line.png" alt="" />
              <p className="header__text-small">Потомственная гадалка</p>
              <p className="header__text-big">
                Любой человек время от времени сталкивается с тем, что не знает,
                как поступить в той или иной ситуации. С незапамятных времен
                люди стремились заглянуть в будущее, узнать свою судьбу, ощутить
                определённую стабильность. Моя цель постараться помочь людям
                потерявшим надежду и обрести её снова! * Все результаты
                индивидуальны!
              </p>
              <img src="/bottom_line.png" alt="" />
              <div className="header__phone-flex">
                <img src="/phone.png" alt="" />
                <p>+7 (705) 214-88-34</p>
              </div>
              <div className="header__btn">
                <button className="">Обратиться к Тамаре</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </>
  );
};

export default Header;
