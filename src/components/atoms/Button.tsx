import React from "react";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} py-2 px-4 shadow-md rounded-md`}>
      {children}
    </button>
  );
};

export default Button;
