import { Card, CardProps } from 'components/Card';
import React, { useState } from 'react';
import BackArrow from 'assets/icons/back-arrow.svg';
import ForwardArrow from 'assets/icons/forward-arrow.svg';
import './index.scss';

export type ProductListProps = {
  productName: string;
  cards: CardProps[];
};

export function ProductList({ productName, cards }: ProductListProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const carouselScrollNext = () => {
    if (currentIdx === cards.length - 1) {
      setCurrentIdx(0);
      return;
    }
    setCurrentIdx((currentIdx) => currentIdx + 1);
  };
  const carouselScrollBack = () => {
    if (currentIdx === 0) {
      return;
    }
    setCurrentIdx((currentIdx) => currentIdx - 1);
  };

  return (
    <div className="product-list-wrapper">
      <div className="product-list-title">
        <span className="product-name">{productName}</span>
        <span onClick={() => carouselScrollBack()} className="title-icon back">
          <img src={BackArrow} alt="" />
        </span>
        <span onClick={() => carouselScrollNext()} className="title-icon">
          <img src={ForwardArrow} alt="" />
        </span>
      </div>
      <div className="product-list">
        {cards.map((card, index) => {
          const { imageSource, title, content, subContent } = card;
          return (
            <Card
              key={index}
              imageSource={imageSource}
              title={title}
              content={content}
              subContent={subContent}
              moving={currentIdx}
            />
          );
        })}
      </div>
    </div>
  );
}
