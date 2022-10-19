import { Card, CardProps } from 'components/Card';
import React from 'react';
import './index.scss';

export type ProductListProps = {
  productName: string;
  cards: CardProps[];
};

export function ProductList({ productName, cards }: ProductListProps) {
  return (
    <div className="product-list-wrapper">
      <span className="product-name">{productName}</span>
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
