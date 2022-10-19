import React, { ReactNode } from "react";
import './index.scss';


function CoinCard() {
    return (
        <div className="coin-card">
            <p className="coin-title">Available Coin Balance</p>
            <p className="coin-balance">340</p>
            {/* try to use progress tag but still not work */}
            {/* <progress className="coin-progress" max={100} value={70}></progress> */}
        </div>
    )
}

export default CoinCard;