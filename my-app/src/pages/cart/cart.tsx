import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Languages, RootStateLanguage } from '../../store/languageReducer/types';
import { Cart, RootStateCart } from '../../store/cartReducer/types';
import { translations } from '../../locales/translations';
import { RemoveFromCart } from '../../store/cartReducer/actions';
import ListItem from '../../components/ListItem/ListItem';
import '../../components/ListItem/ListItem.scss';

const CartList: FC = () => {
  // @ts-ignore
  const language: Languages = useSelector((state: RootStateLanguage) => state.languageReducer.language);
  // @ts-ignore
  const cart: Cart[] = useSelector((state: RootStateCart) => state.cartReducer.cart);
  const dispatch = useDispatch();

  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <h1>{translations[language].cartTitle}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="list-section">
              <div className="ListItem">
                <h1 className="ListItem__subheading">Category</h1>
                <h1 className="ListItem__heading">Product</h1>
                <p className="ListItem__price">Price</p>
                <h1 className="ListItem__heading">Count</h1>
                <p className="ListItem__price">Sum</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="list-section">
              {cart &&
                cart.map((item) => {
                  return (
                    <ListItem
                      key={item.id}
                      image={item.image}
                      productName={item.productName}
                      productCategory={item.productCategory}
                      productDescription={item.productDescription}
                      productPrice={item.productPrice}
                      count={item.count}
                      sum={item.sum}
                      clickHandler={() => {
                        const product = item;
                        dispatch(RemoveFromCart(product));
                      }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartList;
