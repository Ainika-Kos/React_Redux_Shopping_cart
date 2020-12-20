import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { translations } from '../locales/translations';
import './contacts.scss';

const Contacts: FC = () => {
  const language = useSelector((state: RootState) => state.language);

  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--16">
          <div className="col-xs-12">
            <h1>{translations[language].contactTitleFirst}</h1>
            <h1>{translations[language].contactTitleSecond}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3">
            <form action="">
              <div className="row margin-bottom--8">
                <div className="col-xs-12">
                  <label htmlFor="name" className="label">
                    {translations[language].name}
                  </label>
                  <input type="text" id="name" className="input" />
                </div>
              </div>
              <div className="row margin-bottom--8">
                <div className="col-xs-12">
                  <label htmlFor="lastname" className="label">
                    {translations[language].email}
                  </label>
                  <input type="text" id="lastname" className="input" />
                </div>
              </div>
              <div className="row margin-bottom--24">
                <div className="col-xs-12">
                  <label htmlFor="question" className="label">
                    {translations[language].question}
                  </label>
                  <textarea id="question" className="input textarea" />
                </div>
              </div>
              <div className="row center-xs">
                <div className="col-xs-12">
                  <button type="submit">{translations[language].submit}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
