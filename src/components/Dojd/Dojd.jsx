import React, { useEffect } from "react";
import "./Dojd.scss"; 

const Dojd = () => {
  useEffect(() => {
    // Создаем капли динамически
    const container = document.querySelector(".golden-rain-container");
    for (let i = 0; i < 50; i++) {
      const drop = document.createElement("div");
      drop.className = "gold-drop";

      // Рандомные параметры
      const size = Math.random() * 4 + 5;
      const posX = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 7 + 2;

      drop.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
      `;

      container.appendChild(drop);
    }
  }, []);

  return (
    <div className="golden-rain-container">
    </div>
  );
};

export default Dojd;
