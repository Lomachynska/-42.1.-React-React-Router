// src/Home.js
import React from 'react';  // Імпортуємо React для створення компонента
import { useNavigate } from 'react-router-dom';  // Імпортуємо хук useNavigate для програмної навігації
import styled from 'styled-components';  // Імпортуємо styled-components для стилізації

// Стилізуємо контейнер для компонента Home
const HomeContainer = styled.div`
  background-color:rgb(8, 247, 223);  // Встановлюємо фоновий колір контейнера
  padding: 40px;  // Додаємо внутрішні відступи
  border-radius: 8px;  // Округлюємо кути контейнера
  text-align: center;  // Вирівнюємо текст по центру
  max-width: 800px;  // Максимальна ширина контейнера
  margin: 20px auto;  // Встановлюємо відступи зверху та знизу, по центру екрану
`;

// Стилізуємо заголовок для сторінки Home
const HomeTitle = styled.h2`
  color: #333;  // Колір тексту заголовка
  font-size: 36px;  // Розмір шрифту заголовка
  margin-bottom: 20px;  // Відступ знизу
`;

// Стилізуємо кнопку для переходу на іншу сторінку
const Button = styled.button`
  background-color:rgb(65, 67, 65);  // Колір фону кнопки
  color: white;  // Колір тексту кнопки
  font-size: 18px;  // Розмір шрифту кнопки
  padding: 10px 20px;  // Внутрішні відступи
  border: none;  // Без рамки
  border-radius: 5px;  // Округлюємо кути кнопки
  cursor: pointer;  // Курсор у вигляді руки при наведенні

  &:hover {
    background-color: #45a049;  // Темніший колір фону при наведенні
  }

  &:focus {
    outline: none;  // При фокусі на кнопці прибираємо стандартну обводку
  }
`;

function Home() {
  const navigate = useNavigate();  // Ініціалізуємо хук useNavigate для програмної навігації

  // Функція для переходу на сторінку "About"
  const goToAbout = () => {
    navigate('/about');  // За допомогою хука useNavigate здійснюємо перехід на сторінку "/about"
  };

  return (
    // Основний контейнер сторінки Home
    <HomeContainer>
      {/* Заголовок сторінки Home */}
      <HomeTitle>Це домашня сторінка</HomeTitle>
      
      {/* Кнопка, яка викликає функцію goToAbout при натисканні */}
      <Button onClick={goToAbout}>Перейти до сторінки про нас</Button>
    </HomeContainer>
  );
}

export default Home;  // Експортуємо компонент Home для використання в інших частинах програми
