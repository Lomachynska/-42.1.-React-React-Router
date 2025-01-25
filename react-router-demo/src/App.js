// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';  // Імпортуємо компонент Home
import About from './About';  // Імпортуємо компонент About
import Contact from './Contact';  // Імпортуємо компонент Contact
import styled from 'styled-components';  // Імпортуємо styled-components для стилізації

// Стилізація основного контейнера для компонента App
const AppContainer = styled.div`
  display: flex;  // Використовуємо flexbox для розміщення елементів
  flex-direction: column;  // Встановлюємо напрямок елементів по вертикалі
  align-items: center;  // Вирівнюємо елементи по центру по горизонталі
  justify-content: center;  // Вирівнюємо елементи по центру по вертикалі
  min-height: 100vh;  // Мінімальна висота контейнера 100% від висоти вікна браузера
  background-color: #f4f4f4;  // Фоновий колір
  padding: 20px;  // Відступи навколо контейнера
`;

// Стилізація навігаційної панелі
const NavBar = styled.nav`
  margin-bottom: 20px;  // Відступ знизу для відокремлення навігаційної панелі
  ul {
    display: flex;  // Використовуємо flexbox для горизонтального вирівнювання елементів
    list-style-type: none;  // Прибираємо маркери списку
    padding: 0;  // Прибираємо внутрішні відступи
  }
  li {
    margin-right: 20px;  // Відступ між елементами списку
  }
`;

function App() {
  return (
    <Router>
      {/* Основний контейнер для всієї програми */}
      <AppContainer>
        
        {/* Навігаційна панель */}
        <NavBar>
          <ul>
            {/* Використовуємо NavLink для навігації між сторінками */}
            <li>
              <NavLink to="/" activeClassName="active-link">Home</NavLink>  {/* Посилання на домашню сторінку */}
            </li>
            <li>
              <NavLink to="/about" activeClassName="active-link">About</NavLink>  {/* Посилання на сторінку "About" */}
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>  {/* Посилання на сторінку "Contact" */}
            </li>
          </ul>
        </NavBar>

        {/* Контейнер для відображення вмісту сторінки */}
        <div className="container">
          {/* Маршрутизація за допомогою Routes та Route */}
          <Routes>
            {/* Визначаємо маршрути для різних сторінок */}
            <Route path="/" element={<Home />} />  {/* Домашня сторінка */}
            <Route path="/about" element={<About />} />  {/* Сторінка "About" */}
            <Route path="/contact" element={<Contact />} />  {/* Сторінка "Contact" */}
          </Routes>
        </div>
      </AppContainer>
    </Router>
  );
}

export default App;  // Експортуємо компонент для використання в інших частинах програми
