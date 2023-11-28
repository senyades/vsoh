import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

import '../style/RegistrationForm.scss';

import Header from './header';
import Footer from './footer';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agreement: false,
  });

  //скрипт для БГ
  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
  
    if (x && y) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const bgElement = document.querySelector('.bg-element');
  
      const distanceToCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
      const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
      const gradientSize = 20 + (distanceToCenter / maxDistance) * 100;
  
      // Добавим стили и покажем .bg-element
      document.body.style.setProperty('--x', `${x}px`);
      document.body.style.setProperty('--y', `${y}px`);
      document.body.style.setProperty('--size', `${gradientSize}%`);
  
      // Показать .bg-element и установить прозрачность
      bgElement.style.opacity = '0.3'; // Меняем прозрачность
    }
      };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const isFormValid = () => {
    const { email, phoneNumber, password, confirmPassword, agreement } = formData;
    return email !== '' && phoneNumber !== '' && password !== '' && confirmPassword !== '' && agreement;
  };

  return (
    <div className="main">
      <Header />
      <form className="mainform animate__animated animate__fadeIn">
        <h2>Регистрация</h2>
        <div className="form-field">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control is-invalid"
            placeholder="Email"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Номер телефона"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Пароль"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Повторите Пароль"
          />
        </div>
        <div className="form-check">
          <input
            name="agreement"
            className="form-check-input"
            type="checkbox"
            checked={formData.agreement}
            onChange={handleInputChange}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Согласен с <a href="/">политикой обработки данных</a>
          </label>
        </div>
        <div className="form-btn">
          <Link to="/login" className={`btn btn-primary ${isFormValid() ? '' : 'disabled'}`}>
            Продолжить
          </Link>
          <Link to="/login">Уже есть аккаунт</Link>
        </div>
      </form>
      <Footer />

      <div className="bg-element" onMouseMove={handleMouseMove}></div>
    </div>
  );
};

export default RegistrationForm;

