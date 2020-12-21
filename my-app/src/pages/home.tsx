import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { translations } from '../locales/translations';
import { products } from '../locales/products';
import Card from '../components/Card/Card';
import './home.scss';

const Home: FC = () => {
  const language = useSelector((state: RootState) => state.language);

  const [productArray, setProducArray] = useState(products);

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
              {productArray &&
                productArray.map(
                  ({
                    id,
                    image,
                    productName,
                    productCategory,
                    productDescription,
                    productPrice,
                  }) => {
                    return (
                      <Card
                        key={id}
                        image={image}
                        productName={productName}
                        productCategory={productCategory}
                        productDescription={productDescription}
                        productPrice={productPrice}
                      />
                    );
                  }
                )}
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
