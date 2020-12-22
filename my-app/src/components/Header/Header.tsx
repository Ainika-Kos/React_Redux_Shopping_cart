import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Dropdown } from '../Dropdown/Dropdown';
import { changeLanguage } from '../../store/languageReducer/actions';
import { Languages, RootStateLanguage } from '../../store/languageReducer/types';
import { RootStateCart } from '../../store/cartReducer/types';
import './Header.scss';

const options = [
  {
    name: 'lv',
    value: 'lv',
  },
  {
    name: 'en',
    value: 'en',
  },
];

export const Header: FC = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const language: Languages = useSelector((state: RootStateLanguage) => state.languageReducer.language);
  // @ts-ignore
  const cart : Cart[] = useSelector((state: RootStateCart) => state.cartReducer.cart);

  return (
    <header className="header">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-12 col-md-3">
            <NavLink exact to="/">
              <img
                src="https://img.pngio.com/christmas-village-shop-christmas-shop-png-330_124.png"
                alt=""
                width="200"
              />
            </NavLink>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="row center-xs">
              <div className="col-xs-12">
                <Nav />
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-md-1 col-md-offset-1">
            <Dropdown
              value={language}
              options={options}
              chnageHandler={(e) => {
                const ln = e.target.value as Languages;

                dispatch(changeLanguage(ln));
              }}
            />
          </div>
          <div className="col-xs-6 col-md-1">
            <NavLink to="/cart">
              <div className="cart-wrapper">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/christmas-time-with-happy-man/91/Christmas_Time_13-512.png"
                  alt=""
                  width="50"
                />
                <span className="cart-amount">{cart && cart.length > 0 ? cart.length : 0}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
