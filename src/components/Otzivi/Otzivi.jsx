import React from "react";
import "./Otziv.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const Otzivi = () => {
  const swipe = [
    {
      id: 1,
      img: "/r1.png",
      name: "Куралай",
      text: " В жизни настал переломный момент, сделали очень выгодное предложение по работе, не знала, как поступить, очень боялась переезжать в другую страну и начинать жизнь с нуля. Мама предложила обратиться к экстрасенсу Тамаре. Решила попробовать, когда написала, подробностей не рассказывала, Тамара все сама увидела. Сказала, что не нужно упускать свой шанс, иначе буду жалеть. Сейчас очень рада, что познакомилась с вами, все сложилось наилучшим образом. Спасибо вам.",
    },
    {
      id: 2,
      img: "/r2.png",
      name: "Гульдана",
      text: " Благодаря Тамаре я сейчас очень счастлива! Я заказала  приворот по фотографии любимого человека. Через 4 дня ко мне подошел мой избранник, хотя до этого он был абсолютно безразличен ко мне. Теперь мы встречаемся и очень счастливы! Спасибо Вам Тамара! Вы лучшая!!!",
    },
    {
      id: 3,
      img: "/r3.png",
      name: "Вадим",
      text: " 2 года назад я женился. У меня с женой были отличные отношения, но потом, в один миг все пошло очень плохо. Постоянная ругать. Я решил обратиться за помощью к высшим силам, хотя ранее не верил в подобное. Но все таки рискнул. Тамара провела двухсторонний обряд на отношения и установила защиту. Сейчас мы живем душа в душу.                ",
    },
    {
      id: 4,
      img: "/r4.png",
      name: "Елена",
      text: " Я давно хотела приворожить одного человека. Традиционным способом не получалось сделать так, чтобы мы были вместе… Я благодарна ясновидящей Тамаре за действительно реальную помощь. Мы уже более двух месяцев вместе! Все как в сказке! И за эту сказку я Вам очень очень благодарна!!!   ",
    },
  ];

  return (
    <>
      <div className="otziv">
        <div className="container">
          <div className="otziv__wrapper">
            <h1>Отзывы</h1>
            <img src="/bottom_line.png" alt="" />
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 2.5,
                  centeredSlides: true,
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper"
            >
              {swipe.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="review-card">
                    <img src={review.img} alt={review.name} />
                    <h3>{review.name}</h3>
                    <p>{review.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <p>* Результат может отличаться в каждом индивидуальном случае</p>
            <button>Обратиться к Тамаре</button>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </>
  );
};

export default Otzivi;
