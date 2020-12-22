import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Languages, RootStateLanguage } from '../store/languageReducer/types';
import { translations } from '../locales/translations';
import { products } from '../locales/products';
import Card from '../components/Card/Card';
import './home.scss';
import { AddToCart, RemoveFromCart } from '../store/cartReducer/actions';

const Home: FC = () => {
  // @ts-ignore
  const language: Languages = useSelector((state: RootStateLanguage) => state.languageReducer.language);

  const dispatch = useDispatch();
  

  return (
    <section>
      <div className="container-fluid">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <h1>{translations[language].homeTitle}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <div className="product-section">
              {products &&
                products.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      image={item.image}
                      productName={item.productName}
                      productCategory={item.productCategory}
                      productDescription={item.productDescription}
                      productPrice={item.productPrice}
                      addClickHandler={() => {
                        const product = item;
                        dispatch(AddToCart(product));
                      }}
                      removeClickHandler={() => {
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

// const mapStateToProps = (state: RootState) => {
//   return {
//     language: state.language,
//   };
// };

// const connector = connect(mapStateToProps);

// type PropsFromRedux = ConnectedProps<typeof connector>;

// export default connector(Home);

export default Home;
