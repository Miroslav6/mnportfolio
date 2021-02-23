import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header';
import Welcome from "./Components/Welcome/Welcome";
import Experience from "./Components/Experience/Experience";
import App from './App';
import Footer from './Footer/Footer';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Header />
      <Welcome />
      <Experience />
      <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
