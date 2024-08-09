import React, { useState, useEffect } from 'react';
import './ThemeToggler.css';
const ThemeToggler = ({ idBtn }) => {
  const initialTheme = 'dark';
  const [icon, setIcon] = useState(false);
  const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  };
  const toggleTheme = () => {

    const activeTheme = localStorage.getItem('theme');
    if (activeTheme === 'dark') {
      setTheme('light');
      setIcon(true);
    } else {
      setTheme('dark');
      setIcon(false);
    }
  };

  const setThemeOnInit = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
      setIcon(savedTheme === 'light');
    } else {
      setTheme(initialTheme);
      setIcon(false);
    }
  };

  useEffect(() => {
    setThemeOnInit();
  });
  const img404 = (icon) => {
    const img404Elem = document.querySelector('.img404');
    if (img404Elem) {
      if (!icon) {
        img404Elem.classList.add('img404-dark');
      } else {
        img404Elem.classList.remove('img404-dark');
      }
    }
  };
  const btnAccordion = (icon) => {
    const elements = document.querySelectorAll('.accordion-button');
    elements.forEach(element => {
      if (element) {
        if (!icon) {
          element.classList.add('btnAccordion-dark');
        } else {
          element.classList.remove('btnAccordion-dark');
        }
      }
    });
  }
  btnAccordion(icon);
  img404(icon);
  return (
    <div>
      <input
        checked={icon}
        placeholder='none'
        type="checkbox"
        id={idBtn}
        onChange={toggleTheme}
      />
      <label htmlFor={idBtn} className="toggle">

        <span className="toggle-button">
          <span className="crater crater-1"></span>
          <span className="crater crater-2"></span>
          <span className="crater crater-3"></span>
          <span className="crater crater-4"></span>
          <span className="crater crater-5"></span>
          <span className="crater crater-6"></span>
          <span className="crater crater-7"></span>
        </span>
        <span className="star star-1"></span>
        <span className="star star-2"></span>
        <span className="star star-3"></span>
        <span className="star star-4"></span>
        <span className="star star-5"></span>
        <span className="star star-6"></span>
        <span className="star star-7"></span>
        <span className="star star-8"></span>
      </label>
    </div>
  );
};
export default ThemeToggler;
