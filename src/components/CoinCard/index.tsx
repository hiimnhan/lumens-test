import React, { ReactNode } from 'react';
import './index.scss';
import ForwardArrow from 'assets/icons/forward-arrow.svg';
import { ContentTypo } from 'components/shared/Typos';
import { PrimaryButton } from 'components/shared/Button';

function CoinCard() {
  return (
    <div className="coin-card">
      <p className="coin-title">Available Coin Balance</p>
      <p className="coin-balance">340</p>
      {/* try to use progress tag but still not work */}
      {/* <progress className="coin-progress" max={100} value={70}></progress> */}
      <div className="progress-bar" />
      <div className="coin-content">
        <ContentTypo>
          You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
        </ContentTypo>
      </div>
      <a href="" className="coin-benefit-button">
        <span>View tier benefit</span>
        <img src={ForwardArrow} alt="arrow" />
      </a>
      <PrimaryButton>My Coupons</PrimaryButton>
      <p className="coin-updated">Updated: 02/11/2021</p>
    </div>
  );
}

export default CoinCard;
