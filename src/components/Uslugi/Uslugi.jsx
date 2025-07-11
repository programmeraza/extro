import React from "react";
import "./Uslugi.scss";

const Uslugi = () => {
  const cards = [
    {
      id: 1,
      img: "/s1.png",
      title1: "Гадание",
      title2: "и Предсказание",
      text: "Гадание на картах Таро и Ленорман, кофейной гуще, гадание по фото",
    },
    {
      id: 2,
      img: "/s2.png",
      title1: "Белая и",
      title2: "черная магия",
      text: "Сильнейшие уникальные обряды белой и черной магии по фамильной колдовской книге.",
    },
    {
      id: 3,
      img: "/s3.png",
      title1: "Привороты,",
      title2: "отвороты",
      text: "Эффективные привороты, любовные привязки, отвороты соперницы",
    },
    {
      id: 4,
      img: "/s4.png",
      title1: "Семейное",
      title2: "счастье",
      text: "Возвращение мужа/жены в семью, воссоединение любящих сердец",
    },
    {
      id: 5,
      img: "/s5.png",
      title1: "Избавление",
      title2: "от одиночества",
      text: "Помогаю снять венец безбрачия и покрывало одиночества",
    },
    {
      id: 6,
      img: "/s6.png",
      title1: "Удача и",
      title2: "финансы",
      text: "Уникальные сильнейшие обряды на деньги, удачу, работу и карьеру",
    },
    {
      id: 7,
      img: "/s7.png",
      title1: "Снятие порчи",
      title2: "и сглаза",
      text: "Проведение обрядов очистки от порчи, сглаза и от проклятий",
    },
    {
      id: 8,
      img: "/s8.png",
      title1: "Установка",
      title2: "защиты",
      text: "Магическая защита от негативного влияния завистников",
    },
    {
      id: 9,
      img: "/s9.png",
      title1: "Сексуальная",
      title2: "привязка",
      text: "Ритуалы на привязку к вам партнера",
    },
    {
      id: 10,
      img: "/s10.png",
      title1: "Рождественские и",
      title2: "новогодние ритуалы",
      text: "Сильнейшие уникальные рождественские и новогодние ритуалы на разные ситуации",
    },
  ];

  return (
    <>
      <div className="uslugi">
        <div className="container">
          <div className="uslugi__wrapper">
            <h1>Мои услуги</h1>
            <img src="/bottom_line.png" alt="line" />
            <div className="uslugi__cards">
              {cards.map((card) => (
                <div className="uslugi__card" key={card.id}>
                  <img src={card.img} alt={card.title1} />
                  <h2>
                    {card.title1} <br /> {card.title2}
                  </h2>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
            <p className="uslugi__text">
              * Результат может отличаться в каждом индивидуальном (отдельном)
              случае
            </p>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </>
  );
};

export default Uslugi;
