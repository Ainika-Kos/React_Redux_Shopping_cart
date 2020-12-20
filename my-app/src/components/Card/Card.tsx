import React, { FC } from 'react';
import 'flexboxgrid';
import './Card.scss';

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
  return (
    <div className="Card">
      <div className="Card__image-wrapper">
        <img src={image} alt={productName} className="Card__image" />
      </div>
      <h1 className="Card__heading">{productName}</h1>
      <h2 className="Card__subheading">{productCategory}</h2>
      <p className="Card__paragraph">{productDescription}</p>
      <div className="Card__purchase-wrapper">
        <p className="Card__price">{productPrice} €</p>
        <button type="button">Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
