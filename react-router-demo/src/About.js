// src/About.js
import React from 'react';  // Імпортуємо React для використання JSX
import { Routes, Route, NavLink } from 'react-router-dom';  // Імпортуємо необхідні компоненти для маршрутизації
import styled from 'styled-components';  // Імпортуємо бібліотеку для стилізування компонентів за допомогою styled-components

// Стилі для контейнера "About" - це основний блок, який обгортає весь контент сторінки "About"
const AboutContainer = styled.div`
  background-color: rgb(234, 197, 75);  // Встановлюємо фоновий колір
  padding: 30px;  // Відступи всередині контейнера
  border-radius: 8px;  // Округлі кути для естетичності
  max-width: 800px;  // Максимальна ширина для контенту
  margin: 20px auto;  // Центруємо контейнер на сторінці з відступами
  text-align: center;  // Вирівнюємо текст по центру
`;

// Стилі для заголовка "AboutTitle"
const AboutTitle = styled.h2`
  color: black;  // Колір тексту заголовка
  font-size: 36px;  // Розмір шрифта
  margin-bottom: 20px;  // Відступ знизу, щоб відокремити заголовок від контенту
`;

// Стилі для списку навігації (для вкладених посилань)
const NavList = styled.ul`
  display: flex;  // Використовуємо флексбокс для горизонтального вирівнювання елементів
  justify-content: center;  // Вирівнюємо елементи по центру
  list-style-type: none;  // Прибираємо маркери списку
  padding: 0;  // Прибираємо внутрішні відступи
`;

// Стилі для кожного елемента списку навігації
const NavItem = styled.li`
  margin: 0 15px;  // Відступи між елементами списку
`;

// Стилізований компонент для NavLink, що використовується для навігації між вкладеними сторінками
const StyledNavLink = styled(NavLink)`
  font-size: 18px;  // Розмір шрифта для посилання
  color: black;  // Колір тексту посилання
  text-decoration: none;  // Вимикаємо підкреслення

  // Стилі для активного посилання (коли користувач знаходиться на відповідній сторінці)
  &.active {
    font-weight: bold;  // Робимо текст жирним
    color: #ff6600;  // Змінюємо колір на помаранчевий для активного посилання
  }

  // Стилі для посилання при наведенні
  &:hover {
    color: #ff6600;  // Колір тексту при наведенні
  }
`;

// Вкладений компонент для сторінки "Team" (про команду)
const Team = () => {
  return <div>Це сторінка про нашу команду!</div>;  // Простий компонент для відображення інформації про команду
};

// Вкладений компонент для сторінки "History" (історія компанії)
const History = () => {
  return <div>Це історія нашої компанії!</div>;  // Простий компонент для відображення історії компанії
};

// Основний компонент "About"
const About = () => {
  return (
    <AboutContainer>
      {/* Заголовок сторінки */}
      <AboutTitle>Це сторінка про нас</AboutTitle>

      {/* Навігація між вкладеними сторінками */}
      <nav>
        {/* Список посилань */}
        <NavList>
          <NavItem>
            {/* Використовуємо StyledNavLink для навігації на вкладену сторінку "team" */}
            <StyledNavLink to="team" activeClassName="active">
              Команда
            </StyledNavLink>
          </NavItem>
          <NavItem>
            {/* Використовуємо StyledNavLink для навігації на вкладену сторінку "history" */}
            <StyledNavLink to="history" activeClassName="active">
              Історія
            </StyledNavLink>
          </NavItem>
        </NavList>
      </nav>

      {/* Вкладені маршрути */}
      <Routes>
        {/* Вказуємо, які компоненти повинні відображатися при переході на вкладені маршрути */}
        <Route path="team" element={<Team />} />  {/* Вкладений маршрут для сторінки "Team" */}
        <Route path="history" element={<History />} />  {/* Вкладений маршрут для сторінки "History" */}
      </Routes>
    </AboutContainer>
  );
};

// Експортуємо компонент для використання в інших частинах програми
export default About;
