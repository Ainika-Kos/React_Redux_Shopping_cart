import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { translations } from '../locales/translations';

const Cart: FC = () => {
  const language = useSelector((state: RootState) => state.language);

  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <h1>{translations[language].cartTitle}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
