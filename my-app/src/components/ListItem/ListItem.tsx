import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import 'flexboxgrid';
import './ListItem.scss';
import { translations } from '../../locales/translations';

type ListItemProps = {
  image: string;
  productName: string;
  productCategory: string;
  productDescription: string;
  productPrice: number | undefined;
  count: number;
  sum: number;
  clickHandler: () => void | undefined;
};

const ListItem: FC<ListItemProps> = ({
  image,
  productName,
  productCategory,
  productDescription,
  productPrice,
  count,
  sum,
  clickHandler,
}) => {
  const language = useSelector((state: RootState) => state.language);

  return (
    <div className="ListItem">
      <h1 className="ListItem__subheading">{productCategory}</h1>
      <h1 className="ListItem__heading">{productName}</h1>
      <p className="ListItem__price">{productPrice} €</p>
      <span className="ListItem__count">{count}</span>
      <p className="ListItem__price">{sum.toFixed(2)} €</p>
      <button type="button" onClick={clickHandler}>
        {translations[language].removeButton}
      </button>
    </div>
  );
};

export default ListItem;
