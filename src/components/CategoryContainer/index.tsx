import React, { ReactNode } from 'react';
import './index.scss';
type Props = {
  children: ReactNode;
};

export function CategoryContainer({ children }: Props) {
  return <div className="category-container">{children}</div>;
}
