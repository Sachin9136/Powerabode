import React from "react";

function Container({ children, className = "w-full", ...props }) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
}

export default Container;
