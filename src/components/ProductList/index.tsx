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
  return (
    <div className="product-list-wrapper">
      <div className="product-list-title">
        <span className="product-name">{productName}</span>
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
            />
          );
        })}
      </div>
    </div>
  );
}
