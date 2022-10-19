import React, { ReactNode } from 'react';
import './index.scss';

type ContentTypoProps = {
  children: ReactNode;
};
export function ContentTypo({ children }: ContentTypoProps) {
  return <p className="typo-content">{children}</p>;
}

type TextWithIconProps = {
  iconFirst?: boolean;
  iconSource: string | undefined;
  text: string;
};
export function TextWithIcon({ iconFirst = true, iconSource, text }: TextWithIconProps) {
  return (
    <div className="text-icon-wrapper">
      {iconFirst && <img src={iconSource} />}
      <span className="text-icon-text">{text}</span>
      {!iconFirst && <img src={iconSource} />}
    </div>
  );
}
