import React, { FC, ReactNode } from "react";
import { Input as AntdInput } from "antd";

interface IProps {
  onChange?: (value: string) => void;
  children?: ReactNode;
  className?: string;
}

const Input: FC<IProps> = ({ children, onChange, className }) => {
  return (
    <AntdInput
      className={className}
      placeholder="input"
      onChange={(e) => onChange && onChange(e.currentTarget.value)}
    >
      {children}
    </AntdInput>
  );
};

export default Input;
