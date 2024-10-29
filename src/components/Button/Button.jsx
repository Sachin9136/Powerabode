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
      className={`${className} text-black font-bold py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300`}
      style={{ backgroundColor: "#FFED05" }} // Custom background color
      {...props}
    >
      <i className={`bi bi-${icon}`}></i> {children}
    </button>
  );
}

export default Button;
