import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button style={{background: '#c0c0c0'}}>{props.label}</button>;
};

export default Button;