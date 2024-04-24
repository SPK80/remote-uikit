import React, { FC, ReactNode } from "react";
import { Button as AntdButton } from "antd";

interface IProps {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
}

const Button: FC<IProps> = ({ children, onClick, className }) => {
  return (
    <AntdButton className={className} type="primary" onClick={onClick}>
      {children}
    </AntdButton>
  );
};

export default Button;
