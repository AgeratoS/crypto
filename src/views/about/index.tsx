import React from "react";
import MathJax from "react-mathjax";
import InlineFormula from "../../components/InlineFormula";

const About: React.FC = () => (
  <MathJax.Provider>
    <div className="about">
      <div className="about__main">
        <div className="theory">
          <h2 className="theory__title title">Теоретический минимум</h2>
          <p className="theory__paragraph">
            Пусть есть незашифрованный текст <InlineFormula tex={"m"} />. Тогда
            под криптографической хэш-функцией (хэш, хэш-образ, хэш-код,
            свертка, дайджест сообщения, цифровой отпечаток) будем понимать
            детерминированную функцию <InlineFormula tex={"h(m)"} />, выход
            которой является строка фиксированной длины{" "}
            <InlineFormula tex={"n"} />. Любая хэш-функция должна удовлетворять
            следующим требованиям:
          </p>
          <ol className="ordered">
            <li className="ordered__item">
              Стойкостью к поиску первого прообраза, то есть отсутствием
              эффективного полиномиального алгоритма вычисления обратной
              функции. Иными словами, нельзя восстановить текст{" "}
              <InlineFormula tex={"m"} /> по его известной свертке{" "}
              <InlineFormula tex={"h(m)"} /> за реальное время. Хэш-функция
              должна являться односторонней функцией.
            </li>
            <li className="ordered__item">
              Стойкостью к поиску второго прообраза (коллизиям первого рода) -
              вычислительно невозможно, зная сообщение{" "}
              <InlineFormula tex={"m"} /> и его хэш{" "}
              <InlineFormula tex={"h(m)"} /> найти сообщение{" "}
              <InlineFormula tex={"m_0"} />, такое что{" "}
              <InlineFormula tex={"h(m) = h(m_0)"} />
            </li>
            <li className="ordered__item">
              Стойкостью к коллизиям (коллизиям второго рода) - коллизией для
              хэш-функции называется пара значений <InlineFormula tex={"m"} /> и{" "}
              <InlineFormula tex={"m_0"} />, при этом{" "}
              <InlineFormula tex={"m \\neq m_0"} />, для которой{" "}
              <InlineFormula tex={"h(m)=h(m_0)"} />. Так как количество
              возможных открытых текстов больше числа возможных значений хэша,
              то для одной свертки найдется множество прообразов, поэтому
              коллизии обязательно существуют.
            </li>
          </ol>
        </div>

        <div className="applying">
          <h2 className="applying__title title">Применение хэш-функций</h2>
        </div>
      </div>
      <div className="about__footer">
        <div className="author">Алексей Матвеев, бИТ-171</div>
        <div className="place">г. Воронеж, 2020</div>
      </div>
    </div>
  </MathJax.Provider>
);

export default About;
