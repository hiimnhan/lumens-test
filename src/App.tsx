import { useState } from 'react';
import CoinCard from 'components/CoinCard';
import Header from 'components/Header';
import './app.scss';
import { Card } from 'components/Card';
import { CategoryContainer } from 'components/CategoryContainer';
import { ProductList, ProductListProps } from 'components/ProductList';

import Oil1 from 'assets/images/oil/oil1.png';
import Oil2 from 'assets/images/oil/oil2.png';

import Rental1 from 'assets/images/rental/rental1.png';
import Rental2 from 'assets/images/rental/rental2.png';

import Fb1 from 'assets/images/fb/fb1.png';
import Fb2 from 'assets/images/fb/fb2.png';

import Coin from 'assets/icons/coin.svg';
import { ContentTypo, TextWithIcon } from 'components/shared/Typos';
import { Footer } from 'components/Footer';

const productLists: ProductListProps[] = [
  {
    productName: 'Petrol',
    cards: [
      {
        imageSource: Oil1,
        title: '15 Coins',
        content: '50% discount for every $100 top-up on your Shell Petrol Card'
      },
      {
        imageSource: Oil2,
        title: <TextWithIcon iconFirst iconSource={Coin} text="1,000 Coins" />,
        content: '70% discount top-up on your Shell Petrol Card',
        subContent: 'Insufficient coins'
      },
      {
        imageSource: Oil1,
        title: '15 Coins',
        content: '50% discount for every $100 top-up on your Shell Petrol Card'
      }
      // {
      //   imageSource: Oil1,
      //   title: '15 Coins',
      //   content: '50% discount for every $100 top-up on your Shell Petrol Card'
      // }
    ]
  },
  {
    productName: 'Rental Rebate',
    cards: [
      {
        imageSource: Rental1,
        title: '20 Coins',
        content: 'Get $20 Rental rebate'
      },
      {
        imageSource: Rental2,
        title: '15 Coins',
        content: 'Get $500 Rental rebate'
      }
    ]
  },
  {
    productName: 'Food and Beverage',
    cards: [
      {
        imageSource: Fb1,
        title: '25 Coins',
        content: 'NTUC Fairprice $50 Voucher'
      },
      {
        imageSource: Fb2,
        title: '5 Coins',
        content: 'Free Cold Stone Sundae at any flavour!'
      }
    ]
  }
];
function App() {
  return (
    <div className="App">
      <Header />
      <CoinCard />
      <CategoryContainer>
        {productLists.map((pr) => (
          <ProductList key={pr.productName} productName={pr.productName} cards={pr.cards} />
        ))}
      </CategoryContainer>
      <Footer />
    </div>
  );
}

export default App;
