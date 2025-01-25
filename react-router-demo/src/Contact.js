// src/Contact.js
import React from 'react';  // Імпортуємо основну бібліотеку React для створення компонентів
import styled from 'styled-components';  // Імпортуємо styled-components для стилізації

// Стилізуємо контейнер для компонента Contact
const ContactContainer = styled.div`
  background-color: rgb(129, 238, 70);  // Встановлюємо фоновий колір контейнера
  padding: 20px;  // Додаємо відступи навколо вмісту
  border-radius: 8px;  // Округлюємо кути контейнера
`;

// Стилізуємо заголовок для контактної сторінки
const ContactTitle = styled.h2`
  color: black;  // Колір тексту заголовка
  font-size: 44px;  // Розмір шрифту заголовка
`;

const Contact = () => {
  return (
    // Основний контейнер для контактної сторінки з стилями
    <ContactContainer>
      {/* Заголовок для контактної сторінки */}
      <ContactTitle>Це контактна сторінка</ContactTitle>
    </ContactContainer>
  );
};

// Експортуємо компонент Contact, щоб використовувати його в інших частинах програми
export default Contact;
