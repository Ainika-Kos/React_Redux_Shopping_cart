import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import { Dropdown } from "../Dropdown/Dropdown";
import { changeLanguage } from "../../store/actions";
import { Languages, RootState } from "../../store/types";
import "./Header.scss";

const options = [
  {
    name: "lv",
    value: "lv",
  },
  {
    name: "en",
    value: "en",
  },
];

export const Header: FC = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language);

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row middle-xs">
          <div className="col-xs-12 col-md-3">
            <img
              src="https://img.pngio.com/christmas-village-shop-christmas-shop-png-330_124.png"
              alt=""
              width="200"
            />
          </div>
          <div className="col-xs-12 col-md-5">
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
            <NavLink to="/cart" >
            <img
              src="https://cdn3.iconfinder.com/data/icons/christmas-time-with-happy-man/91/Christmas_Time_13-512.png"
              alt=""
              width="50"
            />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
