import React, { ReactNode } from 'react';

interface IButtonProps {
  disabled: true | false;
  children?: ReactNode | string;
  color?: string,
  name?: string,
  onClick?: (e: any) => void;
  radius: '0' | '1' | '2' | '3' | 'pill',
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<IButtonProps> = ({
  children,
  color = 'silver',
  disabled = false,
  name = 'mandala-button',
  onClick,
  radius = 'pill',
  type = 'button',
}) => {
  const calculateRadius = `br${(radius === "pill") ? '-pill' : radius}`
  const isDisabled = `${disabled ? 'o-40' : 'pointer'}`
  const options = `bg-${color} ${calculateRadius} ${isDisabled}}`;
  return (
    <button
      role="button"
      disabled={disabled}
      className={`button bn outline-0 h2 mv0 mw5 pv2 dim ph3 flex items-center justify-center white ${options}`}
      name={name}
      onClick={onClick}
      style={{ fontFamily: 'inherit' }}
      type={type}
    >
      {children || null}
    </button>
  );
};

export default Button;
