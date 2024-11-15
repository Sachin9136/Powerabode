import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Column, Row } from "../ComponentsIndex";
import OffCanvas from "./Drawer";
import { useNavigate } from "react-router-dom";
import DownArrow from "../../assets/Images/down-arrow-menu.svg"; 
import { Logo } from "../Img/ImportedImage";

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
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar

  // Detect scroll to toggle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // You can adjust this value for when the navbar becomes sticky
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSubmenu = (id, close = false) => {
    setIsSubmenuOpen((prevState) => ({
      ...prevState,
      [id]: close ? false : !prevState[id],
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
        { id: 1.1, name: "Cost and Value Philosophy", link: "/cost-and-value-philosophy" },
        { id: 1.2, name: "Article & Business Cases", link: "/article-business-cases-background" },
        { id: 1.2, name: "Blog", link: "/drilling-cost-transformation" },
      ],
    },
    { id: 2, name: "About Us & Themes", link: "/the-story-of-powerabode" },
    { id: 3, name: "Capex/Opex Program", link: "/success-formula-disruptive-and-controlled" },
    {
      id: 4,
      name: "Supply Chain by SLA",
      link: "#",
      submenu: [
        { id: 4.1, name: "Supply Chain by SLA", link: "/supply-chain-by-sla" },
        { id: 4.1, name: "Post Award Contract Management", link: "/post-award-contract-management" },
        { id: 4.2, name: "Category Strategy & Contract Strategy", link: "/category-strategy-contract-strategy" },
        { id: 4.3, name: "Commercial Assurance", link: "/commercial-assurance" },
        { id: 4.4, name: "Cost Recovery", link: "/cost-recovery" },
        { id: 4.5, name: "Tendering & Outsourcing", link: "/tendering-outsourcing" },
        { id: 4.6, name: "Materials Management", link: "/materials-management" },
      ],
    },
    {
      id: 5,
      name: "Systems & Delivery",
      link: "#",
      submenu: [
        { id: 5.1, name: "CODEX", link: "/codex-supply-chain" },
        { id: 5.1, name: "CM+", link: "/cm-for-contract" },
        { id: 5.2, name: "Academy", link: "/skillset-development" },
      ],
    },
    { id: 6, name: "Deal Design", link: "/deal-design" },
  ];

  return (
    <Row className={`flex justify-around items-center px-14 py-8 shadow-sm transition-all duration-500 ${isSticky ? "fixed top-0 left-0 w-full bg-white z-50 shadow-lg" : "relative bg-transparent"}`}>
      <Column className="flex items-center">
        <OffCanvas />
        <a href="/"><img src={Logo} alt="Logo" width="200px" /></a>
      </Column>

      <Column className="lg:flex items-center space-x-4">
        {/* Menu Items */}
        <Column className="hidden lg:flex items-center font-medium space-x-4 gap-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => toggleSubmenu(item.id)}
              onMouseLeave={() => toggleSubmenu(item.id, true)} // Close submenu on mouse leave
            >
              <NavLink
                to={item.link}
                className="text-sm flex items-center"
                onClick={item.submenu ? () => toggleSubmenu(item.id) : null}
              >
                {item.name}
                {item.submenu && (
                  <img
                    src={DownArrow}
                    alt="Arrow"
                    className={`ml-2 transition-transform ${isSubmenuOpen[item.id] ? "rotate-180" : ""}`}
                    style={{ width: "12px", height: "12px" }} // Adjust the size as needed
                  />
                )}
              </NavLink>

              {/* Submenu */}
              {item.submenu && isSubmenuOpen[item.id] && (
                <Column className="absolute left-0 py-2 w-48 bg-white shadow-lg rounded-lg z-10">
                  {item.submenu.map((subItem) => (
                    <NavLink
                      key={subItem.id}
                      to={subItem.link}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                      onClick={() => toggleSubmenu(item.id, true)} 
                    >
                      {subItem.name}
                    </NavLink>
                  ))}
                </Column>
              )}
            </div>
          ))}
        </Column>
      </Column>
    </Row>
  );
}

export default Navbar;
