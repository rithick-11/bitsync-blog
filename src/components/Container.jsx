import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`px-3 sm:px-10 md:px-32 ${className}`}>{children}</div>
  );
};

export default Container;
