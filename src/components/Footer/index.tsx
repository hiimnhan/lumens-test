import React from 'react';
import './index.scss';

import Home from 'assets/icons/home.svg';
import Bell from 'assets/icons/bell.svg';
import Wallet from 'assets/icons/wallet.svg';
import User from 'assets/icons/user.svg';

const Icons = [
  {
    id: 'home',
    icon: Home
  },
  {
    id: 'bell',
    icon: Bell
  },
  {
    id: 'wallet',
    icon: Wallet
  },
  {
    id: 'user',
    icon: User
  }
];

export function Footer() {
  return (
    <footer className="footer-wrapper">
      {Icons.map((icon) => (
        <div key={icon.id} className={`icon-container ${icon.id === 'bell' ? 'bell' : ''}`}>
          <img src={icon.icon} alt="" />
          {icon.id === 'bell' && <div className="red-dot"></div>}
        </div>
      ))}
    </footer>
  );
}
