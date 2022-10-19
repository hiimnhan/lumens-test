import React from "react";
import './index.scss';
type Props = {
    title: string;
}
export default function PrimaryButton({title}: Props) {
    return (
        <div className="primary-button">
            <span className="primary-button-title">{title}</span>
        </div>
    )
}