import React from "react";

function Button({
  children,
  type = "button", 
  className = "",
  icon = "",
  ...props
}) {
  return (
    <button
      className={`${className} text-white font-bold py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 `}
      style={{ backgroundColor: "#29385E" }} 
      {...props}
    >
      <i className={`bi bi-${icon}`}></i> {children}
    </button>
  );
}

export default Button;
