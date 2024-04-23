import React, { FC, ReactNode } from "react";

interface IProps {
  onChange?: (value: string) => void;
  children?: ReactNode;
  className?: string;
}

const style: React.CSSProperties = {
  color: "red",
  background: "yellow",
  border: "1px solid blue",
  borderRadius: 4,
  padding: "4px 10px",
};

const Input: FC<IProps> = ({ children, onChange, className }) => {
  return (
    <input
      style={style}
      className={className}
      placeholder="input"
      onChange={(e) => onChange && onChange(e.currentTarget.value)}
    >
      {children}
    </input>
  );
};

export default Input;
