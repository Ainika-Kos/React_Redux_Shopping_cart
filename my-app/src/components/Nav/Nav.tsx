import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { translations } from '../../locales/translations';
import './Nav.scss';

export const Nav: FC = () => {
  const language = useSelector((state: RootState) => state.language);

  return (
    <nav>
      <NavLink exact to="/" className="nav" activeClassName="selected">
        {translations[language].navHome}
      </NavLink>
      <NavLink to="/about" className="nav" activeClassName="selected">
        {translations[language].navAbout}
      </NavLink>
      <NavLink to="/contacts" className="nav" activeClassName="selected">
        {translations[language].navContact}
      </NavLink>
    </nav>
  );
};
