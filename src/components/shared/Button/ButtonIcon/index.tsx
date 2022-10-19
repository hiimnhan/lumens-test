import React from "react";
import BackArrow from 'assets/icons/back-arrow.svg';
import './index.scss';
type Props = {
    styles?: object
}
export default function ButtonIcon({styles}: Props) {
    return (
        <div style={{...styles}} className="button-icon">
            <img className="button-icon-image" src={BackArrow} alt="icon" />
        </div>
    )
}