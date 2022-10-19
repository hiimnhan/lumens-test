import { ButtonIcon } from "components/shared/Button";
import React from "react";
import './index.scss';
export default function Header() {
    return (
        <header className="header-wrapper">
            <ButtonIcon />
            <div className="header-title_primary">Silver Tier</div>
            <div className="header-title_secondary">
                In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.
            </div>
        </header>
    )
}