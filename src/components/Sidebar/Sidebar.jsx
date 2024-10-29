import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Button/Icon";

function Sidebar({ closeMenu }) {
  const menuItem = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/about-us" },
    { id: 3, name: "Programme & Services", link: "/programme-services" },
    { id: 4, name: "Get Involved", link: "/get-involved" },
    // { id: 4, name: "Dental Treatment", link: "/dental-treatment" },
    { id: 5, name: "News & Updates", link: "/news-updates"},
    { id: 6, name: "Service", link: "/plan" },
    { id: 7, name: "Blog", link: "/blog" },
  ];
  return (
    <>
      <ul className="">
        {menuItem.map((item) => (
          <li className="p-1" key={item.id}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-md ${
                  isActive
                    ? "bg-white text-black font-semibold shadow"
                    : "text-black font-medium hover:bg-orange-200 hover:text-black"
                }`
              }
              onClick={closeMenu}
            >
              <Icon className={`mr-2`} children={item.icon}></Icon>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sidebar;
