import React, { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from 'react';
import NoImage from 'assets/images/no-image.jpeg';
import { ContentTypo } from 'components/shared/Typos';
import './index.scss';

export type CardProps = {
  imageSource: string | undefined;
  title: ReactNode | string;
  content: ReactNode | string;
  subContent?: ReactNode | string | null;
  moving?: number;
};
export function Card({
  imageSource = NoImage,
  title,
  content,
  subContent = null,
  moving = 0
}: CardProps) {
  return (
    <div
      style={{
        transform: `translate(-${moving * 100}%)`
      }}
      className="card-item">
      <img className="card-item-image" src={imageSource} alt="card-image" />
      <div className="card-item-content-wrapper">
        <p className="card-item-title">{title}</p>
        <div className="card-item-content">
          <ContentTypo>{content}</ContentTypo>
        </div>
        {subContent && <p className="card-item-sub-content">{subContent}</p>}
      </div>
    </div>
  );
}
