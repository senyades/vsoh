
    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import 'animate.css';
    
    import '../style/LoginForm.scss';
    import '../style/main_components.scss'
    
    import Header from './header';
    import Footer from './footer';
    
    const LoginForm = () => {
      const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const isFormValid = () => {
        const { emailOrPhone, password } = formData;
        return emailOrPhone.trim() !== '' && password.trim() !== '';
      };
    
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
    
      return (
        <div className="main">
          <Header />
          <form className="mainform animate__animated animate__fadeIn">
            <h2>Вход в аккаунт</h2>
            <div className="form-field">
              <input
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleInputChange}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email или телефон"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-control"
                id="inputPassword2"
                placeholder="Пароль"
              />
              <a href="/">Восстановить пароль</a>
            </div>
            <div className="form-btn">
                <Link to="/profile" className={`btn btn-primary ${isFormValid() ? '' : 'disabled'}`}>
                  Войти
              </Link>
              <p>
                Нет аккаунта? <Link to="/registration">Регистрация</Link>
              </p>
            </div>
            <div className="errorBox">
              <p className="error-message"></p>
            </div>
          </form>
    
          <Footer />
          <div className="bg-element" onMouseMove={handleMouseMove}></div>
        </div>
      );
    };
    
    export default LoginForm;
    