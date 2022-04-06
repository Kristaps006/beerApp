import React from "react";

export const Button = ({ children, className, type }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
