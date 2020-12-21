import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import 'flexboxgrid';
import './Card.scss';
import { translations } from '../../locales/translations';

type CardProps = {
  image: string;
  productName: string;
  productCategory: string;
  productDescription: string;
  productPrice: number | undefined;
};

const Card: FC<CardProps> = ({
  image,
  productName,
  productCategory,
  productDescription,
  productPrice,
}) => {
  const language = useSelector((state: RootState) => state.language);

  return (
    <div className="Card">
      <div className="Card__description-wrapper">
        <div className="Card__image-wrapper">
          <img src={image} alt={productName} className="Card__image" />
        </div>
        <h1 className="Card__heading">{productName}</h1>
        <h2 className="Card__subheading">{productCategory}</h2>
        <p className="Card__paragraph">{productDescription}</p>
      </div>
      <div className="Card__purchase-wrapper">
        <p className="Card__price">{productPrice} €</p>
        <button type="button">{translations[language].buyButton}</button>
      </div>
    </div>
  );
};

export default Card;
