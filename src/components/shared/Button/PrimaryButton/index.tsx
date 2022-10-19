import React, { ReactNode } from 'react';
import './index.scss';
type Props = {
  children: ReactNode;
};
export default function PrimaryButton({ children }: Props) {
  return (
    <div className="primary-button">
      <span className="primary-button-title">{children}</span>
    </div>
  );
}
