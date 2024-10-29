import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Column, Row, Wraper } from "../ComponentsIndex";
import OffCanvas from "./Drawer";
import { useNavigate } from "react-router-dom";
import DownArrow from "../../assets/Images/down-arrow-menu.svg"; 

function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    navigate("/login");
  };

  const [isSubmenuOpen, setIsSubmenuOpen] = useState({
    1: false,
    4: false,
    5: false,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const toggleSubmenu = (id) => {
    setIsSubmenuOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const menuItems = [
    {
      id: 1,
      name: "Cost and Value Philosophy",
      link: "#",
      submenu: [
        { id: 1.1, name: "Submenu Item 1", link: "/submenu-item-1" },
        { id: 1.2, name: "Submenu Item 2", link: "/submenu-item-2" },
      ],
    },
    { id: 2, name: "About Us & Themes", link: "/" },
    { id: 3, name: "Capex/Opex Program", link: "/" },
    {
      id: 4,
      name: "Supply Chain by SLA",
      link: "#",
      submenu: [
        { id: 4.1, name: "Logistics", link: "/" },
        { id: 4.2, name: "Inventory Management", link: "/" },
      ],
    },
    {
      id: 5,
      name: "Systems & Delivery",
      link: "#",
      submenu: [
        { id: 5.1, name: "System Integration", link: "/" },
        { id: 5.2, name: "Delivery Models", link: "/" },
      ],
    },
    { id: 6, name: "Deal Design", link: "/" },
  ];

  return (
    <Row className="flex justify-between items-center px-8 py-8 shadow-sm">
      <Column className="flex items-center">
        <OffCanvas />
        <img src="src/assets/Images/logo.svg" alt="Logo" width="200px" />
      </Column>

      <Column className="lg:flex items-center space-x-4">
        {/* Menu Items */}
        <Column className="hidden lg:flex items-center font-semibold space-x-4 gap-3">
          {menuItems.map((item) => (
            <div key={item.id} className="relative group">
              <NavLink
                to={item.link}
                className="text-sm text-center flex items-center"
                onClick={item.submenu ? () => toggleSubmenu(item.id) : null}
              >
                {item.name}
                {item.submenu && (
                  <img
                    src={DownArrow}
                    alt="Arrow"
                    className={`ml-2 transition-transform ${
                      isSubmenuOpen[item.id] ? "rotate-180" : ""
                    }`}
                    style={{ width: "16px", height: "16px" }} // Adjust the size as needed
                  />
                )}
              </NavLink>

              {/* Submenu */}
              {item.submenu && isSubmenuOpen[item.id] && (
                <Column className="absolute left-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-lg z-10">
                  {item.submenu.map((subItem) => (
                    <NavLink
                      key={subItem.id}
                      to={subItem.link}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      {subItem.name}
                    </NavLink>
                  ))}
                </Column>
              )}
            </div>
          ))}
        </Column>

        {/* Search Bar */}
        <Column className="hidden md:flex items-center space-x-4 px-5">
          <Wraper className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search"
              className="border rounded-full px-4 py-2 w-52 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{
                backgroundImage: `url('/path-to-search-icon.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '10px center',
              }}
            />
          </Wraper>
        </Column>

      </Column>
    </Row>
  );
}

export default Navbar;
