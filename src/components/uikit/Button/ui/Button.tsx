import React, { FC, ReactNode, useState } from "react";

interface IProps {
  onClick?: () => void;
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

const Button: FC<IProps> = ({ children, onClick, className }) => {
  const [clicked, setClicked] = useState("");

  return (
    <button
      style={style}
      className={className}
      onClick={() => {
        setClicked("clicked");
        setTimeout(() => {
          setClicked("");
        }, 2000);
        onClick && onClick();
      }}
    >
      {clicked || children}
    </button>
  );
};

export default Button;
