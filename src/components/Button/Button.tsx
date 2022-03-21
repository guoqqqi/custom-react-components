import React from "react";

import "./Button.css";

export interface ButtonProps {
  label: string;
  style?: React.CSSProperties | undefined;
  type?: 'default' | 'danger' | 'primary';
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return <button
      onClick={props.onClick}
      style={props.style}
    >
      {props.label}
  </button>;
};

export default Button;
