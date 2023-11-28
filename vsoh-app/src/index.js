import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Profile from './components/account/profile';
import ProfileNoData from './components/account/ProfileNoData';
import ProfileInputData from './components/account/ProfileInputData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
    <Route path="/login" element={<LoginForm />} />
    <Route path="/registration" element={<RegistrationForm />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/profilenodata" element={<ProfileNoData />} />
    <Route path="/profileinputdata" element={<ProfileInputData />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
