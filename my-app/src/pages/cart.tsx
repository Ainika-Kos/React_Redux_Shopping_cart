import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/types';
import { translations } from '../locales/translations';
import { RemoveFromCart } from '../store/actions';
import ListItem from '../components/ListItem/ListItem';

const Cart: FC = () => {
  const language = useSelector((state: RootState) => state.language);
  const cart = useSelector((state: RootState) => state.cart);
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

export default Cart;
